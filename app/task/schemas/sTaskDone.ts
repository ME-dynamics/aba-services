import { fluentSchema, errorSchemaObject, statusCodes } from "aba-node";

const body = fluentSchema
  .object()
  .prop("taskId", fluentSchema.string().format("uuid").required())
  .prop(
    "userId",
    fluentSchema.oneOf([
      fluentSchema.string().format("uuid"),
      fluentSchema.null(),
    ])
  );

const response = {
  [statusCodes.OK]: fluentSchema
    .object()
    .prop("payload", fluentSchema.string().required()),
  ...errorSchemaObject,
};

export const sTaskDone = {
  body,
  response,
};
