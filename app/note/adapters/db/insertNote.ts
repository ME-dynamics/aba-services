import { queryGen, undefinedToNull } from "aba-node";
import { applicationVersion } from "../../config";
import { adapterTypes, entityTypes } from "../../types";

function insertQueryGen() {
  const { insertQuery } = queryGen;
  const query = insertQuery({
    table: "notes",
    version: applicationVersion,
    values: [
      { column: "provider_id", dynamicValue: true },
      { column: "customer_id", dynamicValue: true },
      { column: "id", dynamicValue: true },
      { column: "title", dynamicValue: true },
      { column: "content", dynamicValue: true },
      { column: "image_ids", dynamicValue: true },
      { column: "created_at", dynamicValue: true },
      { column: "modified_at", dynamicValue: true },
    ],
  });
  return query;
}

export function buildInsertNote(args: adapterTypes.IBuildInsertNote) {
  const { insert } = args;
  const errorPath = "notes, adapters , insert note";
  const { query, logQuery } = insertQueryGen();
  return async function insertNote(note: entityTypes.IMadeNoteObject) {
    const {
      providerId,
      customerId,
      id,
      title,
      content,
      imageIds,
      createdAt,
      modifiedAt,
    } = note;
    const params = {
      provider_id: providerId,
      customer_id: customerId,
      id,
      title,
      content,
      image_ids: undefinedToNull(imageIds),
      created_at: createdAt,
      modified_at: modifiedAt,
    };
    await Promise.all([
      insert({ query, params, errorPath }),
      insert({ query: logQuery, params, errorPath }),
    ]);
  };
}
