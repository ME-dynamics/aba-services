import { statusCodes, fluentSchema, errorSchemaObject } from "aba-node";

const body = fluentSchema
  .object()
  .prop(
    "providerPhoneNumber",
    fluentSchema.string().required().minLength(10).maxLength(14)
  );

const createProviderResult = fluentSchema
  .object()
  .prop(
    "payload",
    fluentSchema
      .object()
      .prop("otpId", fluentSchema.string().required())
      .prop("phoneNumber", fluentSchema.string().required())
  );

const response = {
  [statusCodes.CREATED]: createProviderResult,
  [statusCodes.OK]: createProviderResult,
  ...errorSchemaObject
};

export const sCreateProvider = {
  body,
  response,
};
