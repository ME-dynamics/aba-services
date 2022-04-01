import { fluentSchema, errorSchemaObject, statusCodes } from "aba-node";

const params = fluentSchema
  .object()
  .prop("taskId", fluentSchema.string().format("uuid").required())
  .prop(
    "userId",
    fluentSchema.oneOf([
      fluentSchema.null(),
      fluentSchema.string().format("uuid"),
    ])
  );

const response = {
  [statusCodes.OK]: fluentSchema
    .object()
    .prop("payload", fluentSchema.string().required()),
  ...errorSchemaObject,
};

export const sRemoveTask = {
  params,
  response,
};
