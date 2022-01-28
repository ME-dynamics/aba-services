import { fluentSchema, errorSchema, statusCodes } from "aba-node";
import { taskSchema } from "./sCreateTask";
const params = fluentSchema
  .object()
  .prop(
    "userId",
    fluentSchema.anyOf([
      fluentSchema.null(),
      fluentSchema.string().format("uuid"),
    ])
  );

const response = {
  [statusCodes.OK]: fluentSchema
    .object()
    .prop("payload", fluentSchema.array().items(taskSchema)),
  [statusCodes.UNAUTHORIZED]: errorSchema,
  [statusCodes.NOT_FOUND]: errorSchema,
  [statusCodes.FORBIDDEN]: errorSchema,
  [statusCodes.BAD_REQUEST]: errorSchema,
};

export const sRetrieveUserTasks = {
  params,
  response,
};
