import { queryGen } from "aba-node";
import { adapterTypes, entityTypes } from "../../types";

function selectQueryGen(): string {
  const { selectQuery, operators } = queryGen;
  const { equal } = operators;
  const query = selectQuery({
    table: "tasks",
    version: "v1",
    columns: ["*"],
    where: [equal({ argument: "id", dynamicValue: true })],
  });
  return query;
}

export function buildFindTaskById(args: adapterTypes.IBuildFindTaskById) {
  const { select, rowToTask } = args;
  const errorPath = "tasks, adapters, find tasks by  id";
  const query = selectQueryGen();
  return async function findTaskById(
    id: string
  ): Promise<entityTypes.IMadeTaskObject | undefined> {
    const result = await select({
      query,
      params: { id },
      errorPath,
      unique: false,
      queryOptions: undefined,
    });

    if (result.rowLength === 0) {
      return undefined;
    }

    return rowToTask(result.first());
  };
}
