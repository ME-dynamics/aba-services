import { statusCodes, fluentSchema, errorSchemaObject } from "aba-node";

import { userSchema } from "./userSchema";

const params = fluentSchema
  .object()
  .prop("id", fluentSchema.string().default(undefined));

const response = {
  [statusCodes.OK]: userSchema,
  ...errorSchemaObject,
};

export const sRetrieveUser = {
  params,
  response,
};
