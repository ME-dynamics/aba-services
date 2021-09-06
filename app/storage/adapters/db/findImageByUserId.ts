import { queryGen } from "aba-node";
import { adapterTypes, entityTypes } from "../../types";

function selectQueryGen(): string {
  const { selectQuery, operators } = queryGen;
  const { equal } = operators;
  const query = selectQuery({
    table: "images",
    version: "v1",
    columns: ["*"],
    where: [equal({ argument: "user_id", self: true })],
  });
  return query;
}

export function buildFindImageByUserId(args: adapterTypes.IBuildFindBy) {
  const { select, rowToImage } = args;
  const errorPath = "storage service, adapters, find by image user id";
  const query = selectQueryGen();
  return async function findImageByUserId(
    userId: string
  ): Promise<entityTypes.IMadeImageObject[] | undefined> {
    const result = await select({
      query,
      params: { user_id: userId },
      errorPath,
      unique: false,
      queryOptions: undefined,
    });
    const length = result.rowLength;
    if (length === 0) {
      return undefined;
    }
    const images: entityTypes.IMadeImageObject[] = [];
    for (let index = 0; index < length; index++) {
      images.push(rowToImage(result.rows[index]));
    }
    return images;
  };
}
