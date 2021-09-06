import { statusCodes, fluentSchema, errorSchema } from "aba-node";

const body = fluentSchema
  .object()
  .prop(
    "phoneNumber",
    fluentSchema.string().id("irPhone").required().minLength(10).maxLength(14)
  );

const response = {
  [statusCodes.CREATED]: fluentSchema
    .object()
    .prop(
      "payload",
      fluentSchema
        .object()
        .prop("otpToken", fluentSchema.string().required())
        .prop("deviceId", fluentSchema.string().required())
    ),
  [statusCodes.FORBIDDEN]: errorSchema,
  [statusCodes.TOO_MANY_REQUESTS]: errorSchema,
  [statusCodes.INTERNAL_SERVER_ERROR]: errorSchema,
  [statusCodes.BAD_REQUEST]: errorSchema,
};

export const sPasswordlessStart = {
  body,
  response,
};
