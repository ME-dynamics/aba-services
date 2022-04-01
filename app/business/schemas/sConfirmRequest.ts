import { statusCodes, fluentSchema, errorSchemaObject } from "aba-node";
import { customerSchema } from "./customerSchema";
const body = fluentSchema
  .object()
  .prop("customerId", fluentSchema.string().format("uuid").required());

const customer = fluentSchema.object().prop("payload", customerSchema);

const response = {
  [statusCodes.OK]: customer,
  ...errorSchemaObject
};

export const sConfirmSchema = {
  body,
  response,
};
