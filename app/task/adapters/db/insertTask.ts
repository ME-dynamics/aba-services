import { queryGen } from "aba-node";
import { adapterTypes, entityTypes } from "../../types";

function insertQueryGen(): string {
  const { insertQuery } = queryGen;
  const query = insertQuery({
    table: "tasks",
    version: "v1",
    values: [
      { column: "user_id", self: true },
      { column: "id", self: true },
      { column: "content", self: true },
      { column: "done", self: true },
      { column: "created_at", self: true },
      { column: "modified_at", self: true },
      { column: "soft_deleted", self: true },
    ],
  });
  return query;
}

export function buildInsertTask(args: adapterTypes.IBuildInsertTask) {
  const { insert } = args;
  const errorPath = "tasks, adapter, insert task";
  const query = insertQueryGen();
  return async function insertTask(task: entityTypes.IMadeTaskObject) {
    const { userId, id, content, done, createdAt, modifiedAt, softDeleted } =
      task;
    await insert({
      query,
      params: {
        user_id: userId,
        id,
        content,
        done,
        created_at: createdAt,
        modified_at: modifiedAt,
        soft_deleted: softDeleted,
      },
      errorPath,
    });
  };
}
