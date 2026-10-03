"use client";

import { useMemo, useState } from "react";
import {
  Archive,
  CheckCircle2,
  CircleDot,
  Clock3,
  FileText,
  FolderKanban,
  Layers3,
} from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Task = {
  id: string;
  title: string;
  status: string;
  group: string;
  outcome: string;
  priority: string;
  dependsOn: string;
  assignee: string;
};

type Asset = {
  id: string;
  label: string;
  path: string;
  purpose: string;
  creator: string;
  updated: string;
  status: string;
  source: string;
};

type Project = {
  id: string;
  name: string;
  purpose: string;
  status: string;
  repository: string;
  currentState: string[];
  tasks: Task[];
  assets: Asset[];
};

type HubData = {
  generatedAt: string;
  sourceUpdated: string;
  projects: Project[];
};

const statusStyles: Record<string, string> = {
  done: "border-emerald-200 bg-emerald-50 text-emerald-800",
  verified: "border-emerald-200 bg-emerald-50 text-emerald-800",
  reviewed: "border-sky-200 bg-sky-50 text-sky-800",
  in_progress: "border-amber-200 bg-amber-50 text-amber-900",
  active: "border-amber-200 bg-amber-50 text-amber-900",
  todo: "border-slate-200 bg-slate-50 text-slate-700",
  source: "border-violet-200 bg-violet-50 text-violet-800",
  draft: "border-slate-200 bg-slate-50 text-slate-700",
};

function readableStatus(status: string) {
  return status.replaceAll("_", " ");
}

