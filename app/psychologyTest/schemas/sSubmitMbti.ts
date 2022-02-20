import { statusCodes, fluentSchema, errorSchemaObject } from "aba-node";
import { sTestData } from "./sTestData";
function mbtiGen() {
  let schema = fluentSchema.object().maxProperties(87);
  for (let index = 1; index <= 87; index++) {
    schema = schema.prop(
      `${index}`,
      fluentSchema.number().minimum(1).maximum(2).required()
    );
  }
  return fluentSchema.object().prop("fields", schema);
}

const response = {
  [statusCodes.CREATED]: fluentSchema.object().prop("payload", sTestData),
  ...errorSchemaObject,
};

export const sSubmitMbti = {
  body: mbtiGen(),
  response,
};
