import { statusCodes, fluentSchema, errorSchemaObject } from "aba-node";

const response = {
  [statusCodes.OK]: fluentSchema
    .object()
    .prop("payload", fluentSchema.string().required()),
  ...errorSchemaObject,
};

export const sRemoveRequest = {
  response,
};
