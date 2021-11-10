import { fluentSchema, errorSchema, statusCodes } from "aba-node";

const body = fluentSchema
  .object()
  .prop("userId", fluentSchema.string().format("uuid").default(undefined))
  .prop("content", fluentSchema.string().required().minLength(3).maxLength(1061));

export const taskSchema = fluentSchema
  .object()
  .prop("userId", fluentSchema.string().required())
  .prop("id", fluentSchema.string().required())
  .prop("content", fluentSchema.string().required())
  .prop("done", fluentSchema.boolean().required())
  .prop("createdAt", fluentSchema.string().format("date-time").required())
  .prop("modifiedAt", fluentSchema.string().format("date-time").required());

const response = {
  [statusCodes.CREATED]: fluentSchema.object().prop("payload", taskSchema),
  [statusCodes.UNAUTHORIZED]: errorSchema,
  [statusCodes.NOT_FOUND]: errorSchema,
  [statusCodes.FORBIDDEN]: errorSchema,
  [statusCodes.BAD_REQUEST]: errorSchema,
};

export const sCreateTask = {
  body,
  response,
};
