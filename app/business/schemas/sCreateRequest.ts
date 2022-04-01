import { statusCodes, fluentSchema, errorSchemaObject } from "aba-node";
import { customerSchema } from "./customerSchema";
const body = fluentSchema
  .object()
  .prop("providerId", fluentSchema.string().format("uuid").required());

const requestSchema = fluentSchema.object().prop("payload", customerSchema);

const response = {
  [statusCodes.OK]: requestSchema,
  [statusCodes.CREATED]: requestSchema,
  ...errorSchemaObject,
};

export const sCreateRequest = {
  body,
  response,
};
