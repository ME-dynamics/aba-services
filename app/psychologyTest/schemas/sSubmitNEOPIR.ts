import { statusCodes, fluentSchema, errorSchema } from "aba-node";
import { sFormData } from "./sFormData";
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
  [statusCodes.CREATED]: sFormData,
  [statusCodes.INTERNAL_SERVER_ERROR]: errorSchema,
};

export const sSubmitNEOPIR = {
  body: buildNEOPIRSchema(),
  response,
};
