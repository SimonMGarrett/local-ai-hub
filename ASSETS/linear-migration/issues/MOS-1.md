# MOS-1 — Reconcile deployed insight images with version-controlled source

- Source: https://linear.app/sheridanandbairns/issue/MOS-1/reconcile-deployed-insight-images-with-version-controlled-source
- Status: Done
- Project: Make the MOSAIC proposition clear and convincing
- Updated: 2026-09-15T15:36:45.683Z

## Outcome

The three recently changed insight images, their accessibility text, the deployed site, and the version-controlled source all agree. GitHub is again authoritative for what is live.

## Why

The new imagery is visible in production under the legacy JPG/PNG URLs, but the live alt text still describes the previous images. The local repository instead contains an uncommitted migration to new WebP filenames. This mismatch makes the deployment difficult to reproduce and leaves inaccurate accessibility text live.

## Scope

* Preserve the new images currently visible in production.
* Reconcile all three changed insight assets and source references between production and the repository.
* Correct each image's alt text so it describes the image actually shown.
* Decide explicitly whether to retain stable legacy URLs or complete the WebP-path migration; do not leave both states partially implemented.
* Commit and push the final assets and source, then deploy from that versioned state.

## Constraints

* Do not revert to the previous images.
* Do not make unrelated design or editorial changes.
* Keep GitHub as the authoritative source for deployable code and assets.

## Verification

* Formatting, lint, unit tests, browser tests, and production build pass.
* Each of the three live insight pages renders the intended new image with accurate alt text.
* Each referenced live image URL returns an image content type and loads with non-zero natural dimensions.
* The deployed asset paths and content match the committed source.

