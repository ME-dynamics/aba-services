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
    where: [equal({ argument: "id", dynamicValue: true })],
  });
  return query;
}

export function buildFindNoteById(args: adapterTypes.IBuildFindNoteById) {
  const { select, rowToNote } = args;
  const errorPath = "notes, adapters, find note by id";
  const query = selectQueryGen();
  return async function findNoteById(
    id: string
  ): Promise<entityTypes.IMadeNoteObject | undefined> {
    const result = await select({
      query,
      params: { id },
      errorPath,
      unique: true,
      queryOptions: undefined,
    });

    if (result.rowLength === 0) {
      return undefined;
    }
    return rowToNote(result.first());
  };
}
