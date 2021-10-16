import { statusCodes, fluentSchema, errorSchema } from "aba-node";

const body = fluentSchema
  .object()
  .prop("providerId", fluentSchema.string().format("uuid").required())
  .prop("customerId", fluentSchema.string().format("uuid").required());

const customerSchema = fluentSchema
  .object()
  .prop(
    "payload",
    fluentSchema
      .object()
      .prop("providerId", fluentSchema.string().format("uuid").required())
      .prop("customerId", fluentSchema.string().format("uuid").required())
      .prop("name", fluentSchema.string().default(null))
      .prop("profilePictureUrl", fluentSchema.string().default(null))
      .prop("description", fluentSchema.string().default(null))
      .prop("createdAt", fluentSchema.string().format("date").required())
      .prop("modifiedAt", fluentSchema.string().format("date").required())
  );

const response = {
  [statusCodes.OK]: customerSchema,
  [statusCodes.NOT_FOUND]: errorSchema,
  [statusCodes.FORBIDDEN]: errorSchema,
};

export const sConfirmSchema = {
  body,
  response,
};
