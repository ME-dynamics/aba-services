import { statusCodes, fluentSchema, errorSchema } from "aba-node";

const params = fluentSchema
  .object()
  .prop("imageId", fluentSchema.string().format("uuid").required());

const response = {
  [statusCodes.OK]: fluentSchema
    .object()
    .prop(
      "payload",
      fluentSchema.object().prop("url", fluentSchema.string().required())
    ),
  [statusCodes.NOT_FOUND]: errorSchema,
  [statusCodes.FORBIDDEN]: errorSchema,
};

export const sRetrievePrivateImage = {
  params,
  response,
};
