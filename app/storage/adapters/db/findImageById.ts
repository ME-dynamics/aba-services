import { queryGen } from "aba-node";
import { adapterTypes, entityTypes } from "../../types";

function selectQueryGen(): string {
  const { selectQuery, operators } = queryGen;
  const { equal } = operators;
  const query = selectQuery({
    table: "images",
    version: "v1",
    columns: ["*"],
    where: [equal({ argument: "id", self: true })],
  });
  return query;
}

export function buildFindImageById(args: adapterTypes.IBuildFindBy) {
  const { select, rowToImage } = args;
  const errorPath = "storage service, adapters, find image by id";
  const query = selectQueryGen();
  return async function findImageById(
    id: string
  ): Promise<entityTypes.IMadeImageObject | undefined> {
    const result = await select({
      query,
      params: { id },
      errorPath,
      unique: true,
      queryOptions: undefined,
    });
    if (result.rowLength === 0) {
      return undefined;
    }
    return rowToImage(result.first());
  };
}
