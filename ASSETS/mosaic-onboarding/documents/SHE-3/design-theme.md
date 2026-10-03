# MOSAIC v0.6 — design theme and implementation handoff

Design owner: Website Designer. Date: 29 September 2026.
Scope: reversible visual draft for all eight pages. Follows [v0.6 brief](/SHE/issues/SHE-3#document-v06-design-brief), revision 12a9c4ba-d467-4f4f-84fa-7dd7aa8209a2. This is a design specification with representative rendered studies, not the completed component implementation or accessibility certification.

## Direction: reasons kept in context

Use the visual language of a carefully annotated decision record: open margin brackets, generous space, dark forest ink, warm paper and a small rust accent. The distinctive device groups a label with its explanation and keeps the record's context visible. It appears on the six reasoning forms, the three existing record groups, and the article reading margin. No connector asserts a causal relationship; no number implies a compulsory order. Preserve the existing captions about iteration and editorial grouping.

This is a modest attempt at a recognizable identity, not a claim of originality or demonstrated comprehension benefit. Brackets must remain decorative: the headings, text and semantic grouping convey all meaning without them. Do not use a margin rule as an evidence-quality or approved-status indicator. Article commentary is not elevated into framework authority by the treatment.

## Existing styles inspected and studies explored

Inspected the actual v0.5 HTML, shared compiled Insights CSS, page markup and original component structure. Home used green ink, rounded diagrams and system type. Insights used navy, gold-hover card outlines, rounded pills and shadowed panels. These competing interaction and typographic conventions are replaced by one theme.

Study A, a-margin.html: straight open brackets, small letter labels, aligned text. Selected because its boundaries support proximity without adding ornamental objects. Study B, b-sheets.html: slightly rotated sheets, heavy top rules and offset shadows. It is more immediately playful but adds edges and can suggest stacked or sequential documents. Do not implement B. Both use existing six-form copy and preserve the non-sequential caption. Both have desktop/phone renders in the archive.

The selected directory contains navigable draft treatments derived from v0.5. Representative Home, index and Confidence article were rendered at 1440 and 390px. Other copied article pages are context for implementation, not individually verified final designs.

## Palette and semantic roles

| Token | Value | Use |
|---|---|---|
| paper | #f5f2ea | Page background |
| surface | #fffdf7 | Cards and skip link |
| ink | #203d3b | Headings, main text, links, primary actions |
| muted | #52645e | Supporting copy, source captions, footer |
| accent | #8a432d | Eyebrows, form letters, focus ring |
| line | #87968a | Decorative separators and margin brackets |
| tint | #e6ebe2 | Record groups, revisit caption, card hover/focus fill |
| hover | #102b29 | Primary-action hover background |

No gold border hover, cyan controls, gradients, opacity-based text or colored status codes. Rust is an editorial emphasis, never a warning or evidence score.

Measured using linearized sRGB relative luminance, contrast=(lighter+.05)/(darker+.05), not screenshot inference. Text ratios: ink/paper 10.47; muted/paper 5.61; accent/paper 6.43; ink/surface 11.52; muted/surface 6.18; accent/surface 7.07; ink/tint 9.68; muted/tint 5.19; accent/tint 5.94; surface/ink 11.52; surface/hover 14.75. Rust focus outline against paper/surface/tint: 6.43/7.07/5.94. These cover the prescribed default and interactive palette combinations.

Line/paper is 2.78:1: line is decorative only. It must not be the only means of finding a control or conveying a relationship. Cards have persistent underlined “Read article” text; hover/focus adds heading underline, not color alone. Frontend must measure the final computed colors and any combinations it adds.

## Typography, rhythm and layout

Use Georgia, "Times New Roman", serif for headings (400); system-ui, -apple-system, "Segoe UI", sans-serif for body and controls. This avoids a new font download or licensing dependency; wrapping must be retested across platforms. Small form letters use ui-monospace, monospace at 14px/1.5, weight 600.

H1: clamp(40px, 4.6vw, 68px), 1.08 line height, -0.035em letter spacing; 18ch maximum on Home, 24ch on index/article. Phone: 40px. H2: 32px/1.2, phone 28px; H3: 24px/1.25. Card title: 26px/1.22. Body: 18px/1.65; article 18px/1.8, maximum 66ch. Hero summary: desktop 21px/1.6, phone 18px. Card summary:16px/1.65. Navigation and controls:15px/1.5. Eyebrows:13px/1.5, 600, uppercase, .12em tracking. Caption:13px/1.6. Bold prose:650, no enlarged inline bold.

Spacing scale: 4, 8, 12, 16, 20, 24, 28, 40, 56, 64, 80px. Main container:1200px inclusive of 40px side padding; 22px at <=600px. Main top/bottom:64px, phone40px. Header vertical padding24px. Home section heading gap80px, phone56px; separator-to-heading24px. Grid gap24px. Cards/forms padding24px, phone forms20px. Border1px, bracket2px; corner radius2px on cards/images/buttons. No shadow or rotation in selected direction.

Six forms: three equal columns, two at <=900px, one at <=600px. Record: three columns, one at <=600px. Insights grid: three columns >=1024px, two >=768px, one below. Keep all six articles in source order; no carousel. Article reading column has an 80px left inset on desktop, removed <=900px; decorative reading rule padding24px, phone16px. If a narrow or enlarged-text viewport makes that margin crowd text, remove the rule and padding together.

## Shared components and states

Frontend should implement shared tokens plus SiteHeader, ContentContainer, ActionLink, InsightCard, ArticleHeader/Image, FormGroup and RecordGroup components. The study's override CSS demonstrates the intended appearance; do not ship accumulated override selectors or stale gold utilities as the architecture.

Header on every page: MOSAIC home link at left; How it works and Insights at right. All links remain visible with wrapping (no hidden mobile menu). Navigation targets at least44px high; primary buttons at least48px. Keep article “← All insights” below the header as a breadcrumb/back action, and retain footer links. Mark current index with aria-current=page; article navigation may mark Insights with aria-current=location. Home retains in-content actions and original section anchors.

Links: persistent underline, 5px offset; hover underline thickness2px. Primary action: ink background/surface text, 2px radius; hover darker ink plus underline, no movement. Focus-visible on all links and disclosure summary:3px rust outline, offset5px; do not clip it or remove browser focus.

Insight card: entire card is one semantic link with the existing accessible name. Default surface fill, 1px line outline, image16:9, persistent underlined Read article. Hover and focus: tint fill, ink outline, heading underline. No lift, glow, gold flash or essential hover-only content. Touch default communicates the same destination. Do not nest another button inside the link. Focus outline is on the outer link and visible around the full card.

Retain image bytes, alt text, source credits and original article order/paragraph structure. Keep 16:9 crops as in the extracted source, max article figure880px. Keep original contact links as links; no new collection form or simulated submission. Missing image: reserve its aspect ratio and expose descriptive alt text; never collapse the title/action. No fabricated empty/loading state for a static index.

Home retains provenance disclosure. Closed/open disclosure must remain native, operable with Enter/Space and retain visible focus; open content wraps without clipping. Production review notes should be separated from public content when a later publication task is authorized.

No automatic animation, parallax, animated fragments or scroll-reveal. Optional color/underline transition at most120ms; reduced-motion removes all transitions, animations and smooth scrolling. All meaning exists in the static state.

## Copy and factual boundaries

Keep the accepted hero exactly:
- Decision framework
- Make strong decisions from fragmented evidence
- MOSAIC helps you make the most reasoned and defensible choice available when evidence is incomplete, uncertain, scattered, or open to more than one interpretation.

Preserve all accepted substantive home and article wording, captions, images and limits except the approved Confidence change: replace “Its stages help distinguish” with “Its six forms of reasoning, which can be revisited as needed, help distinguish”. The study includes this exact change. This is the only intentional article-copy departure.

Navigation reduction and review-version labels are interface/editorial changes. No worked example, quantitative confidence indicator, ranking or framework expansion has been added. The Oracle must review any implied relationship in the visual grouping and the Confidence clarification. Keep the v0.4 participant exposure frozen; this draft is not a study exposure.

## Verification and implementation acceptance

Design-stage checks: representative Home/index/Confidence and both studies rendered in local headless Edge at 1440x1000 and 390x1000; all ten page/width combinations had zero horizontal overflow. Reviewed default-state renders and card hover/focus renders. This visual verdict is limited to the representative design studies. Measured prescribed palette contrast separately. No claim of comprehensive accessibility, screen-reader, other-browser, zoom, final component or all-eight-page verification.

Frontend acceptance before return:
1. Apply tokens/components consistently across all eight pages; remove old palette/shadows/pill hover conventions. Preserve text and image parity with the one approved article change explicitly recorded.
2. Render and inspect every page at1440 and390px; zero horizontal overflow, readable heading wraps and captions, no clipped focus. Also check enlarged text/200% zoom and intermediate width reflow.
3. Verify skip links, main focus, tab order, visible focus, all card/back/nav anchors, buttons and native provenance disclosure; no duplicate nested controls. Check reduced-motion. Keep external contact routes unchanged without sending messages.
4. Measure computed foreground/background contrast for body, captions, eyebrows, card states, buttons and focus. Decorative rules need not identify controls.
5. Upload portable component implementation and sources, all-page screenshots, hashes and bounded verification report. Return this existing task to Website Designer for consistency review, then Oracle, then Chief of Staff for a saved founder review interaction.

No production publishing, human testing, new tasks, hiring or spending. Distinctiveness and comprehension remain hypotheses for founder review.
