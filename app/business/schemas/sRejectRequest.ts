import { statusCodes, fluentSchema, errorSchema } from "aba-node";

const params = fluentSchema
  .object()
  .prop("customerId", fluentSchema.string().format("uuid").required());

const response = {
  [statusCodes.OK]: fluentSchema
    .object()
    .prop("payload", fluentSchema.string().required()),
  [statusCodes.NOT_FOUND]: errorSchema,
  [statusCodes.FORBIDDEN]: errorSchema,
};

export const sRejectRequest = {
  params,
  response,
};
