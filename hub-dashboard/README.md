# AI-WORK project ledger

A local Tailwind frontend for browsing the projects, tasks and indexed assets in
the parent AI-WORK hub. The top-level Assets view also inventories every file in
the hub's `ASSETS/` directory.

## Run locally

```sh
npm install
npm run dev
```

Open `http://127.0.0.1:5173/`.

## Data source

`npm run generate:data` reads the parent hub's `PROJECTS.md`, referenced task files,
asset indexes and the local `ASSETS/` tree, then writes metadata to
`lib/hub-data.json`. Text files receive line-numbered previews; previews larger
than 128 KB are truncated. Images and other binary files expose metadata and size
only.

Generated text previews are written to the ignored `public/asset-previews/`
directory so asset contents are not added back to Git. The generator runs
automatically before development and production builds. Set `AI_WORK_HUB` to use
another hub path. If the hub or local assets are unavailable, an existing metadata
snapshot is retained and text previews report that their local content is
unavailable.

## Checks

```sh
npm run lint
npm run build
```

The site is local-only. Publishing requires separate approval.
