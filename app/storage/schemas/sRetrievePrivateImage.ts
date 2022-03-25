import { statusCodes, fluentSchema, errorSchemaObject } from "aba-node";

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
  ...errorSchemaObject,
};

export const sRetrievePrivateImage = {
  params,
  response,
};
