import { statusCodes, fluentSchema, errorSchema } from "aba-node";

// TODO: create a shared schema file
const requestSchema = fluentSchema
  .object()
  .prop(
    "payload",
    fluentSchema
      .array()
      .items(
        fluentSchema
          .object()
          .prop("providerId", fluentSchema.string().format("uuid").required())
          .prop("customerId", fluentSchema.string().format("uuid").required())
          .prop("name", fluentSchema.string().default(null))
          .prop("profilePictureUrl", fluentSchema.string().default(null))
          .prop("confirmed", fluentSchema.boolean().required())
          .prop("createdAt", fluentSchema.string().format("date").required())
          .prop("modifiedAt", fluentSchema.string().format("date").required())
      )
  );

const response = {
  [statusCodes.OK]: requestSchema,
  [statusCodes.NOT_FOUND]: errorSchema,
};

export const sRetrieveRequests = {
  response,
};
