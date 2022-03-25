import { statusCodes, fluentSchema, errorSchemaObject } from "aba-node";
import { customerSchema } from "./customerSchema";

const response = {
  [statusCodes.OK]: fluentSchema.object().prop("payload", customerSchema),
  ...errorSchemaObject,
};

export const sRetrieveRequestByCustomerId = {
  response,
};
