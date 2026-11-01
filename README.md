# notes-api

A tiny Express notes API. This is a **public demo repo for the Agent Shipped YouTube channel**:
techniques from real projects are shown here, on code anyone can clone.

```bash
npm install
npm start          # http://localhost:3000/notes
npm test           # node:test (no tests yet - that is on purpose)
```

Endpoints: `GET /health`, `GET /notes`, `GET /notes/:id`, `POST /notes {title, body}`, `DELETE /notes/:id`.
