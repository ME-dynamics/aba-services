import { statusCodes, fluentSchema, errorSchema } from "aba-node";

const body = fluentSchema
  .object()
  .prop("userId", fluentSchema.string().format("uuid").required())
  .prop("xJwtToken", fluentSchema.string().required())
  .prop(
    "xRefreshToken",
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
    ),
  [statusCodes.NOT_FOUND]: errorSchema,
  [statusCodes.INTERNAL_SERVER_ERROR]: errorSchema,
  [statusCodes.FORBIDDEN]: errorSchema,
};

export const sRefresh = {
  body,
  response,
};
