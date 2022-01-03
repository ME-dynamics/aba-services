import { statusCodes, fluentSchema, errorSchema } from "aba-node";
import { customerSchema } from "./customerSchema";

const response = {
  [statusCodes.OK]: fluentSchema.object().prop("payload", customerSchema),
  [statusCodes.NOT_FOUND]: errorSchema,
  [statusCodes.UNAUTHORIZED]: errorSchema,
  [statusCodes.INTERNAL_SERVER_ERROR]: errorSchema,
};

export const sRetrieveRequestByCustomerId = {
  response,
};