function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold capitalize ${
        statusStyles[status.toLowerCase()] ??
        "border-slate-200 bg-white text-slate-700"
      }`}
    >
      {readableStatus(status)}
    </span>
  );
}

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white px-4 py-3 shadow-sm shadow-slate-950/[0.03]">
      <p className="text-2xl font-semibold tracking-tight text-slate-950">
        {value}
      </p>
      <p className="mt-0.5 text-sm text-slate-500">{label}</p>
    </div>
  );
}

export function ProjectDashboard({ data }: { data: HubData }) {
  const [selectedId, setSelectedId] = useState(data.projects[0]?.id ?? "");
  const selected =
    data.projects.find((project) => project.id === selectedId) ??
    data.projects[0];
  const snapshotLabel = `${data.generatedAt.replace("T", " ").slice(0, 16)} UTC`;

  const totals = useMemo(
    () => ({
      tasks: data.projects.reduce(
        (sum, project) => sum + project.tasks.length,
        0,
      ),
      open: data.projects.reduce(
        (sum, project) =>
          sum + project.tasks.filter((task) => task.status !== "done").length,
        0,
      ),
      assets: data.projects.reduce(
        (sum, project) => sum + project.assets.length,
        0,
      ),
    }),
    [data.projects],
  );

  if (!selected) {
    return (
      <main className="p-8 text-slate-700">No projects are registered.</main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <div className="mx-auto max-w-[1500px] px-4 py-4 sm:px-6 lg:px-8 lg:py-7">
        <header className="mb-5 flex flex-col gap-4 border-b border-slate-200 pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-teal-700">
              <Layers3 className="h-4 w-4" aria-hidden="true" />
              AI-WORK
            </div>
            <h1 className="text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
              Project ledger
            </h1>
          </div>
          <div className="text-sm text-slate-500">
            <p>{data.projects.length} registered projects</p>
            <p>Source updated {data.sourceUpdated || "—"}</p>
          </div>
        </header>

        <section
          className="mb-5 grid grid-cols-3 gap-3"
          aria-label="Hub summary"
        >
          <Metric label="Tasks" value={totals.tasks} />
          <Metric label="Open" value={totals.open} />
          <Metric label="Assets" value={totals.assets} />
        </section>

        <div className="grid gap-5 lg:grid-cols-[320px_minmax(0,1fr)]">
          <aside className="rounded-3xl border border-slate-200 bg-slate-950 p-3 text-white shadow-xl shadow-slate-900/10 lg:sticky lg:top-6 lg:self-start">
            <div className="flex items-center gap-2 px-3 py-3 text-sm font-semibold text-slate-300">
              <FolderKanban className="h-4 w-4" aria-hidden="true" />
              Projects
            </div>
            <nav className="space-y-2" aria-label="Projects">
              {data.projects.map((project) => {
                const isSelected = project.id === selected.id;
                return (
                  <button
                    type="button"
                    key={project.id}
                    onClick={() => setSelectedId(project.id)}
                    className={`w-full rounded-2xl border p-4 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 ${
                      isSelected
                        ? "border-teal-400/60 bg-teal-400/15"
                        : "border-white/10 bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.08]"
                    }`}
                    aria-current={isSelected ? "page" : undefined}
                  >
                    <div className="mb-2 flex items-start justify-between gap-3">
                      <span className="font-semibold leading-5">
                        {project.name}
                      </span>
                      <span
                        className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${
                          project.status === "done"
                            ? "bg-emerald-400"
                            : "bg-amber-400"
                        }`}
                        aria-label={`Status: ${readableStatus(project.status)}`}
                      />
                    </div>
                    <p className="line-clamp-2 text-sm leading-5 text-slate-400">
                      {project.purpose}
                    </p>
                    <div className="mt-3 flex gap-3 text-xs text-slate-400">
                      <span>{project.tasks.length} tasks</span>
                      <span>{project.assets.length} assets</span>
                    </div>
                  </button>
                );
              })}
            </nav>
          </aside>

          <section className="min-w-0 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm shadow-slate-950/[0.04]">
            <div className="border-b border-slate-200 bg-[radial-gradient(circle_at_top_right,rgba(13,148,136,0.13),transparent_45%)] p-5 sm:p-7">
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <StatusBadge status={selected.status} />
                <span className="font-mono text-xs text-slate-500">
                  {selected.id}
                </span>
              </div>
              <h2 className="max-w-4xl text-2xl font-semibold tracking-tight sm:text-3xl">
                {selected.name}
              </h2>
              <p className="mt-3 max-w-4xl text-base leading-7 text-slate-600">
                {selected.purpose}
              </p>
              <div className="mt-5 rounded-2xl border border-slate-200/80 bg-white/80 p-4 backdrop-blur-sm">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                  Current state
                </p>
                <p className="text-sm leading-6 text-slate-700">
                  {selected.currentState[0] ||
                    "No current-state summary recorded."}
                </p>
              </div>
            </div>

            <Tabs defaultValue="tasks" className="p-4 sm:p-7">
              <TabsList className="mb-5 grid h-auto w-full grid-cols-2 bg-slate-100 p-1 sm:w-[360px]">
                <TabsTrigger value="tasks" className="gap-2 py-2.5">
                  <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                  Tasks ({selected.tasks.length})
                </TabsTrigger>
                <TabsTrigger value="assets" className="gap-2 py-2.5">
                  <Archive className="h-4 w-4" aria-hidden="true" />
                  Assets ({selected.assets.length})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="tasks" className="space-y-3">
                {selected.tasks.map((task) => (
                  <article
                    key={task.id}
                    className="rounded-2xl border border-slate-200 p-4 transition hover:border-slate-300 hover:shadow-sm sm:p-5"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div className="min-w-0">
                        <div className="mb-2 flex flex-wrap items-center gap-2">
                          <span className="font-mono text-xs font-bold text-teal-700">
                            {task.id}
                          </span>
                          <span className="text-xs text-slate-400">
                            {task.group}
                          </span>
                        </div>
                        <h3 className="text-base font-semibold leading-6 sm:text-lg">
                          {task.title}
                        </h3>
                        {task.outcome && (
                          <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-600">
                            {task.outcome}
                          </p>
                        )}
                      </div>
                      <StatusBadge status={task.status} />
                    </div>
                    {(task.priority || task.dependsOn) && (
                      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 border-t border-slate-100 pt-3 text-xs text-slate-500">
                        {task.priority && (
                          <span>Priority: {task.priority}</span>
                        )}
                        {task.dependsOn && (
                          <span>Depends on: {task.dependsOn}</span>
                        )}
                      </div>
                    )}
                  </article>
                ))}
              </TabsContent>

              <TabsContent value="assets" className="space-y-3">
                {selected.assets.map((asset) => (
                  <article
                    key={asset.id}
                    className="grid gap-3 rounded-2xl border border-slate-200 p-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:p-5"
                  >
                    <div className="min-w-0">
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <FileText
                          className="h-4 w-4 text-teal-700"
                          aria-hidden="true"
                        />
                        <span className="font-mono text-xs font-bold text-teal-700">
                          {asset.id}
                        </span>
                        <StatusBadge status={asset.status} />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        {asset.label}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {asset.purpose}
                      </p>
                      <p className="mt-3 break-all font-mono text-xs text-slate-400">
                        {asset.path}
                      </p>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-slate-500 sm:text-right">
                      <Clock3
                        className="h-3.5 w-3.5 sm:hidden"
                        aria-hidden="true"
                      />
                      <div>
                        <p>{asset.updated}</p>
                        <p className="mt-1 max-w-[220px]">{asset.source}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </TabsContent>
            </Tabs>
          </section>
        </div>

        <footer className="mt-6 flex flex-col gap-1 border-t border-slate-200 pt-4 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <span className="flex items-center gap-1.5">
            <CircleDot className="h-3.5 w-3.5" aria-hidden="true" />
            Generated from the local AI-WORK hub
          </span>
          <span>Snapshot {snapshotLabel}</span>
        </footer>
      </div>
    </main>
  );
}
