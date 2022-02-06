import { queryGen } from "aba-node";
import { adapterTypes, entityTypes } from "../../types";

function insertQueryGen() {
  const { insertQuery } = queryGen;
  const query = insertQuery({
    table: "tasks",
    version: "v1",
    values: [
      { column: "user_id", dynamicValue: true },
      { column: "id", dynamicValue: true },
      { column: "content", dynamicValue: true },
      { column: "done", dynamicValue: true },
      { column: "created_at", dynamicValue: true },
      { column: "modified_at", dynamicValue: true },
    ],
  });
  return query;
}

export function buildInsertTask(args: adapterTypes.IBuildInsertTask) {
  const { insert } = args;
  const errorPath = "tasks, adapter, insert task";
  const { query, logQuery } = insertQueryGen();
  return async function insertTask(task: entityTypes.IMadeTaskObject) {
    const { userId, id, content, done, createdAt, modifiedAt } = task;
    const params = {
      user_id: userId,
      id,
      content,
      done,
      created_at: createdAt,
      modified_at: modifiedAt,
    };
    await Promise.all([
      insert({ query, params, errorPath }),
      insert({ query: logQuery, params, errorPath }),
    ]);
  };
}
