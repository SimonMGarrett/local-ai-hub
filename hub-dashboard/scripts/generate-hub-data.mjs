import { createHash } from "node:crypto";
import {
  closeSync,
  existsSync,
  mkdirSync,
  openSync,
  readFileSync,
  readdirSync,
  readSync,
  statSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const projectDir = path.resolve(scriptDir, "..");
const hubDir = process.env.AI_WORK_HUB
  ? path.resolve(process.env.AI_WORK_HUB)
  : path.resolve(projectDir, "..");
const projectsFile = path.join(hubDir, "PROJECTS.md");
const assetsDir = path.join(hubDir, "ASSETS");
const outputFile = path.join(projectDir, "lib", "hub-data.json");
const previewDir = path.join(projectDir, "public", "asset-previews");
const maxPreviewBytes = 128 * 1024;

const imageExtensions = new Set([
  ".avif",
  ".bmp",
  ".gif",
  ".heic",
  ".jpeg",
  ".jpg",
  ".png",
  ".svg",
  ".tif",
  ".tiff",
  ".webp",
]);

const binaryExtensions = new Set([
  ".7z",
  ".dmg",
  ".doc",
  ".docx",
  ".gz",
  ".mov",
  ".mp3",
  ".mp4",
  ".pdf",
  ".ppt",
  ".pptx",
  ".tar",
  ".wav",
  ".xls",
  ".xlsx",
  ".zip",
]);

if (!existsSync(projectsFile) || !existsSync(assetsDir)) {
  if (existsSync(outputFile)) {
    console.log(
      "Hub source or local assets unavailable; keeping the generated snapshot.",
    );
    process.exit(0);
  }
  throw new Error(`Hub source not found: ${hubDir}`);
}

function tableRows(markdown) {
  return markdown
    .split("\n")
    .filter((line) => line.startsWith("|") && line.endsWith("|"))
    .map((line) =>
      line
        .slice(1, -1)
        .split("|")
        .map((cell) => cell.trim()),
    )
    .filter(
      (cells) =>
        cells.length > 1 &&
        !cells[0].match(/^(Project ID|Asset ID|-+)$/i) &&
        !cells.every((cell) => /^-+$/.test(cell)),
    );
}

function linkFromCell(cell) {
  const match = cell.match(/^\[([^\]]+)]\(([^)]+)\)$/);
  return match
    ? { label: match[1], href: match[2] }
    : { label: cell, href: "" };
}

function plainText(value = "") {
  return value
    .replace(/\[([^\]]+)]\([^)]+\)/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

function section(markdown, heading) {
  const start = markdown.indexOf(`## ${heading}`);
  if (start === -1) return "";
  const bodyStart = start + heading.length + 3;
  const next = markdown.indexOf("\n## ", bodyStart);
  return markdown.slice(bodyStart, next === -1 ? undefined : next).trim();
}

function bulletItems(markdown) {
  const items = [];
  for (const line of markdown.split("\n")) {
    if (line.startsWith("- ")) {
      items.push(line.slice(2));
    } else if (line.trim() && items.length > 0) {
      items[items.length - 1] += ` ${line.trim()}`;
    }
  }
  return items.map(plainText);
}

