import { statusCodes, fluentSchema, errorSchema } from "aba-node";

const body = fluentSchema
  .object()
  .prop("providerId", fluentSchema.string().format("uuid").required())

const requestSchema = fluentSchema
  .object()
  .prop(
    "payload",
    fluentSchema
      .object()
      .prop("providerId", fluentSchema.string().format("uuid").required())
      .prop("customerId", fluentSchema.string().format("uuid").required())
      .prop("name", fluentSchema.string().default(null))
      .prop("profilePictureUrl", fluentSchema.string().default(null))
      .prop("confirmed", fluentSchema.boolean().required())
      .prop("createdAt", fluentSchema.string().format("date").required())
      .prop("modifiedAt", fluentSchema.string().format("date").required())
  );

const response = {
  [statusCodes.OK]: requestSchema,
  [statusCodes.CREATED]: requestSchema,
  [statusCodes.BAD_REQUEST]: errorSchema,
  [statusCodes.FORBIDDEN]: errorSchema,
};

export const sCreateRequest = {
  body,
  response,
};
