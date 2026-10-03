# MOSAIC v0.6 — frontend implementation and verification

29 September 2026 · Frontend Developer · Ready for Website Designer consistency review, then The Oracle accuracy review. This is a draft, not founder acceptance or production approval.

## Exact deliverables

- [Portable implementation and sources](/api/attachments/bd7483ff-8680-498c-81ec-e134b4b739db/content?download=1). Extract and open `mosaic-v06/site/index.html`.
- [Eight desktop renders](/api/attachments/6ac72a40-0af5-40f1-a7c5-df23e11dc8ce/content?download=1), [eight phone renders](/api/attachments/7d6c305d-a61b-4eaf-a47c-df01f3779673/content?download=1), [states and enlarged text](/api/attachments/27a95ccc-a056-4b65-9c15-c42fea2e6d81/content?download=1).
- Direct previews: [desktop Home](/api/attachments/b08db5de-d5e6-42db-8ab5-d61889ecb103/content), [phone Insights](/api/attachments/f3db43d3-0976-4d28-af54-c9ab0cf99b6f/content).

SHA-256:

| Artifact | Hash |
|---|---|
| Implementation ZIP | `7fb6fc243e4043c8e1aff9fd0e07dfc919ace2f0bfbdef6dfbc0c8d7fd9cab5d` |
| Desktop ZIP | `a5025d3869fde7c50c497dd54ed401e1e4f5dfd0b6b2f64e2ecc24565a16c502` |
| Phone ZIP | `d61c017047401f5b1cdf98a7ddd3c782faafe436f3e62309c4102849e071940a` |
| States/text ZIP | `5b1b135023a11e590e42e2ed9bb04d5915459cd7ded2889e80ec2f55c3927cf6` |
| `site/index.html` | `270860243f58a1770d91d8cc31f366c01d1a00a8f7bef20f78d33f152d64d797` |

`output-manifest.json` pins every generated page, image, stylesheet and source file. The source manifest retains the v0.5 extraction provenance. The implementation archive includes both verification JSON reports and the scripts. Screenshot archives were split to comply with the 10 MB attachment limit; the larger rejected archive is not a task deliverable.

## Implementation

Implements [design-theme](/SHE/issues/SHE-3#document-design-theme), revision `9df2ba9c-bc1e-4994-b219-e4ba2ecaba59`, and [v0.6 brief](/SHE/issues/SHE-3#document-v06-design-brief), revision `12a9c4ba-d467-4f4f-84fa-7dd7aa8209a2`.

All eight pages now share forest/paper/rust tokens, serif headings, visible navigation and consistent actions. Shared React components cover SiteHeader, ContentContainer, SiteLayout, ActionLink, InsightCard, ArticleHeader, InsightArticleImage, FormGroup and RecordGroup. One semantic stylesheet replaces the previous Tailwind/override stack. Legacy gold/cyan classes, shadow/lift states and the small Read article hover fill are removed. Static HTML needs no client JavaScript or server; native disclosure remains functional offline.

Open margin brackets group the six forms; restrained rules connect the record and article reading treatments. Meaning remains in headings/copy rather than the decorative lines. The font fallback and grouping interpretation remain for Designer/Oracle review.

Copied content is preserved apart from the exact approved Confidence clarification: “Its stages help distinguish” → “Its six forms of reasoning, which can be revisited as needed, help distinguish”. Navigation and draft metadata intentionally change. The accepted three hero strings remain exact. Historical provenance in the homepage disclosure is retained; it is not a v0.6 accuracy approval. No participant exposure metadata was changed.

## Verification actually run

Build: `node build.mjs`, using React/React DOM 19.2.8 and esbuild 0.28.1. Sources were formatted after rendering; all generated HTML/image hashes remained identical, with only CSS formatting changing. Final supplemental browser checks ran against that formatted stylesheet. A clean dependency installation was not run; the package pins the versions used. Source repository was only read; draft files are isolated in the workspace.

Browser: headless Microsoft Edge / Chromium `154.0.4258.37`, Playwright 1.62.1, macOS. Local file navigation, not a deployed server. Executed `verify.cjs` and `supplemental.cjs`.

| Check | Result |
|---|---|
| All eight pages at 1440×1000 and 390×1000 | 16 renders captured and visually inspected; no overlap/clipping observed; zero horizontal overflow |
| All eight pages at 768×1000 and 720×1000 | 16 additional layout checks; zero overflow; 720 CSS px represents half a 1440px desktop width |
| All eight pages, 200% computed text enlargement at 390px | Eight checks and full-page captures; zero horizontal overflow after fixing long-word wrapping |
| Content parity | Home main and index main text match v0.5; six article bodies, paragraph order, headers, photo credits and alt text match with only the approved Confidence replacement |
| Images and routes | All six image bytes match v0.5; images load; every local link/file and fragment target exists; existing contact/credit destinations preserved |
| Keyboard | Every page: skip link activates/focuses main; header tab order verified. All six cards and back links activated. Home How it works anchor works. Native disclosure opens with Enter, closes with Space and reopens with Enter |
| Semantics and targets | One h1/page; no nested links/buttons; header targets at least 44px, primary actions at least 48px |
| Focus | 3px rust outline, 5px offset; desktop/phone card focus and phone disclosure captured and inspected; card outline has horizontal clearance |
| Motion | Emulated reduced-motion preference; all elements computed no animation, zero transition duration and auto scrolling |
| Missing image | Deliberately broken first card image keeps aspect-ratio space, descriptive alt and visible article action; production artifact is unchanged |

Desktop/phone inspection covered Home, index, More data, First plausible explanation, Deterministic AI, Confidence, Prototypes, and Valuable evidence. Page hierarchy, article callouts, image crops and card action alignment remain readable in those default states. The 200% text simulation may break long headline words to avoid horizontal scrolling; a representative enlarged article top was inspected. No claim that every enlarged-text screenshot received detailed visual review.

## Computed contrast

Measurements use computed foreground/background RGB and linearized sRGB luminance. Body 10.47:1; caption 5.61:1; eyebrow 6.43:1; primary action 11.52:1 default / 14.75:1 hover; record text 9.68:1; card metadata 7.07:1; Read article 11.52:1 default / 9.68:1 hover and focus; card supporting text on hover 5.19:1. Supplemental checks cover article copy, summary, credit, footer, back link and review notice. All measured text pairs pass 4.5:1. Rust focus versus paper/surface/tint measures 6.43/7.07/5.94:1. Decorative line contrast remains 2.78:1 and is not the only control identifier; links/action text remain visible and underlined where specified.

## Limits and next owner

Native browser-menu 200% zoom was **not** exercised: the check used equivalent narrowed CSS viewport plus explicit text enlargement. Screen-reader output, non-Chromium engines, physical phone/touch behavior, platform font variation and comprehensive accessibility remain unverified. External destinations were compared, not contacted or live-tested. This draft has no demonstrated comprehension or distinctiveness result.

Website Designer: review the exact implementation and renders for consistency with the pinned theme, including callout treatment, card states and enlarged-text limitation. Save a verdict, then hand this existing issue to The Oracle for the approved Confidence wording and visual implication review; return to Chief of Staff for founder review. Preserve the frozen v0.4 study exposure. No production publication, participant testing, new issues or hires.
