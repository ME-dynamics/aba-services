import { queryGen } from "aba-node";
import { applicationVersion } from "../../config";
import { adapterTypes, entityTypes } from "../../types";

function selectQueryGen(): string {
  const { selectQuery, operators } = queryGen;
  const { equal } = operators;
  const query = selectQuery({
    table: "notes",
    version: applicationVersion,
    columns: ["*"],
    where: [
      equal({ argument: "owner_id", self: true }),
      equal({ argument: "user_id", self: true }),
    ],
  });
  return query;
}

export function buildFindUserNotes(args: adapterTypes.IBuildFindUserNotes) {
  const { select, rowToNote } = args;
  const errorPath = "notes, adapters, find user notes";
  const query = selectQueryGen();
  return async function findUserNotes(
    info: adapterTypes.IFindUserNotes
  ): Promise<entityTypes.IMadeNoteObject[] | undefined> {
    const { ownerId, userId } = info;
    const result = await select({
      query,
      params: {
        owner_id: ownerId,
        user_id: userId,
      },
      errorPath,
      unique: false,
      queryOptions: undefined,
    });
    const length = result.rowLength;
    if (length === 0) {
      return undefined;
    }
    const notes: entityTypes.IMadeNoteObject[] = [];
    for (let index = 0; index < length; index++) {
      const note = rowToNote(result.rows[index]);
      if (note.softDeleted) {
        continue;
      }
      notes.push(note);
    }
    return notes;
  };
}
