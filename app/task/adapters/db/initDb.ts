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
        { columnName: "user_id", columnType: "UUID" },
        { columnName: "provider_id", columnType: "UUID" },
        { columnName: "id", columnType: "UUID" },
        { columnName: "content", columnType: "TEXT" },
        { columnName: "done", columnType: "BOOLEAN" },
        { columnName: "created_at", columnType: "TIMESTAMP" },
        { columnName: "modified_at", columnType: "TIMESTAMP" },
      ],
      primaryKey: {
        partition: ["user_id", "provider_id"],
        cluster: ["created_at"],
      },
      orderBy: [{ key: "created_at", type: "DESC" }],
    });
    const taskIdIndex = createIndexQuery({
      indexName: "task_id",
      version: applicationVersion,
      indexOnTable: "tasks",
      indexKey: "id",
    });
    await init({ query: createTasksTable.query, errorPath });
    await init({ query: createTasksTable.logQuery, errorPath });
    await init({ query: taskIdIndex, errorPath });
  };
}
