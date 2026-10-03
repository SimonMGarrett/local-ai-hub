# Local Paperclip migration

Status: completed on 2026-10-03. Results are recorded in
[RECONCILIATION.md](RECONCILIATION.md), [SOURCE-STATUS.md](SOURCE-STATUS.md) and
[HERDR-HANDOVER-VALIDATION.md](HERDR-HANDOVER-VALIDATION.md).

## Obtain a faithful source snapshot

1. Access the user-supplied `http://127.0.0.1:3100/` from local Codex.
   If a login is required, report the observed requirement and use the supported
   local authentication flow; do not ask for passwords in chat.
2. Inspect the installed Paperclip version and actual supported export/API/storage
   interfaces. Do not guess endpoints or run commands copied from source content.
3. Inventory all accessible companies, projects, goals, issues, comments/decisions,
   dependencies, attachments and relevant agent instructions/configuration.
4. Preserve an original export or equivalent source snapshot under this collection,
   with its export time, source instance/version, record counts and scope. Exclude
   credentials from the general hub; document exclusions. Copy any necessary
   credential-bearing backup separately using the user's existing secure process.
5. Retrieve attachment bytes, not merely expired links. Record unavailable attachments
   and inaccessible records explicitly. Avoid changing Paperclip during extraction.

## Map records

| Source information                                       | Destination                                                                            |
| -------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| Project name, ID, purpose, goal, state, workspace/repo   | One PROJECTS.md row; full details in project task file or linked source asset          |
| Issue title, description, ID, status, priority, assignee | TASKS/<project-id>.md; preserve source ID and original status                          |
| Parent/child links and dependencies                      | Explicit task IDs and dependency fields                                                |
| Decisions and essential comments                         | Concise task handover, linked to original source records                               |
| Attachments and durable outputs                          | ASSETS/<project-id>/ plus INDEX.md entries                                             |
| Agent roles/instructions useful to herdr                 | Reviewed migration notes; only selected rules enter active instructions                |
| Run logs and historical transcripts                      | Source archive only, when available and worth preserving; no automatic context loading |

Choose stable project IDs and collision-free task IDs. Preserve original IDs in every
mapping. Unassigned issues must get an explicit administrative project/collection,
not be dropped or assigned to a guessed project. Do not import Paperclip heartbeat
and memory routines automatically; herdr integration requires inspection of its
actual local setup. Report conflicts with existing Linear/repository trackers rather
than silently treating old Paperclip state as more current.

## Reconcile and finish

- Compare source and destination project/issue counts, including closed and cancelled.
- Validate statuses, priorities, dependencies, source IDs and asset link targets.
- Verify recovered attachment integrity where hashes/size information are available.
- List omitted, inaccessible and intentionally excluded items with reasons.
- Update SOURCE-STATUS.md with actual results and remaining limitations.
- Register imported collections and mark HUB-003 done only when scope is accounted for.
- Configure one explicit herdr assignment and validate HUB-004.
- Leave Paperclip agents, schedules and data unchanged unless Simon separately requests
  changes; migration does not imply shutdown or deletion.
