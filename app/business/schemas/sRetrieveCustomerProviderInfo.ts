import { statusCodes, fluentSchema, errorSchema } from "aba-node";

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
  [statusCodes.NOT_FOUND]: errorSchema,
  [statusCodes.INTERNAL_SERVER_ERROR]: errorSchema,
};

export const sRetrieveCustomerProviderInfo = {
  response,
};
