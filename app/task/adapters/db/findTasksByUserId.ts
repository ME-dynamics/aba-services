import { queryGen } from "aba-node";
import { adapterTypes, entityTypes } from "../../types";

function selectQueryGen(): string {
  const { selectQuery, operators } = queryGen;
  const { equal } = operators;
  const query = selectQuery({
    table: "tasks",
    version: "v1",
    columns: ["*"],
    where: [
      equal({ argument: "user_id", dynamicValue: true }),
      equal({ argument: "provider_id", dynamicValue: true }),
    ],
  });
  return query;
}

export function buildFindTasksByUserId(
  args: adapterTypes.IBuildFindTasksByUserId
) {
  const { select, rowToTask } = args;
  const errorPath = "tasks, adapters, find tasks by user id";
  const query = selectQueryGen();
  return async function findTasksByUserId(
    info: adapterTypes.IFindTasksByUserId
  ): Promise<entityTypes.IMadeTaskObject[] | undefined> {
    const { userId, providerId } = info;
    const result = await select({
      query,
      params: { user_id: userId, provider_id: providerId },
      errorPath,
      unique: false,
      queryOptions: undefined,
    });
    const length = result.rowLength;
    if (length === 0) {
      return undefined;
    }
    const tasks: entityTypes.IMadeTaskObject[] = [];
    for (let index = 0; index < length; index++) {
      const task = rowToTask(result.rows[index]);
      tasks.push(task);
    }
    return tasks;
  };
}
