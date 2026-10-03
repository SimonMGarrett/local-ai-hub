"use client";

import { useEffect, useMemo, useState } from "react";
import {
  File,
  FileCode2,
  FileImage,
  FolderOpen,
  HardDrive,
  Search,
} from "lucide-react";

export type AssetFile = {
  path: string;
  name: string;
  directory: string;
  extension: string;
  kind: "text" | "image" | "binary";
  size: number;
  modifiedAt: string;
  previewUrl: string;
  previewTruncated: boolean;
};

function formatBytes(bytes: number) {
  if (bytes === 0) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  const unitIndex = Math.min(
    Math.floor(Math.log(bytes) / Math.log(1024)),
    units.length - 1,
  );
  const value = bytes / 1024 ** unitIndex;
  return `${value.toFixed(value >= 10 || unitIndex === 0 ? 0 : 1)} ${units[unitIndex]}`;
}

function KindIcon({ kind }: { kind: AssetFile["kind"] }) {
  if (kind === "text") {
    return <FileCode2 className="h-4 w-4" aria-hidden="true" />;
  }
  if (kind === "image") {
    return <FileImage className="h-4 w-4" aria-hidden="true" />;
  }
  return <File className="h-4 w-4" aria-hidden="true" />;
}

function TextPreview({ file }: { file: AssetFile }) {
  const [content, setContent] = useState("");
  const [state, setState] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    const controller = new AbortController();

    fetch(file.previewUrl, { signal: controller.signal })
      .then((response) => {
        if (!response.ok)
          throw new Error(`Preview returned ${response.status}`);
        return response.text();
      })
      .then((text) => {
        setContent(text);
        setState("ready");
      })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError")
          return;
        setState("error");
      });

    return () => controller.abort();
  }, [file.previewUrl]);

  if (state === "loading") {
    return (
      <div className="grid min-h-64 place-items-center bg-slate-950 text-sm text-slate-400">
        Loading preview…
      </div>
    );
  }

  if (state === "error") {
    return (
      <div className="grid min-h-64 place-items-center bg-slate-950 px-6 text-center text-sm text-rose-300">
        This local preview could not be loaded. Regenerate the hub data and try
        again.
      </div>
    );
  }

  const lines = content.split(/\r?\n/);

  return (
    <div
      className="max-h-[70vh] overflow-auto bg-slate-950 py-3 text-[13px] leading-6 text-slate-200"
      aria-label={`Text preview of ${file.path}`}
      tabIndex={0}
    >
      {lines.map((line, index) => (
        <div
          className="grid grid-cols-[3.5rem_minmax(0,1fr)] hover:bg-white/[0.04]"
          key={`${index}-${line.slice(0, 24)}`}
        >
          <span
            className="select-none border-r border-slate-800 pr-3 text-right font-mono text-slate-600"
            aria-hidden="true"
          >
            {index + 1}
          </span>
          <code className="whitespace-pre-wrap break-words px-4 font-mono">
            {line || " "}
          </code>
        </div>
      ))}
    </div>
  );
}

