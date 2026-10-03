# Linear reconciliation

Captured: 2026-10-03.
Workspace: SHERIDAN+BAIRNS.

## Counts

| Record type            |             Linear source |                                                   Hub result | Reconciled |
| ---------------------- | ------------------------: | -----------------------------------------------------------: | ---------- |
| Workspaces             |                         1 |                                               1 raw snapshot | yes        |
| Initiatives            |                         1 |         `MOSAIC Adoption` recorded under `mosaic-onboarding` | yes        |
| Projects               |                         1 | Existing `mosaic-onboarding` enriched with Linear provenance | yes        |
| Issues                 |                         9 |       9 source-preserving task entries and Markdown extracts | yes        |
| Issue statuses         | 4 Done, 3 Todo, 2 Backlog |                   4 done, 5 todo with source status retained | yes        |
| Documents              |                         7 |                    7 full Markdown extracts plus raw records | yes        |
| Comments               |          9 issue comments |                                 9 in the structured snapshot | yes        |
| Attachment references  |                         3 |             2 included Linear documents and 1 GitHub PR link | yes        |
| Uploaded binary assets |                0 observed |                                                 none created | yes        |

## Mapping and boundaries

- Linear initiative `I-1`, **MOSAIC Adoption**, contains the source project and
  initiative-level research documents.
- Linear project `P-MOS-3`, **Make the MOSAIC proposition clear and convincing**,
  is mapped to the existing hub project `mosaic-onboarding` because both sources
  describe the same MOSAIC website, comprehension and adoption workstream.
- `MOS-8` and `MOS-9` are initiative/team backlog issues without a direct project
  link. They remain in the hub project as explicitly labelled initiative backlog.
- `MOS-4` references `grounds-to-act-mosaic` on GitHub, but no local repository
  path was searched or inferred. The hub repository field therefore remains unresolved.
- Source descriptions, comments, relations, timestamps and IDs remain verbatim in
  [LIN-SRC-001](source/2026-10-03/linear-snapshot.json). Markdown extracts are for
  convenient reading and do not replace that source snapshot.
