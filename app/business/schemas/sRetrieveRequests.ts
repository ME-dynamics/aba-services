import { statusCodes, fluentSchema, errorSchema } from "aba-node";
import { customerSchema } from "./customerSchema";
// TODO: create a shared schema file
const requestSchema = fluentSchema
  .object()
  .prop("payload", fluentSchema.array().items(customerSchema));

const response = {
  [statusCodes.OK]: requestSchema,
  [statusCodes.NOT_FOUND]: errorSchema,
};

export const sRetrieveRequests = {
  response,
};
