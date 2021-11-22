import { queryGen } from "aba-node";
import { applicationVersion } from "../../config";
import { adapterTypes, entityTypes } from "../../types";

function selectQueryGen(): string {
  const { selectQuery, operators } = queryGen;
  const { equal } = operators;
  const query = selectQuery({
    table: "form_data",
    version: applicationVersion,
    columns: ["*"],
    where: [equal({ argument: "user_id", self: true })],
  });
  return query;
}

export function buildFindFormDataByUserId(
  args: adapterTypes.IBuildFindFormDataByUserId
) {
  const { select, rowToFormData } = args;
  const errorPath = "adapters, find form data by user id";
  const query = selectQueryGen();

  return async function findFormDataByUserId(userId: string) {
    const result = await select({
      query,
      params: { user_id: userId },
      errorPath,
      queryOptions: undefined,
      unique: false,
    });
    const length = result.rowLength;
    if (length === 0) {
      return undefined;
    }
    const formsData: entityTypes.IMadeFormDataObject[] = [];
    for (let index = 0; index < result.rows.length; index++) {
      const formData = result.rows[index];
      if (formData.get("soft_deleted")) {
        continue;
      }
      formsData.push(rowToFormData(formData));
    }
    return formsData.length > 0 ? formsData : undefined;
  };
}
