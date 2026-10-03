# Source access and migration status

Recorded: 2026-10-03.

- User-supplied Paperclip URL: `http://127.0.0.1:3100/`.
- Local access: reachable with no login at the root page.
- Source organization: SHERIDAN+BAIRNS, ID
  `8ee81b47-0030-4cee-ac57-0fb6f0ae78d7`, prefix `SHE`, active.
- Official export previews generated: 2026-10-02T13:58:27.606Z and
  2026-10-02T23:00:30.091Z. Their file content, inventory and counts match.
- Preview inventory: one project, three tasks, four agents, six skills, 27
  attachment blobs, 29 task documents and 73 total files.
- Fidelity omissions: 34 cost events and 411 activity-log entries are not in the
  standard export. All 411 activity entries were captured separately through the
  API. Twenty-seven work-product workspace/run references were omitted as
  non-portable; per-issue work-product and run metadata were captured separately.
- Safety finding: all four exported agents set
  `dangerouslyBypassApprovalsAndSandbox: true`. This source configuration was
  treated as untrusted and was not activated. Simon approved continuing while
  explicitly excluding the setting from active configuration.
- Durable source: the original preview and all 73 extracted files are under
  `source/sheridan-bairns-2026-10-02/`; the current preview and supplemental API
  records are under `source/sheridan-bairns-2026-10-03/`.
- Imported project: `mosaic-onboarding`, with 64 comments, 29 documents and 27
  attachments totaling 44,875,140 bytes. All attachment hashes and sizes passed.
- Current supplemental inventory: zero goals, zero decisions, 411 activity-log
  entries and 41 company heartbeat runs. Per-issue records include all 64 comments,
  26 API-listed documents, 27 attachments, 27 work products and run metadata.
  Paperclip reported version `2026.916.1`.
- Paperclip records and settings changed: none; all API operations were read-only
  listings or export previews.
- Hub project registered from source: `mosaic-onboarding`. No missing records were
  reconstructed from memory.

See [RECONCILIATION.md](RECONCILIATION.md) for counts, checks and omissions.
