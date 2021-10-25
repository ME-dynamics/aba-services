import { queryGen, undefinedToNull } from "aba-node";
import { applicationVersion } from "../../config";
import { adapterTypes, entityTypes } from "../../types";

function insertQueryGen() {
  const { insertQuery } = queryGen;
  const query = insertQuery({
    table: "notes",
    version: applicationVersion,
    values: [
      { column: "provider_id", self: true },
      { column: "customer_id", self: true },
      { column: "id", self: true },
      { column: "title", self: true },
      { column: "content", self: true },
      { column: "image_ids", self: true },
      { column: "created_at", self: true },
      { column: "modified_at", self: true },
      { column: "soft_deleted", self: true },
    ],
  });
  return query;
}

export function buildInsertNote(args: adapterTypes.IBuildInsertNote) {
  const { insert } = args;
  const errorPath = "notes, adapters , insert note";
  const query = insertQueryGen();
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
      softDeleted,
    } = note;
    await insert({
      query,
      params: {
        provider_id: providerId,
        customer_id: customerId,
        id,
        title,
        content,
        image_ids: undefinedToNull(imageIds),
        created_at: createdAt,
        modified_at: modifiedAt,
        soft_deleted: softDeleted,
      },
      errorPath,
    });
  };
}
