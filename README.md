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
