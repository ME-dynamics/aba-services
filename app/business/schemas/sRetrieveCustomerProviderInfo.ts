import { statusCodes, fluentSchema, errorSchemaObject } from "aba-node";

const response = {
  [statusCodes.OK]: fluentSchema
    .object()
    .prop(
      "payload",
      fluentSchema
        .object()
        .prop("id", fluentSchema.string().format("uuid").required())
        .prop("name", fluentSchema.string().required())
        .prop("profilePictureUrl", fluentSchema.string().required())
        .prop("description", fluentSchema.string().required())
    ),
  ...errorSchemaObject,
};

export const sRetrieveCustomerProviderInfo = {
  response,
};
