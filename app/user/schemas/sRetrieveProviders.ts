import { fluentSchema, errorSchema, statusCodes } from "aba-node";
import { user } from "./userSchema";

const response = {
  [statusCodes.OK]: fluentSchema
    .object()
    .prop("payload", fluentSchema.array().items(user)),
  [statusCodes.NOT_FOUND]: errorSchema,
  [statusCodes.UNAUTHORIZED]: errorSchema,
};

export const sRetrieveProviders = {
  response,
};