export function AssetBrowser({ files }: { files: AssetFile[] }) {
  const [query, setQuery] = useState("");
  const [selectedPath, setSelectedPath] = useState(files[0]?.path ?? "");
  const filteredFiles = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return files;
    return files.filter((file) =>
      file.path.toLowerCase().includes(normalizedQuery),
    );
  }, [files, query]);
  const selected = files.find((file) => file.path === selectedPath) ?? files[0];
  const textCount = files.filter((file) => file.kind === "text").length;
  const totalSize = files.reduce((sum, file) => sum + file.size, 0);

  if (!selected) {
    return (
      <section className="rounded-3xl border border-slate-200 bg-white p-8 text-center text-slate-600">
        No files were found under <code className="font-mono">ASSETS/</code>.
      </section>
    );
  }

  return (
    <section aria-labelledby="asset-browser-title">
      <div className="mb-5 flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-950/[0.04] sm:flex-row sm:items-end sm:justify-between sm:p-6">
        <div>
          <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-teal-700">
            <FolderOpen className="h-4 w-4" aria-hidden="true" />
            Local asset library
          </div>
          <h2
            id="asset-browser-title"
            className="text-2xl font-semibold tracking-tight"
          >
            Browse files in ASSETS
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            {files.length} files · {textCount} text previews ·{" "}
            {formatBytes(totalSize)}
          </p>
        </div>
        <label className="relative block w-full sm:max-w-sm">
          <span className="sr-only">Search asset filenames</span>
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search filenames…"
            className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-100"
          />
        </label>
      </div>

      <div className="grid min-h-[620px] gap-5 lg:grid-cols-[360px_minmax(0,1fr)]">
        <div className="min-w-0 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm shadow-slate-950/[0.04]">
          <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3 text-xs font-semibold text-slate-500">
            <span>Files</span>
            <span>{filteredFiles.length}</span>
          </div>
          <div className="max-h-[70vh] overflow-y-auto p-2" role="listbox">
            {filteredFiles.length ? (
              filteredFiles.map((file) => {
                const isSelected = file.path === selected.path;
                return (
                  <button
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    key={file.path}
                    onClick={() => setSelectedPath(file.path)}
                    className={`mb-1 flex w-full items-start gap-3 rounded-xl px-3 py-3 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 ${
                      isSelected
                        ? "bg-teal-50 text-teal-950"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span
                      className={`mt-0.5 ${isSelected ? "text-teal-700" : "text-slate-400"}`}
                    >
                      <KindIcon kind={file.kind} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-medium">
                        {file.name}
                      </span>
                      <span className="mt-1 block truncate font-mono text-[11px] text-slate-400">
                        {file.directory}
                      </span>
                    </span>
                    <span className="shrink-0 text-[11px] text-slate-400">
                      {formatBytes(file.size)}
                    </span>
                  </button>
                );
              })
            ) : (
              <p className="px-4 py-10 text-center text-sm text-slate-500">
                No filenames match “{query}”.
              </p>
            )}
          </div>
        </div>

        <article className="min-w-0 self-start overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm shadow-slate-950/[0.04]">
          <header className="border-b border-slate-200 px-5 py-4 sm:px-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-teal-700">
                  <KindIcon kind={selected.kind} />
                  {selected.kind === "text" ? "Text preview" : selected.kind}
                </div>
                <h3 className="break-all font-mono text-sm font-semibold text-slate-950 sm:text-base">
                  {selected.path}
                </h3>
              </div>
              <div className="shrink-0 text-sm text-slate-500 sm:text-right">
                <p>{formatBytes(selected.size)}</p>
                <p className="mt-1 text-xs">
                  {selected.extension
                    ? `.${selected.extension}`
                    : "No extension"}
                </p>
              </div>
            </div>
            {selected.previewTruncated && (
              <p className="mt-3 rounded-lg bg-amber-50 px-3 py-2 text-xs leading-5 text-amber-900">
                Preview limited to the first 128 KB of this file.
              </p>
            )}
          </header>

          {selected.kind === "text" ? (
            <TextPreview key={selected.previewUrl} file={selected} />
          ) : (
            <div className="grid min-h-80 place-items-center bg-slate-50 p-8 text-center">
              <div>
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-slate-200 bg-white text-slate-500 shadow-sm">
                  {selected.kind === "image" ? (
                    <FileImage className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <HardDrive className="h-6 w-6" aria-hidden="true" />
                  )}
                </span>
                <p className="mt-4 font-semibold text-slate-800">
                  {selected.kind === "image" ? "Image file" : "Binary file"}
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  {formatBytes(selected.size)} · content preview unavailable
                </p>
              </div>
            </div>
          )}
        </article>
      </div>
    </section>
  );
}
