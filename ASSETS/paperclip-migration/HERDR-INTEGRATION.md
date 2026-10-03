# Herdr integration status

Recorded: 2026-10-03.

- Herdr client/server: 0.9.1 stable, protocol 22, running and compatible.
- Herdr config: `/Users/smg/.config/herdr/config.toml`; onboarding state, theme,
  and one explicit key override are configured. `cycle_pane_previous = ""`
  disables Herdr's `prefix+shift+tab` action so Shift-Tab remains available to
  Codex. The running server accepted the reload with no diagnostics.
- Existing workspace: `AI-WORK` was present before integration changes.
- Codex global pointer: appended to `/Users/smg/.codex/AGENTS.md`; a fresh Codex
  session loaded both the global pointer and this hub's `AGENTS.md`.
- Claude global pointer: created at `/Users/smg/.claude/CLAUDE.md`.
- Herdr Codex integration: current, version 8. Installed hook
  `/Users/smg/.codex/herdr-agent-state.sh` and registered a SessionStart hook.
- Herdr Claude integration: current, version 10. Installed hook
  `/Users/smg/.claude/hooks/herdr-agent-state.sh` and registered a SessionStart hook.
- The hooks report local pane/session metadata to herdr's Unix socket only when
  herdr environment variables are present. They do not load project files.
- No source Paperclip agent/runtime configuration was activated.

## Dispatch mechanism

The supported mechanism is an explicit herdr agent prompt, not custom TOML.
Use the assignment template in `LOCAL-CODEX-HANDOVER.md`, including the absolute
hub path, project ID, task ID, repository path or `none`, observable outcome and
acceptance checks. Herdr must avoid overlapping task-file writers.

## Validation result

The first validation launch invoked the shell `codex` launcher, which unexpectedly
ran Homebrew and upgraded Codex from 0.157.1 to 0.160.0 before exiting. After Simon
explicitly approved a retry in the changed local tool state, Herdr started named
Codex agent `hub004_validator` in a sibling pane without another upgrade. The agent
resumed HUB-004, created and indexed MIG-008, updated the task state and settled as
`done`. The parent independently verified the result. See
[HERDR-HANDOVER-VALIDATION.md](HERDR-HANDOVER-VALIDATION.md).
