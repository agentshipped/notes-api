# notes-api

A tiny Express notes API. This is a **public demo repo for the Agent Shipped YouTube channel**:
techniques from real projects are shown here, on code anyone can clone.

```bash
npm install
npm start          # http://localhost:3000/notes
npm test           # node:test (no tests yet - that is on purpose)
```

Endpoints: `GET /health`, `GET /notes`, `GET /notes/:id`, `POST /notes {title, body}`, `DELETE /notes/:id`.

## Shown in

Videos on the Agent Shipped channel that use this repo:

- [One git hook blocked a fake GitHub token, so no secret hit history #Shorts](https://youtu.be/8xQ3gWhe1fQ) · E002 · 2026-11-02
- [Claude Code invented one endpoint shape. A 3-line rule fixed it #Shorts](https://youtu.be/t9Ek80jnkV0) · E001 · 2026-11-03
- [I let Claude Code test my Express API, then ran it myself three times](https://youtu.be/lSzonRoE2ok) · E003 · 2026-11-08 · [write-up](https://dev.to/agentshipped/two-prompts-took-an-untested-express-api-to-a-passing-suite-1eeg)
- [I don't trust an agent's restart. I trust a counter going up by one #Shorts](https://youtu.be/l1spi9ot4FU) · E010 · 2026-11-05
- [My mocked test passed. An 18-line check found the bug #Shorts](https://youtu.be/wlQU4M953iw) · E006 · 2026-11-10
- [A mutant survived my tests. I deleted three lines, not wrote a test #Shorts](https://youtu.be/bv00hyHiYfI) · E005 · 2026-11-12
- [My Claude Code subagent hands back 4 lines. One named a skipped case #Shorts](https://youtu.be/HWixWGz-kis) · E009 · 2026-11-17
- [I wired 5 Claude Code hooks. Two never fired](https://youtu.be/aR5c3T0jqvc) · E028 · 2026-11-22 · [write-up](https://dev.to/agentshipped/claude-code-hooks-i-wired-5-and-2-never-fired-4ejp)
- [My agent tried a bad commit. One exit code stopped it, and it retried once #Shorts](https://youtu.be/_OPT2tsNkIs) · E024 · 2026-11-24
