import { statusCodes, fluentSchema, errorSchema } from "aba-node";

import { userSchema } from "./userSchema";

const params = fluentSchema
  .object()
  .prop("id", fluentSchema.string().default(undefined));

const response = {
  [statusCodes.OK]: userSchema,
  [statusCodes.NOT_FOUND]: errorSchema,
  [statusCodes.INTERNAL_SERVER_ERROR]: errorSchema,
};

export const sRetrieveUser = {
  params,
  response,
};
