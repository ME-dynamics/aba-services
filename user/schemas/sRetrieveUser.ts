import { statusCodes, fluentSchema, errorSchema } from "aba-node";

import { user } from "./sCreateUser"

const params = fluentSchema
  .object()
  .prop("id", fluentSchema.string().required().format("uuid"))

const response = {
  [statusCodes.OK]: user,
  [statusCodes.NOT_FOUND]: errorSchema,
  [statusCodes.INTERNAL_SERVER_ERROR]: errorSchema,
};

export const sRetrieveUser = {
  params,
  response,
};
