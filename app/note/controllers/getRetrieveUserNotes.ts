import { retrieveUserNotes } from "../usecases";
import { controllerTypes } from "../types";
import { v4 } from "uuid";

export function buildGetRetrieveUserNotes() {
  return async function getRetrieveUserNotes(
    request: controllerTypes.tGetRetrieveUserNotes
  ) {
    const { userId } = request.params;
    return await retrieveUserNotes({ ownerId: v4(), userId });
  };
}
