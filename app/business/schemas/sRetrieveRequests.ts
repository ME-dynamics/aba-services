import { statusCodes, fluentSchema, errorSchemaObject } from "aba-node";
import { customerSchema } from "./customerSchema";
const requestSchema = fluentSchema
  .object()
  .prop("payload", fluentSchema.array().items(customerSchema));

const response = {
  [statusCodes.OK]: requestSchema,
  ...errorSchemaObject,
};

export const sRetrieveRequests = {
  response,
};
