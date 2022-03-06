import { queryGen } from "aba-node";
import { applicationVersion } from "../../config";
import { adapterTypes } from "../../types";

function deleteQueryGen() {
  const { deleteQuery, operators } = queryGen;
  const { equal } = operators;
  const queries = deleteQuery({
    table: "notes",
    version: applicationVersion,
    columns: undefined,
    logIdLabel: ["provider_id", "customer_id", "created_at"],
    where: [
      equal({ argument: "provider_id", dynamicValue: true }),
      equal({ argument: "customer_id", dynamicValue: true }),
      equal({ argument: "created_at", dynamicValue: true }),
    ],
  });
  return queries;
}

export function buildDeleteNote(args: adapterTypes.IBuildDeleteNote) {
  const { remove, insert } = args;
  const errorPath = "notes, adapters, delete note";
  const { query, logQuery } = deleteQueryGen();
  return async function deleteNote(info: adapterTypes.IDeleteNote) {
    const { customerId, providerId, createdAt } = info;
    const params = {
      customer_id: customerId,
      provider_id: providerId,
      created_at: createdAt,
    };
    await Promise.all([
      remove({ query, params, errorPath }),
      insert({ query: logQuery, params, errorPath }),
    ]);
  };
}
