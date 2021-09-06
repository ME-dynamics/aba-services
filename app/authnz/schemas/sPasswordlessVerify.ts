import { statusCodes, fluentSchema, errorSchema } from "aba-node";

const body = fluentSchema
  .object()
  .prop("otpCode", fluentSchema.number().minimum(1e4).maximum(99999).required())
  .prop(
    "otpToken",
    fluentSchema.string().required().minLength(64).maxLength(64)
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
    ),
  [statusCodes.BAD_REQUEST]: errorSchema,
  [statusCodes.INTERNAL_SERVER_ERROR]: errorSchema,
  [statusCodes.FORBIDDEN]: errorSchema,
};

export const sPasswordlessVerify = {
  body,
  response,
};
