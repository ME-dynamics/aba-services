import { queryGen } from "aba-node";

import type { adapterTypes } from "../../types";

function deleteQueryGen() {
  const { deleteQuery, operators } = queryGen;
  const { equal } = operators;
  const queries = deleteQuery({
    table: "tasks",
    version: "v1",
    columns: undefined,
    logIdLabel: ["user_id", "provider_id"],
    where: [
      equal({ argument: "user_id", dynamicValue: true }),
      equal({ argument: "provider_id", dynamicValue: true }),
    ],
  });
  return queries;
}

export function buildDeleteTask(args: adapterTypes.IBuildDeleteTask) {
  const { remove, insert } = args;
  const errorPath = "adapters, db, deleteTask";
  const { query, logQuery } = deleteQueryGen();
  return async function deleteTask(info: adapterTypes.IDeleteTask) {
    const { userId, providerId } = info;
    const params = { user_id: userId, provider_id: providerId };
    await Promise.all([
      remove({ query, params, errorPath }),
      insert({ query: logQuery, params, errorPath }),
    ]);
  };
}
