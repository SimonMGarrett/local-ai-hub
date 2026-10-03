# Handover to local Codex

## User-authorized objective

Install this shared hub at `~/Documents/AI-WORK`, migrate Simon's Paperclip data
from `http://127.0.0.1:3100/`, and connect it to the existing herdr workflow for
Codex/Claude/other agents with selective context loading.

Status: completed on 2026-10-03. The sections below preserve the installation
and dispatch contract used for the migration.

## Start here

1. Read this hub's AGENTS.md and TASKS/paperclip-migration.md.
2. Check for an existing destination. Install/merge without overwriting existing
   user state. Resolve actual repository paths and existing herdr configuration.
3. Preserve all existing local agent instruction files. Add the small pointer below
   to the active global Codex instructions (normally ~/.codex/AGENTS.md) and
   ~/.claude/CLAUDE.md. If Codex uses a different home or an active override,
   inspect it and put the pointer in the actually loaded file. Do not replace
   existing instructions or change unrelated configuration.
4. In each relevant personal repository, add its actual project ID and hub pointer
   to the existing AGENTS.md. Preserve repository instructions. Where needed,
   a CLAUDE.md with @AGENTS.md shares those instructions; preserve existing content.
5. Give agents access to the hub using the installed tools' supported directory
   configuration; do not bypass managed access controls. Verify in a fresh session.
6. Read ASSETS/paperclip-migration/MIGRATION.md and perform a faithful export/import.
7. Inspect the actual herdr configuration and integrate the dispatch contract below
   through its supported mechanism. No herdr executable/config schema is assumed.
8. Validate one assignment and handover; update migration tasks and source status.

## Small global pointer to append

```markdown
Personal project hub: ~/Documents/AI-WORK.
For a registered personal project, read the hub's AGENTS.md once per session.
Use the supplied project/task ID; otherwise locate the matching PROJECTS.md row.
Read only the selected project's current task state and necessary assets.
If the hub is unavailable, record the blocker instead of inventing state.
```

Do not automatically import PROJECTS.md, task lists or asset indexes. The pointer
is deliberately small and the rest is read on demand.

## Repository pointer example (substitute the real ID)

```markdown
Personal project ID: <project-id>
Project hub: ~/Documents/AI-WORK
Task state: TASKS/<project-id>.md
Assets: ASSETS/<project-id>/INDEX.md
```

## herdr assignment prompt template

```text
Hub: <actual absolute path to AI-WORK>
Project: <project-id>
Task: <task-id>
Repository: <actual absolute path, or none>
Outcome: <observable result>
Acceptance: <checks required for this task>

Read the hub's AGENTS.md, the project's Current state section and this task.
Read repository instructions before code work. Open assets only as needed.
Work within the assignment and record actual results, checks, blockers and next
action in the project task file. Index any durable outputs. Preserve unrelated state.
```

This is a prompt contract, not a claimed herdr configuration file. Configure herdr
to avoid overlapping task-file writes; no automatic heartbeat/scan is requested.

## Completion record

- The hub is installed at `/Users/smg/Documents/AI-WORK`; global Codex and Claude
  pointers and supported Herdr integrations are installed.
- Paperclip and Linear source snapshots were migrated and reconciled under
  `mosaic-onboarding`. No login or credentials were required.
- Unsafe archived agent approval/sandbox-bypass settings were excluded and never
  activated. Paperclip and Linear source records were not modified.
- The Herdr-controlled handover was validated with Codex 0.160.0. See
  [HUB-004](TASKS/paperclip-migration.md) and
  [MIG-008](ASSETS/paperclip-migration/HERDR-HANDOVER-VALIDATION.md).
