import { queryGen } from "aba-node";

import type { adapterTypes } from "../../types";

function deleteQueryGen() {
  const { deleteQuery, operators } = queryGen;
  const { equal } = operators;
  const queries = deleteQuery({
    table: "tasks",
    version: "v1",
    columns: undefined,
    logIdLabel: ["user_id", "provider_id", "created_at"],
    where: [
      equal({ argument: "user_id", dynamicValue: true }),
      equal({ argument: "provider_id", dynamicValue: true }),
      equal({ argument: "created_at", dynamicValue: true }),
    ],
  });
  return queries;
}

export function buildDeleteTask(args: adapterTypes.IBuildDeleteTask) {
  const { remove, insert } = args;
  const errorPath = "adapters, db, deleteTask";
  const { query, logQuery } = deleteQueryGen();
  return async function deleteTask(info: adapterTypes.IDeleteTask) {
    const { userId, providerId, createdAt } = info;
    const params = {
      user_id: userId,
      provider_id: providerId,
      created_at: createdAt,
    };
    await Promise.all([
      remove({ query, params, errorPath }),
      insert({ query: logQuery, params, errorPath }),
    ]);
  };
}
