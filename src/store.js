// In-memory note store. Intentionally simple: it exists so an agent has something to extend.
export function createStore() {
  const notes = new Map();
  let seq = 0;
  return {
    list: () => [...notes.values()],
    get: (id) => notes.get(String(id)),
    create: ({ title, body }) => {
      const note = { id: String(++seq), title, body, createdAt: new Date().toISOString() };
      notes.set(note.id, note);
      return note;
    },
    remove: (id) => notes.delete(String(id)),
  };
}
