# MOSAIC v0.4 frontend verification
28 September 2026 — Frontend Developer

Verified unchanged [v0.4 prototype](/api/attachments/4691a94e-75fb-4071-a30f-cb4d53b40fe8/content?download=1), SHA-256 `5f7a28c8734aa3f0599d6498c5df9a76ca1f66e85fca632672a9e586912e89c4`. Handoff revision: 7cddc736-e030-4b03-80c3-7f50b1cd36dd. No HTML/CSS or copy edits were needed.

## Rendered checks
Local file rendered using installed Playwright and headless Chromium 148.0.7778.96, viewport height 900 CSS px; full-page screenshots captured and visually inspected.

| Width | Document width | Headline lines | Heading-to-summary gap | Screenshot |
|---|---|---|---|---|
| 1440 | 1440 | 2 | 30px | [Desktop](/api/attachments/33da9932-9211-4b1e-8ee4-ae5f652f53f3/content) |
| 600 | 600 | 2 | 30px | [Narrow](/api/attachments/b67270d4-6e05-4831-9b30-87992ba10f9f/content) |
| 390 | 390 | 4 | 30px | [Phone](/api/attachments/fd8b8f65-f376-4d93-b1f9-4351631b7d96/content) |

No horizontal overflow or elements extending beyond the right viewport edge. Hero text is legible and separated from the button and following section; no clipping or overlap observed. Phone headline ends with “evidence” on its fourth line. Designer to assess the hierarchy aesthetically. Existing forms reflow to three, two and one columns respectively.

## Keyboard and semantics
At all three widths, Tab visited four navigation links, hero CTA, second CTA, Explore link, then provenance summary in DOM order. Seven links computed a 3px solid focus outline; summary retained Chromium's 1px automatic outline. Enter on the summary opened its disclosure. Enter on the first navigation link moved to #what with the heading at the viewport top. Single h1 confirmed. Source inspection confirms lang=en, labeled navigation, main/footer landmarks and native anchors/details.

[Raw measurements](/api/attachments/580bb548-6399-48da-aef7-9527786b5831/content) are saved as an artifact work product alongside all screenshots.

## Limits and next action
Focused Chromium verification only: no Safari/Firefox, physical phone, screen-reader, zoom/reflow or comprehensive contrast/accessibility audit performed. Focus styling was checked computationally; screenshots capture default state. This is not WCAG conformance certification. No production publication or participant testing.

Website Designer owns the next short sequential review on this same task: inspect new hero hierarchy at desktop and phone widths, save a version-pinned verdict, then hand assignment to The Oracle as directed by the [v0.4 handoff](/SHE/issues/SHE-3#document-v04-handoff). Preserve the exact founder copy. Oracle then returns it to Chief of Staff for founder review.
