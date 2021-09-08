import { statusCodes, fluentSchema, errorSchema } from "aba-node";

const response = {
  [statusCodes.OK]: fluentSchema
    .object()
    .prop(
      "payload",
      fluentSchema
        .object()
        .prop("id", fluentSchema.string().required())
        .prop("url", fluentSchema.string().default(null))
    ),
  [statusCodes.FORBIDDEN]: errorSchema,
  [statusCodes.INTERNAL_SERVER_ERROR]: errorSchema,
};

export const sUploadImage = {
  response,
};
