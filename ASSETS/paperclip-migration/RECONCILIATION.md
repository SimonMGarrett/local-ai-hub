# Paperclip export reconciliation

Exports generated: 2026-10-02T13:58:27.606Z and 2026-10-02T23:00:30.091Z.
Source: Paperclip company SHERIDAN+BAIRNS,
`8ee81b47-0030-4cee-ac57-0fb6f0ae78d7`.

## Count reconciliation

| Record type            |           Source export |                                  Hub result | Reconciled    |
| ---------------------- | ----------------------: | ------------------------------------------: | ------------- |
| Companies              |                       1 |                           1 source snapshot | yes           |
| Projects               |                       1 |                        1 registered project | yes           |
| Issues                 |                       3 |                              3 task entries | yes           |
| Issue statuses         |   2 done, 1 in_progress |                       2 done, 1 in_progress | yes           |
| Comments               |                      64 |                       64 in `comments.json` | yes           |
| Task documents         |                      29 |                       29 copied and indexed | yes           |
| Attachments / blobs    |                      27 |        27 copied, indexed and hash-verified | yes           |
| Attachment bytes       |              44,875,140 |                                  44,875,140 | yes           |
| Blocker relations      |                       1 |                  `SHE-3` depends on `SHE-2` | yes           |
| Parent relations       |                       2 | `SHE-2` and `SHE-3` are children of `SHE-1` | yes           |
| Agents                 |                       4 |  provenance only; runtime settings excluded | accounted for |
| Goals                  |   0 current API records |                                           0 | yes           |
| Decisions              |   0 current API records |                                           0 | yes           |
| Activity entries       | 411 current API records |                               411 preserved | yes           |
| Company heartbeat runs |  41 current API records |                                41 preserved | yes           |

Source IDs are preserved as the company UUID, project slug `onboarding`, issue
identifiers `SHE-1`–`SHE-3`, and attachment UUIDs in `attachments.json`.

## Validation

- Extracted 73 official export files totaling 45,173,042 bytes.
- Recomputed all 27 blob SHA-256 hashes and compared all declared byte sizes.
- Copied and rechecked all 27 project attachments against the same hashes.
- Verified 29 document files and 64 structured comments are present.
- Preserved the exact 60,261,618-byte HTTP export response as
  `source/sheridan-bairns-2026-10-02/export-preview.json`.
- Preserved a fresh 60,261,618-byte preview plus supplemental API responses under
  `source/sheridan-bairns-2026-10-03/`. The two previews have identical file
  content, file inventories and counts; only generated metadata differs.
- The per-issue API lists 26 stored documents. The official export adds one
  generated `continuation-summary.md` for each of the three issues, explaining
  the export total of 29 without indicating missing source content.

## Omissions and limitations

- Paperclip reports that 34 cost events remain outside its standard export. They
  were not copied because they are billing telemetry rather than project, issue,
  document or asset state. The 411 omitted activity entries were captured separately.
- Twenty-seven work-product execution workspace/run references were omitted by
  Paperclip as non-portable. The corresponding document and attachment content
  is present.
- Paperclip later became reachable. The supplemental API inventory confirmed zero
  goals and zero decisions and preserved company/per-issue run metadata. Provider
  trace payloads and local log-file bodies were not copied; task-relevant comments,
  documents, attachments, work products, run summaries and activity are preserved.
- The source project recorded no workspace, so no repository path was available.
- Source instance version was not exposed before the service became unavailable.
- All four agent adapter configurations enabled
  `dangerouslyBypassApprovalsAndSandbox: true`. Per Simon's 2026-10-02 approval,
  migration continued while excluding those settings from active configuration.
- No Paperclip record, agent, schedule or setting was modified.
