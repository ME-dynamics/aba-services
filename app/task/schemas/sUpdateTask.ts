import { fluentSchema, errorSchema, statusCodes } from "aba-node";

const body = fluentSchema
  .object()
  .prop(
    "userId",
    fluentSchema.oneOf([
      fluentSchema.string().format("uuid"),
      fluentSchema.null(),
    ])
  )
  .prop("taskId", fluentSchema.string().format("uuid").required())
  .prop(
    "content",
    fluentSchema.string().required().minLength(3).maxLength(1061)
  );

export const taskSchema = fluentSchema
  .object()
  .prop("userId", fluentSchema.string().required())
  .prop("id", fluentSchema.string().required())
  .prop("content", fluentSchema.string().required())
  .prop("done", fluentSchema.boolean().required())
  .prop("createdAt", fluentSchema.string().format("date-time").required())
  .prop("modifiedAt", fluentSchema.string().format("date-time").required());

const response = {
  [statusCodes.OK]: fluentSchema.object().prop("payload", taskSchema),
  [statusCodes.UNAUTHORIZED]: errorSchema,
  [statusCodes.NOT_FOUND]: errorSchema,
  [statusCodes.FORBIDDEN]: errorSchema,
  [statusCodes.BAD_REQUEST]: errorSchema,
};

export const sUpdateTask = {
  body,
  response,
};
