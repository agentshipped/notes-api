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
