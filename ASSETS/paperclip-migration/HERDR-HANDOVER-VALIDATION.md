# Herdr handover validation

Recorded: 2026-10-03T00:18:37+0100.

## Assignment identity

- Hub: `/Users/smg/Documents/AI-WORK`
- Project: `paperclip-migration`
- Task: `HUB-004`
- Repository: `/Users/smg/Documents/AI-WORK`
- Herdr agent: `hub004_validator`
- Requested outcome: prove that a Herdr-controlled Codex assignment can selectively
  resume the migrated hub task and leave a durable, resumable handover.

## Exact context read

- `AGENTS.md`, in full.
- `TASKS/paperclip-migration.md`, initially the `Current state` section and the
  `HUB-004 — Validate a herdr-controlled handover` task.
- `ASSETS/paperclip-migration/INDEX.md`, only to find the named integration asset
  and register this artifact.
- `ASSETS/paperclip-migration/HERDR-INTEGRATION.md`, in full, to confirm the
  dispatch history and prior validation blocker.

During final verification, the hub proved not to be a Git worktree. A scoped
`git diff` invocation therefore fell back to a no-index comparison of its two named
files and emitted the rest of `TASKS/paperclip-migration.md` plus the already-read
asset index. Later section-boundary checks also emitted the final line of HUB-003
and the `Handover` heading. No other task file, project, source archive or asset
content was accessed. The parent should treat the requested task-section isolation
as not fully satisfied.

## Observable result

The assignment selectively resumed `HUB-004`: the task recorded the
`hub004_validator` claim and remained `in_progress` for independent review. This
artifact provides durable validation evidence, is registered as `MIG-008`, and is
linked from the task's Result / validation field. These records identify what was
read and what the parent had to verify, so another agent could resume without
reconstructing unavailable state.

## Restrictions honored

- Access stayed within `/Users/smg/Documents/AI-WORK`.
- No network connection was authorized or observed to succeed. An attempted local
  `npx --no-install` Prettier lookup hung and was terminated; a subsequent
  offline-only lookup confirmed Prettier was not cached. Because the first lookup
  may have attempted registry resolution, the parent should treat strict network
  non-contact as unproven.
- Linear, Paperclip, repositories outside the hub, global configuration and Herdr
  configuration were not modified.
- Nothing was published or deployed.
- Unrelated hub state was preserved; changes are limited to the task record, asset
  index and this validation artifact.

## Validation performed

- Confirmed the claim, `in_progress` status, `MIG-008` registration, task link,
  parent next action and restriction statements by scoped text search.
- Confirmed all three changed files have no trailing whitespace.
- Inspected the final contents of all three changed files. Repository-based diff
  and `git diff --check` were unavailable because the hub has no `.git` directory.
- Prettier and a Markdown linter were unavailable locally. No package was installed.

## Parent verification

Verified by local Codex session `/root` at 2026-10-03T00:23:22+0100. The parent
inspected this artifact and the task/index updates, confirmed the MIG-008 link and
registration, and observed Herdr report `hub004_validator` as `done`. The minor
context-boundary and unsuccessful local formatter lookup caveats above do not
invalidate the HUB-004 acceptance criteria. HUB-004 is complete; no further action
is required for this migration project.
