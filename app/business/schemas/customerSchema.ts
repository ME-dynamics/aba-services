import { fluentSchema } from "aba-node";

export const customerSchema = fluentSchema
  .object()
  .prop("customerId", fluentSchema.string().format("uuid").required())
  .prop("providerId", fluentSchema.string().format("uuid").required())
  .prop("businessId", fluentSchema.string().format("uuid").required())
  .prop("requestConfirmed", fluentSchema.boolean().required())
  .prop("profilePictureUrl", fluentSchema.string().default(""))
  .prop("description", fluentSchema.string().default(""))
  .prop("createdAt", fluentSchema.string().format("date-time").required())
  .prop("modifiedAt", fluentSchema.string().format("date-time").required());
