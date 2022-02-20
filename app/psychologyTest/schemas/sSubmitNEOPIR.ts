import { statusCodes, fluentSchema, errorSchemaObject } from "aba-node";
import { sTestData } from "./sTestData";
export function buildNEOPIRSchema() {
  let schema = fluentSchema.object().maxProperties(240);
  for (let index = 1; index <= 240; index++) {
    schema = schema.prop(
      `${index}`,
      fluentSchema.number().minimum(0).maximum(4).required()
    );
  }
  return schema;
}

const response = {
  [statusCodes.CREATED]: sTestData,
  ...errorSchemaObject,
};

export const sSubmitNEOPIR = {
  body: buildNEOPIRSchema(),
  response,
};
