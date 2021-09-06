import { queryGen } from "aba-node";
import { applicationVersion } from "../../config";
import { adapterTypes } from "../../types";

export function buildInitDb(args: adapterTypes.IBuildInitDb) {
  const { init } = args;
  const errorPath = "tasks, adapters, init db";
  return async function initDb() {
    const { createTableQuery, createIndexQuery } = queryGen;
    const createTasksTable = createTableQuery({
      name: "tasks",
      version: applicationVersion,
      columns: [
        { name: "user_id", type: "UUID" },
        { name: "id", type: "UUID" },
        { name: "content", type: "TEXT" },
        { name: "done", type: "BOOLEAN" },
        { name: "created_at", type: "TIMESTAMP" },
        { name: "modified_at", type: "TIMESTAMP" },
        { name: "soft_deleted", type: "BOOLEAN" },
      ],
      primaryKey: {
        partition: ["user_id"],
        cluster: ["created_at"],
      },
      orderBy: [{ key: "created_at", type: "DESC" }],
    });
    const taskIdIndex = createIndexQuery({
      name: "task_id",
      version: applicationVersion,
      table: "tasks",
      indexKey: "id",
    });
    await init({ query: createTasksTable.query, errorPath });
    await init({ query: taskIdIndex, errorPath });
  };
}
