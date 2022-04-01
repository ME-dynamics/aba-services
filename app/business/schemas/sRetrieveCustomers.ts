import { statusCodes, fluentSchema, errorSchemaObject } from "aba-node";
import { customerSchema } from "./customerSchema";
const customer = fluentSchema
  .object()
  .prop("payload", fluentSchema.array().items(customerSchema));

const response = {
  [statusCodes.OK]: customer,
  ...errorSchemaObject,
};

export const sRetrieveCustomers = {
  response,
};
