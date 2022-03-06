import { fluentSchema, errorSchemaObject, statusCodes } from "aba-node";

const provider = fluentSchema
  .object()
  .prop("id", fluentSchema.string().format("uuid").required())
  .prop("role", fluentSchema.string().required())
  .prop("username", fluentSchema.string().default(""))
  // .prop("phoneNumber", fluentSchema.string().required())
  .prop("firstName", fluentSchema.string().default(""))
  .prop("lastName", fluentSchema.string().default(""))
  .prop("description", fluentSchema.string().default(""))
  .prop("gender", fluentSchema.enum(["male", "female"]).default(""))
  .prop("profilePictureUrl", fluentSchema.string().default(""))
  .prop("address", fluentSchema.string().default(""))
  .prop("telephone", fluentSchema.string().default(""))
  .prop("createdAt", fluentSchema.string().format("date-time").required())
  .prop("modifiedAt", fluentSchema.string().format("date-time").required());

const response = {
  [statusCodes.OK]: fluentSchema
    .object()
    .prop("payload", fluentSchema.array().items(provider)),
    ...errorSchemaObject
};

export const sRetrieveProviders = {
  response,
};
