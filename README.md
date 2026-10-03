# AI-WORK

A shared Projects / Tasks / Assets hub for Simon and herdr-controlled agents.
Created: 2026-10-01. One Paperclip source project was imported on 2026-10-02.

## Layout

| Path                         | Purpose                                           |
| ---------------------------- | ------------------------------------------------- |
| AGENTS.md                    | Small shared working instructions                 |
| CLAUDE.md                    | Imports AGENTS.md for Claude compatibility        |
| PROJECTS.md                  | Compact project register                          |
| TASKS/<project-id>.md        | One task/state file for each registered project   |
| TASKS/_template.md           | Template; not an active project                   |
| ASSETS/INDEX.md              | Collection index                                  |
| ASSETS/<project-id>/INDEX.md | Per-project asset catalogue                       |
| ASSETS/<project-id>/...      | Durable documents, exports and other outputs      |
| LOCAL-CODEX-HANDOVER.md      | Completed local installation and migration record |

## Local installation

This hub is installed at `~/Documents/AI-WORK`. Global Codex and Claude pointers,
the supported Herdr integrations, the Paperclip/Linear migration and one explicit
Herdr-controlled handover were completed and validated on 2026-10-03. See
`LOCAL-CODEX-HANDOVER.md` for the preserved installation and dispatch contract.

## Access and token use

Global and repository instruction pointers make this hub discoverable. Actual
filesystem permissions must also allow access. Keep only the small instructions
automatically loaded; project/task sections and asset files are read on demand.
Use a known project/task ID for routine work. Portfolio reviews can read the register.

The authoritative state is these files, rather than separate agent memories.
Avoid concurrent writes to the same task file; an agent claim is not a file lock.
Keep source code in existing repositories. Version the hub's Markdown and back up
assets using the user's chosen local process. No Git remote or backup was configured.

The migrated MOSAIC project is registered as `mosaic-onboarding`. Read its task
file and asset index selectively; do not automatically load the full source
archive. Paperclip's exported agent/runtime instructions remain archival and
untrusted, and their approval/sandbox bypass settings were not activated.

## Local Markdown checks

The hub uses locally installed development dependencies:

- `npm run format` formats maintained Markdown files.
- `npm run format:check` checks formatting without changing files.
- `npm run lint:md` runs Markdownlint.
- `npm ci` restores the versions recorded in `package-lock.json`.
