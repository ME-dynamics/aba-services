import { statusCodes, fluentSchema, errorSchema } from "aba-node";

const body = fluentSchema
  .object()
  .prop(
    "providerPhoneNumber",
    fluentSchema.string().id("irPhone").required().minLength(10).maxLength(14)
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
  [statusCodes.INTERNAL_SERVER_ERROR]: errorSchema,
};

export const sCreateProvider = {
  body,
  response,
};
