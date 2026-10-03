# MOS-6 — Handle tied explanations honestly in Structure + Analysis

- Source: https://linear.app/sheridanandbairns/issue/MOS-6/handle-tied-explanations-honestly-in-structure-analysis
- Status: Todo
- Project: Make the MOSAIC proposition clear and convincing
- Updated: 2026-09-17T09:48:11.246Z

## Observed

When all three explanations have the same highest independent-signal count, the Structure + Analysis example declares “The release introduced friction” as the current analytical lead. The implementation sorts equal counts and selects the first entry, creating an arbitrary winner.

## Expected

A tie must be represented explicitly. The example should say there is no single analytical lead and identify the jointly supported explanations. It should declare one lead only when that explanation has strictly greater support.

## Evidence / reproduction

1. Open the Structure + Analysis worked example.
2. Include the four default evidence items.
3. Keep the dashboard and weekly email linked as duplicate reports.
4. Observe that Release friction, Unclear positioning and Market change each show one independent signal.
5. Observe that the interface nevertheless declares Release friction the analytical lead.

The current source ranks the counts and uses the first sorted entry without checking whether the highest count is shared.

## Constraints

* Preserve the existing explanation-counting and duplicate-linking lesson.
* Preserve the no-supported-explanation state.
* Do not redesign unrelated worked examples.
* Do not label this a Regression because there is no evidence that the tied state previously worked correctly.

## Verification

* A tied top count produces an explicit no-single-leader result naming the tied explanations.
* A unique top count still produces the correct analytical lead.
* Zero support still produces the existing no-supported-explanation result.
* Add automated coverage for tied, unique-leader and zero-support states.
* Formatting, lint and relevant tests pass.

