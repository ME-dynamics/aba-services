import { queryGen } from "aba-node";
import { adapterTypes, entityTypes } from "../../types";

function insertQueryGen(): string {
  const { insertQuery } = queryGen;
  const query = insertQuery({
    table: "images",
    version: "v1",
    values: [
      { column: "user_id", self: true },
      { column: "id", self: true },
      { column: "access", self: true },
      { column: "url", self: true },
      { column: "created_at", self: true },
      { column: "modified_at", self: true },
      { column: "soft_deleted", self: true },
    ],
  });
  return query;
}

export function buildInsertImage(args: adapterTypes.IBuildInsert) {
  const { insert } = args;
  const errorPath = "storage, adapters, insert image";
  const query = insertQueryGen();
  return async function insertImage(image: entityTypes.IMadeImageObject) {
    const { userId, id, access, url, createdAt, modifiedAt, softDeleted } =
      image;
    await insert({
      query,
      params: {
        user_id: userId,
        id,
        access,
        url,
        created_at: createdAt,
        modified_at: modifiedAt,
        soft_deleted: softDeleted,
      },
      errorPath,
    });
  };
}
