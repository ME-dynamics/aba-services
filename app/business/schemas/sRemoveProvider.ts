import { fluentSchema, statusCodes, errorSchemaObject } from "aba-node";

const response = {
  [statusCodes.OK]: fluentSchema
    .object()
    .prop("payload", fluentSchema.string().required()),
  ...errorSchemaObject,
};

export const sRemoveProvider = {
  response,
};
