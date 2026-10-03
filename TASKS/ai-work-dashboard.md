# AI-WORK project ledger

Project ID: `ai-work-dashboard`
Repository: `hub-dashboard`. Assets: [index](../ASSETS/ai-work-dashboard/INDEX.md).

## Current state

- Overall status: done; the Tailwind frontend provides separate Projects and
  hub-wide Assets views.
- Completed: project and task navigation, indexed asset summaries, recursive asset
  file inventory, searchable filenames, text previews and binary size metadata.
- Next action: none. Publishing requires separate approval.
- Claims: `DASH-002` completed by local Codex session `/root` on 2026-10-03.

## Tasks

### DASH-001 — Build the project ledger frontend

- Status: done
- Outcome: a responsive Tailwind dashboard for navigating current projects,
  their tasks and indexed assets.
- Acceptance: current hub data is visible; project switching and task/asset tabs
  work; the layout is usable on desktop and mobile; lint and build pass.
- Depends on: none
- Result / validation: generated three projects from hub Markdown; ESLint and the
  production build pass; browser checks confirmed project switching and the asset
  list without runtime errors. The local preview runs at `http://127.0.0.1:5173/`.

### DASH-002 — Add a hub-wide asset file browser

- Status: done
- Outcome: preserve the Projects view and add an Assets view that lists every file
  under `ASSETS`, renders text with a line-numbered code treatment, and reports the
  size of images and other binary files.
- Acceptance: users can switch between Projects and Assets; filenames are
  searchable and selectable; text previews are safe and responsive; non-text
  files show their size; lint, build and browser interaction checks pass.
- Depends on: DASH-001
- Assignee / claim: local Codex session `/root`, 2026-10-03
- Result / validation: generated 193 files (153 text, 12 image and 28 other
  binary); Prettier, ESLint and the production build pass; browser checks verified
  Projects/Assets switching, filename search, text rendering and image size-only
  display.

## Handover

Run `npm run dev` from `hub-dashboard` for a refreshed local preview. The pre-dev
and pre-build hooks regenerate `lib/hub-data.json` and ignored local text previews
from the hub when available, retaining the checked-in metadata snapshot otherwise.
