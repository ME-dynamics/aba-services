import { statusCodes, fluentSchema, errorSchemaObject } from "aba-node";
import { userSchema } from "./userSchema";
const body = fluentSchema
  .object()
  .prop("username", fluentSchema.string().default(undefined))
  .prop("firstName", fluentSchema.string().default(undefined))
  .prop("lastName", fluentSchema.string().default(undefined))
  .prop("description", fluentSchema.string().default(undefined))
  .prop("profilePictureUrl", fluentSchema.string().default(undefined))
  .prop("address", fluentSchema.string().default(undefined))
  .prop("telephone", fluentSchema.string().default(undefined))
  .prop("gender", fluentSchema.enum(["male", "female"]).default(undefined))
  .prop(
    "birthday",
    fluentSchema.string().format("date-time").default(undefined)
  );

const response = {
  [statusCodes.OK]: userSchema,
  ...errorSchemaObject,
};

export const sUpdateUser = {
  body,
  response,
};
