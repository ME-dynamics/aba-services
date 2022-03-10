import { statusCodes, fluentSchema, errorSchemaObject } from "aba-node";

const body = fluentSchema
  .object()
  .prop("otpCode", fluentSchema.number().minimum(1e4).maximum(99999).required())
  .prop(
    "otpToken",
    fluentSchema.string().required().minLength(63).maxLength(64)
  )
  .prop(
    "deviceId",
    fluentSchema.string().required().minLength(127).maxLength(128)
  );

const response = {
  [statusCodes.OK]: fluentSchema
    .object()
    .prop(
      "payload",
      fluentSchema
        .object()
        .prop("jwtToken", fluentSchema.string().required())
        .prop("refreshToken", fluentSchema.string().required())
        .prop("refreshTokenExpiresAt", fluentSchema.number().required())
        .prop("jwtTokenExpiresAt", fluentSchema.number().required())
        .prop("role", fluentSchema.string().required())
        .prop("userId", fluentSchema.string().format("uuid").required())
    ),
  ...errorSchemaObject,
};

export const sPasswordlessVerify = {
  body,
  response,
};
