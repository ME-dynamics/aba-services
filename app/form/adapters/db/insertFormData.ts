import { queryGen } from "aba-node";
import { applicationVersion } from "../../config";
import { adapterTypes, entityTypes } from "../../types";

function insertQueryGen(): string {
  const { insertQuery } = queryGen;
  const query = insertQuery({
    table: "form_data",
    version: applicationVersion,
    values: [
      { column: "id", self: true },
      { column: "user_id", self: true },
      { column: "structure_id", self: true },
      { column: "form_name", self: true },
      { column: "fields", self: true },
      { column: "aggregates", self: true },
      { column: "interpret", self: true },
      { column: "warnings", self: true },
      { column: "validation", self: true },
      { column: "created_at", self: true },
      { column: "modified_at", self: true },
      { column: "soft_deleted", self: true },
    ],
  });
  return query;
}

export function buildInsertFormData(args: adapterTypes.IBuildInsert) {
  const { insert } = args;
  const errorPath = "form, adapters, insert form data";
  const query = insertQueryGen();
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
      validation,
      createdAt,
      modifiedAt,
      softDeleted,
    } = formData;
    await insert({
      query,
      params: {
        id,
        user_id: userId,
        structure_id: structureId,
        form_name: formName,
        fields,
        aggregates,
        interpret,
        warnings,
        validation,
        created_at: createdAt,
        modified_at: modifiedAt,
        soft_deleted: softDeleted,
      },
      errorPath,
    });
  };
}
