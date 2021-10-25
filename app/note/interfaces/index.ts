import { types, routeGen } from "aba-node";

import {
  sCreateNote,
  sRemoveNote,
  sRetrieveCustomerNotes,
  sUpdateNote,
} from "../schemas";
import { retrieveCustomerNotes } from "./retrieveCustomerNotes";
import { createNote } from "./createNote";
import { updateNote } from "./updateNote";
import { removeNote } from "./removeNote";
import { applicationVersion } from "../config";

export function startNoteServer(app: types.tHttpInstance) {
  app.get(
    routeGen({
      version: applicationVersion,
      role: "provider",
      routes: ["notes", ":customerId"],
    }),
    { schema: sRetrieveCustomerNotes },
    retrieveCustomerNotes
  );

  app.post(
    routeGen({
      version: applicationVersion,
      role: "provider",
      routes: ["notes"],
    }),
    { schema: sCreateNote },
    createNote
  );
  app.put(
    routeGen({
      version: applicationVersion,
      role: "provider",
      routes: ["notes"],
    }),
    { schema: sUpdateNote },
    updateNote
  );
  app.delete(
    routeGen({
      version: applicationVersion,
      role: "provider",
      routes: ["notes", ":noteId"],
    }),
    { schema: sRemoveNote },
    removeNote
  );
}
