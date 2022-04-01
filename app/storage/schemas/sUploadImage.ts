import { statusCodes, fluentSchema, errorSchemaObject } from "aba-node";

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
  ...errorSchemaObject,
};

export const sUploadImage = {
  response,
};
