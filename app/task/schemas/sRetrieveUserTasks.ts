import { fluentSchema, errorSchemaObject, statusCodes } from "aba-node";
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
  ...errorSchemaObject,
};

export const sRetrieveUserTasks = {
  params,
  response,
};
