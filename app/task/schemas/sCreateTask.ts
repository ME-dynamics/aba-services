import { fluentSchema, errorSchemaObject, statusCodes } from "aba-node";

const body = fluentSchema
  .object()
  .prop(
    "userId",
    fluentSchema.oneOf([
      fluentSchema.string().format("uuid"),
      fluentSchema.null(),
    ])
  )
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
  [statusCodes.CREATED]: fluentSchema.object().prop("payload", taskSchema),
  ...errorSchemaObject,
};

export const sCreateTask = {
  body,
  response,
};
