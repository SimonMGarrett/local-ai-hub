# AI-WORK project ledger

Project ID: `ai-work-dashboard`
Repository: `hub-dashboard`. Assets: [index](../ASSETS/ai-work-dashboard/INDEX.md).

## Current state

- Overall status: done; the local Tailwind frontend reads generated project,
  task and asset data from this hub.
- Completed: responsive project selection, task and asset views, status summaries,
  local data generation, lint, production build and browser interaction checks.
- Next action: none. Publishing requires separate approval.
- Claims: completed by local Codex session `/root` on 2026-10-03.

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

## Handover

Run `npm run dev` from `hub-dashboard` for a refreshed local preview. The pre-dev
and pre-build hooks regenerate `lib/hub-data.json` from the hub when available and
retain the checked-in snapshot when the source hub is unavailable.
