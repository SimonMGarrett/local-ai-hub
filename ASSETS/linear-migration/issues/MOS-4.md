# MOS-4 — Verify Linear and GitHub connectivity for grounds-to-act-mosaic

- Source: https://linear.app/sheridanandbairns/issue/MOS-4/verify-linear-and-github-connectivity-for-grounds-to-act-mosaic
- Status: Done
- Project: none
- Updated: 2026-09-16T20:21:41.217Z

## Outcome

Verify that Linear automatically links branch, commit, and pull-request activity from the actively relevant GitHub repository "SimonMGarrett/grounds-to-act-mosaic".

## Why

Phase A of the Linear and Codex workflow requires a proven issue-to-code connection, useful GitHub status automation, and enough repository access to support later Code Intelligence and regression monitoring.

## Scope

* Create a short-lived branch whose name contains this issue identifier.
* Add one removable HTML comment to README.md.
* Commit with this issue identifier.
* Push the branch.
* Create a pull request if an already-authenticated supported route is available.
* Verify which branch, commit, and pull-request records appear automatically in Linear.
* Record any settings that still require manual UI configuration.

## Constraints

* Do not modify production behavior.
* Do not merge or deploy the test change.
* Do not install software or read credentials to create the pull request.
* Keep the change atomic and easy to remove.
* GitHub remains authoritative for branch, commit, pull request, checks, and merge state.

## Verification

* Linear automatically displays the connected GitHub activity, or the missing link is documented precisely.
* Repository checks pass.
* Any remaining GitHub, Diffs, Code Intelligence, or Agent guidance setup is described with its exact UI path.
* The temporary pull request or branch is left unmerged until the connectivity result is reviewed.