function fieldValue(body, label) {
  const lines = body.split("\n");
  const labelPattern = label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const start = lines.findIndex((line) =>
    new RegExp(`^- ${labelPattern}:`, "i").test(line),
  );
  if (start === -1) return "";

  const value = [lines[start].replace(/^- [^:]+:\s*/, "")];
  for (let index = start + 1; index < lines.length; index += 1) {
    if (/^- [^:]+:/.test(lines[index]) || /^###?\s/.test(lines[index])) break;
    if (lines[index].trim()) value.push(lines[index].trim());
  }
  return plainText(value.join(" "));
}

function parseTasks(markdown) {
  const headingPattern = /^###\s+([^—\n]+?)\s+—\s+(.+)$/gm;
  const headings = [...markdown.matchAll(headingPattern)];

  return headings.map((match, index) => {
    const bodyStart = match.index + match[0].length;
    const bodyEnd = headings[index + 1]?.index ?? markdown.length;
    const body = markdown.slice(bodyStart, bodyEnd);
    const preceding = markdown.slice(0, match.index);
    const groupMatches = [...preceding.matchAll(/^##\s+(.+)$/gm)];

    return {
      id: match[1].trim(),
      title: match[2].trim(),
      status: fieldValue(body, "Status") || "unknown",
      group: groupMatches.at(-1)?.[1] ?? "Tasks",
      outcome: fieldValue(body, "Outcome"),
      priority:
        fieldValue(body, "Priority / order") ||
        fieldValue(body, "Priority / scope"),
      dependsOn: fieldValue(body, "Depends on"),
      assignee:
        fieldValue(body, "Assignee / claim") || fieldValue(body, "Claim"),
    };
  });
}

function parseAssets(markdown, assetBase) {
  return tableRows(markdown).map((cells) => {
    const file = linkFromCell(cells[1]);
    return {
      id: cells[0],
      label: file.label,
      path: file.href ? path.posix.join(assetBase, file.href) : "",
      purpose: plainText(cells[2]),
      creator: plainText(cells[3]),
      updated: cells[4],
      status: cells[5],
      source: plainText(cells[6]),
    };
  });
}

function readPrefix(file, length) {
  const descriptor = openSync(file, "r");
  try {
    const buffer = Buffer.alloc(length);
    const bytesRead = readSync(descriptor, buffer, 0, length, 0);
    return buffer.subarray(0, bytesRead);
  } finally {
    closeSync(descriptor);
  }
}

function looksLikeText(buffer) {
  if (buffer.length === 0) return true;
  if (buffer.includes(0)) return false;

  const decoded = buffer.toString("utf8");
  const replacementCharacters = decoded.match(/\uFFFD/g)?.length ?? 0;
  const controlCharacters = [...buffer].filter(
    (byte) => byte < 32 && ![9, 10, 12, 13].includes(byte),
  ).length;

  return (
    replacementCharacters / decoded.length < 0.01 &&
    controlCharacters / buffer.length < 0.02
  );
}

function assetKind(extension, sample) {
  if (imageExtensions.has(extension)) return "image";
  if (binaryExtensions.has(extension)) return "binary";
  return looksLikeText(sample) ? "text" : "binary";
}

function walkFiles(directory) {
  if (!existsSync(directory)) return [];

  return readdirSync(directory, { withFileTypes: true })
    .sort((left, right) => left.name.localeCompare(right.name))
    .flatMap((entry) => {
      const absolutePath = path.join(directory, entry.name);
      if (entry.isDirectory()) return walkFiles(absolutePath);
      return entry.isFile() ? [absolutePath] : [];
    });
}

function generateAssetFiles() {
  mkdirSync(previewDir, { recursive: true });

  return walkFiles(assetsDir).map((absolutePath) => {
    const stats = statSync(absolutePath);
    const relativePath = path
      .relative(hubDir, absolutePath)
      .split(path.sep)
      .join("/");
    const extension = path.extname(absolutePath).toLowerCase();
    const sample = readPrefix(absolutePath, Math.min(stats.size, 8192));
    const kind = assetKind(extension, sample);
    let previewUrl = "";

    if (kind === "text") {
      const preview = readPrefix(
        absolutePath,
        Math.min(stats.size, maxPreviewBytes),
      );
      const previewName = `${createHash("sha256")
        .update(relativePath)
        .digest("hex")
        .slice(0, 20)}.txt`;
      writeFileSync(path.join(previewDir, previewName), preview);
      previewUrl = `/asset-previews/${previewName}`;
    }

    return {
      path: relativePath,
      name: path.basename(absolutePath),
      directory: path.posix.dirname(relativePath),
      extension: extension.slice(1),
      kind,
      size: stats.size,
      modifiedAt: stats.mtime.toISOString(),
      previewUrl,
      previewTruncated: kind === "text" && stats.size > maxPreviewBytes,
    };
  });
}

const projectRows = tableRows(readFileSync(projectsFile, "utf8"));
const projects = projectRows.map((cells) => {
  const tasksLink = linkFromCell(cells[5]);
  const assetsLink = linkFromCell(cells[6]);
  const taskMarkdown = readFileSync(path.join(hubDir, tasksLink.href), "utf8");
  const assetMarkdown = readFileSync(
    path.join(hubDir, assetsLink.href),
    "utf8",
  );
  const currentState = bulletItems(section(taskMarkdown, "Current state"));

  return {
    id: cells[0],
    name: cells[1],
    purpose: plainText(cells[2]),
    status: cells[3],
    repository: plainText(cells[4]),
    currentState,
    tasks: parseTasks(taskMarkdown),
    assets: parseAssets(assetMarkdown, path.posix.dirname(assetsLink.href)),
  };
});

const output = {
  generatedAt: new Date().toISOString(),
  sourceUpdated:
    readFileSync(projectsFile, "utf8").match(
      /^Updated:\s*([^.]+)(?:\.|$)/m,
    )?.[1] ?? "",
  projects,
  assetFiles: generateAssetFiles(),
};

mkdirSync(path.dirname(outputFile), { recursive: true });
writeFileSync(outputFile, `${JSON.stringify(output, null, 2)}\n`);
console.log(`Generated ${outputFile} from ${projects.length} projects.`);
