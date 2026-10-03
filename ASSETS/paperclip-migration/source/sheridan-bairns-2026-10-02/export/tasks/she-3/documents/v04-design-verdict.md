# MOSAIC v0.4 focused hero design verdict
28 September 2026 — Website Designer

Verdict: passes focused hero hierarchy review at 1440px desktop and 390px phone. No copy, HTML or CSS change required. This is design acceptance for the bounded hero revision, not founder acceptance of the whole package.

## Version and rendered evidence
Reviewed the downloaded [v0.4 HTML](/api/attachments/4691a94e-75fb-4071-a30f-cb4d53b40fe8/content?download=1); independently confirmed SHA-256 `5f7a28c8734aa3f0599d6498c5df9a76ca1f66e85fca632672a9e586912e89c4`.
Inspected the actual saved Chromium renders: [1440px desktop](/api/attachments/33da9932-9211-4b1e-8ee4-ae5f652f53f3/content) and [390px phone](/api/attachments/fd8b8f65-f376-4d93-b1f9-4351631b7d96/content). These are the rendered prototype evidence for this verdict; no new rendering was performed. Existing stylesheet inspected before evaluating changes.
Handoff revision: `7cddc736-e030-4b03-80c3-7f50b1cd36dd`. Frontend verification revision: `c9953ab6-b424-4369-aed9-0f3a5a5e5907`.

## Design choices and observations
- Retain the existing warm paper/dark green palette and left alignment. A shared left edge connects category, promise, explanation and action without extra visual elements.
- The small, spaced eyebrow reads as a category label. The bold headline is clearly primary; the normal-weight summary explains it without competing for attention.
- Desktop headline occupies two lines. At phone width it occupies four, ending with “evidence”. This is acceptable natural wrapping: no forced line breaks or wording edits are needed.
- Summary and CTA remain visibly separated. The filled, text-labeled CTA is distinct from underlined navigation; recognition does not depend on color alone. “Start with your decision” leads to the existing decision prompt.
- The divider and larger section gap separate the hero from “What is MOSAIC?” while keeping the explanation available by scrolling. Phone navigation wraps without colliding with the hero.
- Existing limitations, diagram captions and reviewer disclosure remain in the prototype. The new hero does not need additional badges, claims or persuasive devices. Oracle owns the factual interpretation of “most reasoned and defensible”.

## Implementation acceptance criteria
Preserve all three founder strings verbatim, including “helps you”; retain one h1 and the existing content order. For this version retain the inspected CSS: h1 `clamp(2.5rem,6vw,4.8rem)`, line-height 1.08, max-width 850px, margins 22px 0 30px; body 18px/1.65 and 17px below 460px; eyebrow 13px with .14em tracking. Main container max-width 1120px, 36px horizontal padding on desktop and 22px below 720px. CTA padding 12px 20px and visible text label. Preserve native anchor destination #start and visible keyboard focus.
At 1440px and 390px, category, full headline, full summary and CTA must remain readable without clipping, overlap or horizontal scrolling. Preserve the heading-to-summary 30px gap and clear separation before the following section. Do not enforce a fixed line count across platforms or font metrics.

## States and limits
This visual verdict covers the default hero state at desktop and phone widths. The [frontend report](/SHE/issues/SHE-3#document-v04-frontend-verification) separately records keyboard focus, anchor activation and disclosure-open checks, plus 600px measurements; those interactions were not independently rerun here. There is no hero form/loading/error state in this static prototype. Screen reader, other browsers, zoom and a comprehensive accessibility/contrast audit remain unverified. This is not WCAG certification or evidence of participant comprehension. No publication or human testing occurred.

## Next owner and action
The Oracle: review the exact founder hero wording against the baseline, flag any material conflict without rewriting it, confirm quiz/key applicability and update exposure-version metadata as directed in the [handoff](/SHE/issues/SHE-3#document-v04-handoff). Return the package to Chief of Staff for final metadata and founder review, carrying this verdict and its acceptance criteria. Overall task remains open.
