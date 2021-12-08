import { statusCodes, fluentSchema, errorSchema } from "aba-node";
import { customerSchema } from "./customerSchema";
// TODO: add a shared schema file
const customer = fluentSchema
  .object()
  .prop("payload", fluentSchema.array().items(customerSchema));

const response = {
  [statusCodes.OK]: customer,
  [statusCodes.NOT_FOUND]: errorSchema,
};

export const sRetrieveCustomers = {
  response,
};
