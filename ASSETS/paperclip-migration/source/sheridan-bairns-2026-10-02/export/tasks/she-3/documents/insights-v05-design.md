# Insights v0.5 design verdict
28 September 2026 · Website Designer

## Verdict
Pass for the requested extraction and page-structure review, with the limitations below. No copy or implementation changed. This is not production or accessibility approval.

Reviewed the [frontend delivery]( /SHE/issues/SHE-3#document-insights-v05-frontend) revision ec7b64ba-9e1f-4cc7-85fb-763af363d7b7 and [original handoff](/SHE/issues/SHE-3#document-insights-handoff). Local archive hashes match the delivered artifacts: draft SHA-256 20c7d97f97920ba96b5dfe8190413f9eb53d3677068a38ea6d8acb5fb9c1b562; screenshots ad2619aa5029c13a6673e1a48e8e976e4cdba50f37015b340d7a9c9aa0b28b7b.

## Rendered evidence
Inspected saved 1440px desktop and 390px phone renders for home, index, First Plausible Explanation, Deterministic AI, Confidence and Certainty, and Valuable Evidence; also More Data desktop and Prototypes phone. The other two route/viewport combinations remain covered by Frontend Developer measurements rather than my visual inspection. [All renders](/api/attachments/ba845983-f52e-4dd2-8454-4d443ca74069/content?download=1), [desktop index](/api/attachments/2c2c10b2-c189-4110-a8b9-27d69487426c/content), [phone index](/api/attachments/67ddfab9-68a2-4ff2-90a3-e47388a62236/content).

Index: three aligned columns become one on phone; images, topic/read time, title, summary and action form clear groups. Full-card links have specific accessible names in source. Long titles wrap without observed overlap. Article pages retain category/title/summary/image/body/callout/contact ordering, visibly distinguish headings and emphasis, and keep credits next to images. Back navigation is explicit and in the same position. No observed clipping in inspected renders.

## Existing design and acceptance criteria
Inspected the existing stylesheet and shared card/image components before judging consistency. Retain reusable InsightCard, InsightArticleImage and SectionHeading; do not independently restyle each article.
- Preserve exact accepted homepage wording and diagrams; its only integration change remains the Insights link.
- Preserve six original images, article text, lists, credits and source ordering. Claims and provenance require Oracle review.
- Index grid: 20px gaps, one column below 768px, two at 768px, three at 1024px. Cards use 24px interior padding and 16:9 images; bottom actions align within desktop rows.
- Container: maximum 72rem, 16px phone side padding, 24px from 640px and 32px from 1024px. Article image max-width 56rem; body measure max-width 48rem. Retain paragraph spacing and callout boundaries.
- Insights headings use 30px base/36px from 640px; card titles 20px; body and summaries remain visually subordinate. Preserve explicit text labels rather than relying on color for meaning.
- Home/index/article/back paths must remain usable by keyboard with visible focus and no horizontal overflow at 1440 and 390px. Frontend Developer verified these focused interactions; I did not rerun them.

## Review considerations and limits
Homepage uses teal and a fuller navigation; Insights retains the original navy/gold, card shadows and simpler shell. This is a visible cross-page style seam, acceptable for the requested first extraction draft, not a claim of one finished sitewide design system. Chief of Staff should surface it in founder review; any harmonization should be an explicitly scoped later revision.

Gold category eyebrows on the pale background look low-contrast and warrant measured contrast verification/correction before production acceptance. Do not interpret this visual pass as WCAG conformance. Existing small photo-credit/footer type and wide desktop article measure also merit accessibility/readability evaluation before release. Preserve wording while addressing any verified style defects in a subsequent authorized implementation pass.

Default states reviewed. Hover/focus CSS inspected in source only; keyboard results belong to Frontend Developer. Screen reader, zoom, other browsers, dark mode and full accessibility/contrast audit remain unverified. No new rendering or live parity check in this review. Live text/image parity is attributed to the frontend report. No publication or participant testing.

## Next owner
The Oracle: perform the authorized article claim/provenance review, including the Confidence article’s reference to MOSAIC “stages,” and determine exposure-version implications without assuming Insights is approved for testing. Return to Chief of Staff for founder review, carrying this verdict, implementation acceptance criteria and limitations. No additional tasks required.
