import { queryGen } from "aba-node";
import { applicationVersion } from "../../config";
import { adapterTypes, entityTypes } from "../../types";

function insertQueryGen() {
  const { insertQuery } = queryGen;
  const query = insertQuery({
    table: "form_data",
    version: applicationVersion,
    values: [
      { column: "id", dynamicValue: true },
      { column: "user_id", dynamicValue: true },
      { column: "structure_id", dynamicValue: true },
      { column: "form_name", dynamicValue: true },
      { column: "fields", dynamicValue: true },
      { column: "aggregates", dynamicValue: true },
      { column: "interpret", dynamicValue: true },
      { column: "warnings", dynamicValue: true },
      { column: "errors", dynamicValue: true },
      { column: "created_at", dynamicValue: true },
      { column: "modified_at", dynamicValue: true },
    ],
  });
  return query;
}

export function buildInsertFormData(args: adapterTypes.IBuildInsert) {
  const { insert } = args;
  const errorPath = "form, adapters, insert form data";
  const { query, logQuery } = insertQueryGen();
  return async function insertFormData(
    formData: entityTypes.IMadeFormDataObject
  ) {
    const {
      userId,
      id,
      structureId,
      formName,
      fields,
      aggregates,
      interpret,
      warnings,
      errors,
      createdAt,
      modifiedAt,
    } = formData;
    const params = {
      id,
      user_id: userId,
      structure_id: structureId,
      form_name: formName,
      fields,
      aggregates,
      interpret,
      warnings,
      errors,
      created_at: createdAt,
      modified_at: modifiedAt,
    };
    await Promise.all([
      await insert({ query, params, errorPath }),
      await insert({ query: logQuery, params, errorPath }),
    ]);
  };
}
