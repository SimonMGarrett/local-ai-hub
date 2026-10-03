# AI-WORK project ledger

A local Tailwind frontend for browsing the projects, tasks and indexed assets in
the parent AI-WORK hub.

## Run locally

```sh
npm install
npm run dev
```

Open `http://127.0.0.1:5173/`.

## Data source

`npm run generate:data` reads the parent hub's `PROJECTS.md`, referenced task files
and asset indexes, then writes `lib/hub-data.json`. The generator runs automatically
before development and production builds. Set `AI_WORK_HUB` to use another hub path.
If the hub is unavailable, an existing generated snapshot is retained.

## Checks

```sh
npm run lint
npm run build
```

The site is local-only. Publishing requires separate approval.
