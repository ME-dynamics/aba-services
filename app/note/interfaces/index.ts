import { types, routeGen } from "aba-node";

import { retrieveUserNotes } from "./retrieveUserNotes";
import { createNote } from "./createNote";
import { updateNote } from "./updateNote";
import { removeNote } from "./removeNote";
import { applicationVersion } from "../config";

export function startNoteServer(app: types.tHttpInstance) {
  app.get(
    routeGen({
      version: applicationVersion,
      role: "provider",
      routes: ["notes", ":userId"],
    }),
    retrieveUserNotes
  );

  app.post(
    routeGen({
      version: applicationVersion,
      role: "provider",
      routes: ["notes"],
    }),
    createNote
  );
  app.put(
    routeGen({
      version: applicationVersion,
      role: "provider",
      routes: ["notes"],
    }),
    updateNote
  );
  app.delete(
    routeGen({
      version: applicationVersion,
      role: "provider",
      routes: ["notes", ":noteId"],
    }),
    removeNote
  );
}
