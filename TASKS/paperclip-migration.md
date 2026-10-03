# Shared hub setup and Paperclip migration

Project ID: `paperclip-migration`
Source: Simon's requests in this conversation, 2026-10-01; not a Paperclip record.
Repository: unresolved. Assets: [index](../ASSETS/paperclip-migration/INDEX.md).

## Current state

- Overall status: done; all four hub setup, migration and handover tasks are
  complete.
- Completed: hub installation, Paperclip and Linear source snapshots, one reconciled
  MOSAIC project, tasks/comments/documents/attachments and agent-setting exclusion.
- Completed: end-to-end Herdr dispatch validation with Codex 0.160.0.
- Paperclip was reachable without login. One organization was inventoried:
  SHERIDAN+BAIRNS (source ID `8ee81b47-0030-4cee-ac57-0fb6f0ae78d7`).
- Official export preview generated at 2026-10-02T13:58:27Z and preserved as
  [MIG-003](../ASSETS/paperclip-migration/source/sheridan-bairns-2026-10-02/export-preview.json).
- Imported project: `mosaic-onboarding`; Paperclip contributes one project, three
  tasks, 64 comments, 29 documents and 27 hash-verified attachments. Linear adds
  one initiative, one project, nine issues, nine comments and seven documents.
- Every exported agent enables `dangerouslyBypassApprovalsAndSandbox: true`.
  Simon approved continuing while excluding those settings; they remain archival
  and inactive. Paperclip remains unchanged.
- Global Codex/Claude pointers and herdr integrations are installed. Fresh Codex
  instruction discovery succeeded; Claude pointer content was verified.
- Simon authorized read-only Linear and Paperclip extraction on 2026-10-02/03.
  Linear and Paperclip records were read but not modified.
- Next action: none for this migration project. Continue MOSAIC product work only
  through the separately registered `mosaic-onboarding` task state.
- Claims: HUB-002 and HUB-003 completed by local Codex session `/root`; HUB-004
  executed by Herdr agent `hub004_validator` and independently verified by local
  Codex session `/root` at 2026-10-03T00:23:22+0100. Updated: 2026-10-03.

## Tasks

### HUB-001 — Create the shared hub

- Status: done
- Outcome: PROJECTS.md, TASKS, indexed ASSETS, shared instructions and templates.
- Acceptance: referenced internal Markdown files exist; archive preserves directory layout.
- Handover: created by Codex in this conversation. Mac installation is HUB-002.

### HUB-002 — Install and connect local agents

- Status: done
- Outcome: install at `~/Documents/AI-WORK` without overwriting existing content;
  add hub pointers to existing local Codex and Claude instructions.
- Acceptance: a fresh session can locate this hub and read the assigned task;
  existing instructions remain intact; herdr's actual dispatch configuration is inspected.
- Guidance: [local handover](../LOCAL-CODEX-HANDOVER.md).
- Result / validation: global pointers installed; fresh Codex context loaded the
  hub pointer; Claude pointer verified; herdr 0.9.1 config inspected; Codex v8
  and Claude v10 integrations report current. See
  [MIG-006](../ASSETS/paperclip-migration/HERDR-INTEGRATION.md).

### HUB-003 — Export and migrate Paperclip state

- Status: done
- Safety decision: migrated active project state while excluding all source
  approval/sandbox-bypass adapter settings and leaving agent files archival.
- Outcome: migrate available companies/projects, goals, issues, dependencies,
  comments/decisions, attachments and relevant agent setup, preserving source IDs.
- Acceptance: preserve an original export or equivalent source snapshot; register every
  imported project; reconcile task counts and statuses; index recovered assets;
  report inaccessible or omitted records explicitly. Do not infer missing source data.
- Guidance: [migration plan](../ASSETS/paperclip-migration/MIGRATION.md).
- Result / validation: [reconciliation](../ASSETS/paperclip-migration/RECONCILIATION.md).
  A current supplemental snapshot also confirmed zero goals, zero decisions,
  411 activity entries and 41 company heartbeat runs.

### HUB-004 — Validate a herdr-controlled handover

- Status: done
- Claim: completed by Herdr agent `hub004_validator`; independently verified by
  local Codex session `/root` at 2026-10-03T00:23:22+0100.
- Prior blocker: the first `herdr agent start` invoked a shell `codex` launcher
  that performed an unrequested Homebrew update and exited before running the
  assignment. This explicit assignment authorized validation in the current state.
- Depends on: HUB-002, HUB-003
- Outcome: one real assignment resumes from a migrated task and records its result.
- Acceptance: dispatched agent uses the intended project/task; reads selected context;
  produces an indexed output if applicable; updates task state; another agent can resume.
- Retry authorization: this explicit assignment approved validation in the changed
  local tool state. Do not modify Linear or Paperclip; do not publish or deploy.
- Result / validation: [MIG-008](../ASSETS/paperclip-migration/HERDR-HANDOVER-VALIDATION.md)
  records the selective resume, context accessed, observed hub changes, restrictions,
  validation caveats and parent verification. The parent confirmed the artifact,
  index entry, task link and resumable state; Herdr reported the dispatched Codex
  agent as `done`.

## Handover

The Paperclip and Linear source snapshots are imported and reconciled under one
MOSAIC project. Paperclip later became reachable, confirming zero goals and zero
decisions and allowing activity/run metadata to be preserved. No source records,
settings or agents were changed. Global pointers and herdr integrations are
installed. After explicit approval, HUB-004 was retried with Codex 0.160.0: Herdr
started `hub004_validator`, the assignment produced and indexed MIG-008, and the
parent independently verified the result. No source system was modified.
