# Insights source inventory and team handoff

Founder accepted v0.4 in interaction e6fedb51-46ff-4ae5-ab66-99fb0ba64e5a and requested bringing the live Insights index and linked articles into the draft, preserving initial page structure and reusable components.

Source repository: `/Users/smg/CODE/WWW/MOSAIC` (founder supplied `~/CODE/WWW/MOSAIC`). Read access verified. Live source: https://groundstoact.com/insights . Web reader could not access this URL in this run; live/source parity is unverified.

## Located sources

- Index: `src/pages/InsightsPage.tsx`
- Card content, paths and image mappings: `src/content/insights.ts`
- Six full article pages: `src/pages/insights/*.tsx`
- Shared components: `InsightCard`, `InsightArticleImage`, `SectionHeading`, `PageMeta`; inspect site header/footer, typography and style tokens as appropriate.
- Images: `public/insights/`. Six images are referenced by cards and corresponding article pages. `prototypes2.jpg` is an additional file, not the selected card image.
- Preserve existing alt text and photo credits, including Unsplash attribution where supplied.

## Execution handoff

Frontend Developer owns the next draft on this existing task. Extract all index and article copy and six referenced original image files into a durable reviewable package, with source paths and hashes. Inspect applicable repository instructions. Work in the authorized project workspace; preserve the source repository. Verify live/source parity using a browser or HTTP capture where available; record differences or access limitations rather than silently claiming parity.

Integrate the Insights index and all six linked article routes into a component-based reviewable draft, preserving accepted v0.4 homepage wording and visuals. Start with the existing Insights page structure; reuse shared components and original images consistently between cards and article pages. Avoid broad redesign or unrelated copy rewriting. Preserve full article content, headings, lists, links, metadata and credits. Save downloadable/inspectable artifacts on this task with a source inventory. Check all six routes, image loads, back navigation, phone/desktop layouts and keyboard navigation. Record verification limits.

Then hand this same task to Website Designer (9204be49-6e03-4648-ba55-6b155fdfb2b1) for consistency and page-structure review, then The Oracle (53401070-9c11-47c2-9a1f-ba4b54d7da3d) for focused claim/provenance review. Existing live copy is source material, not automatically an approved expansion of the MOSAIC baseline. Return to Chief of Staff (fdf9690b-d2b7-438d-a0cf-59f0cfd245f2) for founder review. No new issues, hires, publication or participant testing. Preserve the existing protocol; identify whether exposure metadata needs revision rather than claiming results.

Accepted homepage: /api/attachments/5eb742e9-3da8-4529-b755-dae6b2a8e956/content?download=1

## Captured index content and mappings

```tsx
export const insightCards = [
  {
    title: "Why more data does not automatically produce a better decision",
    summary:
      "Evidence needs structure, relevance, and interpretation before it can support action.",
    topic: "Decision quality",
    time: "5 min read",
    path: "/insights/more-data",
    image: "/insights/more-data.jpg",
    imageAlt: "Hands reviewing printed financial charts beside a calculator and phone",
  },
  {
    title: "The danger of the first plausible explanation",
    summary: "A reasonable story can still be wrong if alternatives are never tested.",
    topic: "Reasoning",
    time: "4 min read",
    path: "/insights/first-plausible-explanation",
    image: "/insights/first-explanation.jpg",
    imageAlt: "A Rubik's cube beside a laptop on a working desk",
  },
  {
    title: "What should remain deterministic in an AI system?",
    summary:
      "Some decisions need rules, auditability, and explicit ownership before model judgement enters.",
    topic: "AI systems",
    time: "6 min read",
    path: "/insights/deterministic-ai",
    image: "/insights/deterministic-ai.webp",
    imageAlt: "A circle of domino-like blocks with several fallen inward",
  },
  {
    title: "The difference between confidence and certainty",
    summary: "Confidence can guide action while still leaving room for revision.",
    topic: "Uncertainty",
    time: "4 min read",
    path: "/insights/confidence-and-certainty",
    image: "/insights/confidence-certainty.jpg",
    imageAlt: "A yellow direction sign standing at a snowy rural crossroads",
  },
  {
    title: "Prototypes, proofs of concept, and enterprise software",
    summary:
      "A prototype demonstrates possibility; production software needs governance and operational clarity.",
    topic: "Product",
    time: "7 min read",
    path: "/insights/prototypes-and-enterprise-software",
    image: "/insights/prototypes.webp",
    imageAlt: "An architectural rendering of a railway station and surrounding streets",
  },
  {
    title: "The most valuable evidence may be the evidence you do not yet have",
    summary: "Useful investigation starts with what would change the decision.",
    topic: "Investigation",
    time: "5 min read",
    path: "/insights/valuable-evidence",
    image: "/insights/valuable-evidence.webp",
    imageAlt: "A woman whispering to another woman outdoors",
  },
];

```

```tsx
import { InsightCard } from "../components/InsightCard";
import { PageMeta } from "../components/PageMeta";
import { SectionHeading } from "../components/SectionHeading";
import { insightCards } from "../content/insights";

export default function InsightsPage() {
  return (
    <>
      <PageMeta
        title="Insights"
        description="Notes on evidence, provenance, uncertainty, analysis, and defensible decision-making."
        path="/insights"
      />
      <section className="container py-14">
        <SectionHeading
          eyebrow="Insights"
          title="Notes on evidence, uncertainty, and defensible decision-making."
          level="h1"
        >
          Proposed articles for the first release. They explore the boundary between analysis,
          decision-making, and action.
        </SectionHeading>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {insightCards.map((card) => (
            <InsightCard key={card.title} {...card} />
          ))}
        </div>
      </section>
    </>
  );
}

```
