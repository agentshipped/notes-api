import express from "express";
import { createStore } from "./store.js";

export function createApp(store = createStore()) {
  const app = express();
  app.use(express.json());

  app.get("/health", (_req, res) => res.json({ ok: true }));

  app.get("/notes", (_req, res) => res.json(store.list()));

  app.get("/notes/:id", (req, res) => {
    const note = store.get(req.params.id);
    if (!note) return res.status(404).json({ error: "not found" });
    res.json(note);
  });

  app.post("/notes", (req, res) => {
    const { title, body = "" } = req.body ?? {};
    if (!title) return res.status(400).json({ error: "title is required" });
    res.status(201).json(store.create({ title, body }));
  });

  app.delete("/notes/:id", (req, res) => {
    if (!store.remove(req.params.id)) return res.status(404).json({ error: "not found" });
    res.status(204).end();
  });

  return app;
}

if (process.argv[1] && process.argv[1].endsWith("index.js")) {
  const port = process.env.PORT || 3000;
  createApp().listen(port, () => console.log(`demo-api listening on :${port}`));
}
