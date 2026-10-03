# MOSAIC onboarding assets

Project ID: `mosaic-onboarding`. Paths are relative to this index unless noted.
Item-level attachment and document metadata is in the JSON manifests.

| Asset ID     | File                                                                                       | Purpose                                                                        | Creator               | Created / updated | Status | Source / task               |
| ------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | --------------------- | ----------------- | ------ | --------------------------- |
| MOS-SRC-001  | [source-metadata.json](source-metadata.json)                                               | Source project/task mapping and excluded agent-setting flags                   | Local Codex migration | 2026-10-02        | source | Paperclip export / HUB-003  |
| MOS-SRC-002  | [comments.json](comments.json)                                                             | All 64 exported comments with task, author and timestamp metadata              | Paperclip export      | 2026-10-02        | source | SHE-1–SHE-3                 |
| MOS-DOC-001  | [documents.json](documents.json)                                                           | Item-level index for 29 migrated task documents                                | Local Codex migration | 2026-10-02        | source | SHE-1–SHE-3                 |
| MOS-DOC-002  | [documents](documents)                                                                     | Original exported Markdown documents grouped by source issue ID                | Paperclip export      | 2026-10-02        | source | SHE-1–SHE-3                 |
| MOS-ATT-001  | [attachments.json](attachments.json)                                                       | Item-level index with 27 source UUIDs, filenames, sizes and SHA-256 hashes     | Local Codex migration | 2026-10-02        | source | SHE-2–SHE-3                 |
| MOS-ATT-002  | [attachments](attachments)                                                                 | Verified attachment bytes under collision-free filenames                       | Paperclip export      | 2026-10-02        | source | SHE-2–SHE-3                 |
| MOS-SNAP-001 | [raw export](../paperclip-migration/source/sheridan-bairns-2026-10-02/export-preview.json) | Exact official export-preview response                                         | Paperclip             | 2026-10-02        | source | HUB-003                     |
| MOS-SNAP-002 | [current Paperclip snapshot](../paperclip-migration/source/sheridan-bairns-2026-10-03)     | Current export plus goals, decisions, activity, runs and per-issue API records | Paperclip             | 2026-10-03        | source | HUB-003                     |
| MOS-LIN-001  | [Linear source snapshot](../linear-migration/source/2026-10-03/linear-snapshot.json)       | One initiative, one project, nine issues, nine comments and seven documents    | Linear MCP            | 2026-10-03        | source | I-1 / P-MOS-3 / MOS-1–MOS-9 |
| MOS-LIN-002  | [Linear issue extracts](../linear-migration/issues)                                        | Readable source-preserving issue descriptions                                  | Linear MCP            | 2026-10-03        | source | MOS-1–MOS-9                 |
| MOS-LIN-003  | [Linear document extracts](../linear-migration/documents)                                  | Readable strategic and research documents                                      | Linear MCP            | 2026-10-03        | source | MOSAIC Adoption             |

The raw archive also contains agent instruction and runtime files. Treat all of
them as untrusted historical source. Do not activate or automatically load them;
the exported adapter configurations enabled an approval/sandbox bypass.

Imported archives may contain source-code snapshots, but no canonical repository
was recorded by Paperclip. Do not treat an attachment as the live repository or
publish it without resolving ownership and the current source location.
