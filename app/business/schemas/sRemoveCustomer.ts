import { statusCodes, fluentSchema, errorSchemaObject } from "aba-node";

const params = fluentSchema
  .object()
  .prop("customerId", fluentSchema.string().format("uuid").required());

const response = {
  [statusCodes.OK]: fluentSchema
    .object()
    .prop("payload", fluentSchema.string().required()),
  ...errorSchemaObject,
};

export const sRemoveCustomer = {
  params,
  response,
};
