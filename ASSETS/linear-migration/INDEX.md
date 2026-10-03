# Linear migration assets

Workspace: SHERIDAN+BAIRNS (`5739b160-e7ea-4ca6-8a25-423374a6472e`).
Captured read-only through the Linear MCP connector on 2026-10-03.

| Asset ID    | File                                                           | Purpose                                                                                        | Status   | Source           |
| ----------- | -------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | -------- | ---------------- |
| LIN-SRC-001 | [linear-snapshot.json](source/2026-10-03/linear-snapshot.json) | Full structured snapshot of the workspace, initiative, project, issues, comments and documents | source   | Linear MCP       |
| LIN-ISS-001 | [issues](issues)                                               | Readable Markdown extracts for all nine issues                                                 | source   | MOS-1–MOS-9      |
| LIN-DOC-001 | [documents](documents)                                         | Readable Markdown extracts for all seven documents                                             | source   | Linear documents |
| LIN-REC-001 | [RECONCILIATION.md](RECONCILIATION.md)                         | Counts, mappings and asset limitations                                                         | reviewed | Linear migration |

The snapshot contains three attachment references: two point to an included Linear
document and one points to a GitHub pull request. No uploaded binary asset was
returned by the issue, comment or document records.
