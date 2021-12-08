import { statusCodes, fluentSchema, errorSchema } from "aba-node";
import { customerSchema } from "./customerSchema";
const body = fluentSchema
  .object()
  .prop("customerId", fluentSchema.string().format("uuid").required());

const customer = fluentSchema.object().prop("payload", customerSchema);

const response = {
  [statusCodes.OK]: customer,
  [statusCodes.NOT_FOUND]: errorSchema,
  [statusCodes.FORBIDDEN]: errorSchema,
};

export const sConfirmSchema = {
  body,
  response,
};
