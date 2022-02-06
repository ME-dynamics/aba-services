import { queryGen } from "aba-node";
import { adapterTypes, entityTypes } from "../../types";

function insertQueryGen() {
  const { insertQuery } = queryGen;
  const query = insertQuery({
    table: "images",
    version: "v1",
    values: [
      { column: "user_id", dynamicValue: true },
      { column: "id", dynamicValue: true },
      { column: "access", dynamicValue: true },
      { column: "url", dynamicValue: true },
      { column: "created_at", dynamicValue: true },
      { column: "modified_at", dynamicValue: true },
    ],
  });
  return query;
}

export function buildInsertImage(args: adapterTypes.IBuildInsert) {
  const { insert } = args;
  const errorPath = "storage, adapters, insert image";
  const { query, logQuery } = insertQueryGen();
  return async function insertImage(image: entityTypes.IMadeImageObject) {
    const { userId, id, access, url, createdAt, modifiedAt } = image;
    const params = {
      user_id: userId,
      id,
      access,
      url,
      created_at: createdAt,
      modified_at: modifiedAt,
    };
    await Promise.all([
      insert({ query, params, errorPath }),
      insert({ query: logQuery, params, errorPath }),
    ]);
  };
}
