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
      equal({ argument: "provider_id", self: true }),
      equal({ argument: "customer_id", self: true }),
    ],
  });
  return query;
}

export function buildFindCustomerNotes(args: adapterTypes.IBuildFindCustomerNotes) {
  const { select, rowToNote } = args;
  const errorPath = "notes, adapters, find customer notes";
  const query = selectQueryGen();
  return async function findCustomerNotes(
    info: adapterTypes.IFindCustomerNotes
  ): Promise<entityTypes.IMadeNoteObject[] | undefined> {
    const { providerId, customerId } = info;
    const result = await select({
      query,
      params: {
        provider_id: providerId,
        customer_id: customerId,
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
