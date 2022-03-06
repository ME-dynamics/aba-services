import { types, buildRouteGenerator } from "aba-node";

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
  const routeGen = buildRouteGenerator({
    service: "notes",
    version: applicationVersion,
  });
  app.get(
    routeGen([":id"]), // TODO: to user id
    { schema: sRetrieveCustomerNotes },
    retrieveCustomerNotes
  );

  app.post(routeGen([]), { schema: sCreateNote }, createNote);
  app.put(routeGen([]), { schema: sUpdateNote }, updateNote);
  app.delete(routeGen([":noteId"]), { schema: sRemoveNote }, removeNote);
}
