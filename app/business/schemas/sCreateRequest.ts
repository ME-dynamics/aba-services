import { statusCodes, fluentSchema, errorSchema } from "aba-node";
import { customerSchema } from "./customerSchema";
const body = fluentSchema
  .object()
  .prop("providerId", fluentSchema.string().format("uuid").required());

const requestSchema = fluentSchema.object().prop("payload", customerSchema);

const response = {
  [statusCodes.OK]: requestSchema,
  [statusCodes.CREATED]: requestSchema,
  [statusCodes.BAD_REQUEST]: errorSchema,
  [statusCodes.FORBIDDEN]: errorSchema,
};

export const sCreateRequest = {
  body,
  response,
};
