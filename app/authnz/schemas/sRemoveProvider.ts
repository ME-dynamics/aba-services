import { statusCodes, fluentSchema, errorSchemaObject } from "aba-node";

const params = fluentSchema
  .object()
  .prop(
    "providerPhoneNumber",
    fluentSchema.string().required().minLength(10).maxLength(14)
  );

const removeProviderResult = fluentSchema
  .object()
  .prop("payload", fluentSchema.string().required());

const response = {
  [statusCodes.OK]: removeProviderResult,
  ...errorSchemaObject,
};

export const sRemoveProvider = {
  params,
  response,
};
