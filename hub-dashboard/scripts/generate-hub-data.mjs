import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const projectDir = path.resolve(scriptDir, "..");
const hubDir = process.env.AI_WORK_HUB
  ? path.resolve(process.env.AI_WORK_HUB)
  : path.resolve(projectDir, "..");
const projectsFile = path.join(hubDir, "PROJECTS.md");
const outputFile = path.join(projectDir, "lib", "hub-data.json");

if (!existsSync(projectsFile)) {
  if (existsSync(outputFile)) {
    console.log("Hub source unavailable; keeping the generated snapshot.");
    process.exit(0);
  }
  throw new Error(`Hub source not found: ${projectsFile}`);
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
};

mkdirSync(path.dirname(outputFile), { recursive: true });
writeFileSync(outputFile, `${JSON.stringify(output, null, 2)}\n`);
console.log(`Generated ${outputFile} from ${projects.length} projects.`);
