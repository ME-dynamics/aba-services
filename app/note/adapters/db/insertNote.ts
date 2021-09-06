import { queryGen, undefinedToNull } from "aba-node";
import { applicationVersion } from "../../config";
import { adapterTypes, entityTypes } from "../../types";

function insertQueryGen() {
  const { insertQuery } = queryGen;
  const query = insertQuery({
    table: "notes",
    version: applicationVersion,
    values: [
      { column: "owner_id", self: true },
      { column: "user_id", self: true },
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
      ownerId,
      userId,
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
        owner_id: ownerId,
        user_id: userId,
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
