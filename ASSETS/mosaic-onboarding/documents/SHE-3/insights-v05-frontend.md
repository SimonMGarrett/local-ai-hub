# Insights v0.5 frontend delivery
28 September 2026 · Frontend Developer

## Exact artifacts
- [Portable draft and component sources](/api/attachments/5bad1c78-d98e-4c50-a3c2-f9fd26252ea7/content?download=1). SHA-256: 20c7d97f97920ba96b5dfe8190413f9eb53d3677068a38ea6d8acb5fb9c1b562.
- [16 full-page screenshots](/api/attachments/ba845983-f52e-4dd2-8454-4d443ca74069/content?download=1). SHA-256: ad2619aa5029c13a6673e1a48e8e976e4cdba50f37015b340d7a9c9aa0b28b7b.
- [Desktop index](/api/attachments/2c2c10b2-c189-4110-a8b9-27d69487426c/content) · [Phone index](/api/attachments/67ddfab9-68a2-4ff2-90a3-e47388a62236/content).
- Extract draft archive and open mosaic-insights-v05/site/index.html. No installation/server required. Local workspace: deliverables/insights-v05. Source and generated output SHA-256 inventories are included.

## Implementation and source fidelity
Copied all six complete article TSX pages, Insights index, card data, shared card/image/heading/button/metadata components, style tokens and six referenced original images from founder-supplied /Users/smg/CODE/WWW/MOSAIC. Source repository untouched; original files and hashes are retained, including originals of adapted build configuration.

build.mjs renders original React components to static HTML and compiles their Tailwind CSS. This keeps reusable components as the source of truth while making the review package portable. Preserved full article wording, lists, emphasis, headings, image alt text, photo credits and page title/description metadata. Shared shell supplies semantic navigation, skip link, main landmark and home/back links. Article contact links resolve to the existing public contact page. No analytics or submission code is included.

Accepted homepage was compared byte-for-byte with attachment 5eb742e9-3da8-4529-b755-dae6b2a8e956. Only an Insights navigation link is added to the generated home; removing it restores exact accepted bytes. Its v0.4 review banner/provenance remains attributable to that homepage; v0.5 names this extension package.

## Live comparison
Public browser access succeeded after the web reader failed. On 28 September, live Insights index text plus six article bodies and h1 headings matched extracted renders after whitespace normalization. All six public image responses were HTTP 200 and byte-identical by SHA-256. verification/live-parity.json records results and live text captures are included. This does not establish parity of all sitewide styles, navigation or metadata. Live source: https://groundstoact.com/insights .

## Focused verification
- Edge/Chromium via Playwright, file URLs: homepage, index and six articles at 1440×900 and 390×900 (16 cases), all zero horizontal overflow, one h1, resolved anchor targets and loaded images with alt text.
- Skip link focuses main; all six card links activate with Enter and all six back links return to index. Card focus outlines present.
- Every final local href/src resolves, including CSS, images and React-generated preloads.
- Visually inspected final home/index desktop and phone, More Data desktop and Prototypes phone: readable wrapping and no observed clipping/overlap. Remaining route renders are captured and measured, not individually visually reviewed.
- Initial navigation spacing defect corrected by adding the generated shell to Tailwind scanning, then browser checks rerun successfully. Image preload paths corrected subsequently; static resolution checked, visible content/CSS unchanged from screenshots.
- Existing dependency build succeeded. Clean installation, hosted route configuration, screen-reader behavior, other browsers, zoom, full keyboard audit and contrast/comprehensive accessibility audit remain unverified. External contact and credit links were not activated.

## Review handoff
Website Designer: review component consistency, original index/article structure, responsive hierarchy and navigation; preserve founder-approved homepage and source copy. Homepage and Insights intentionally retain their respective established styles pending your review, without broad redesign. Save version-pinned verdict and any required changes, then pass this same task to The Oracle per the original handoff.

The Oracle: review article claims/provenance against the durable MOSAIC baseline; copied live claims are source material, not automatically approved. Existing comprehension protocol remains unchanged. Identify whether a future exposure including Insights needs new metadata/frozen copy; do not assume that extension has been approved for testing. Then return assignment to Chief of Staff for founder review.

No production publication, participant testing, additional issues, hires or source-repository changes. Overall task remains open.
