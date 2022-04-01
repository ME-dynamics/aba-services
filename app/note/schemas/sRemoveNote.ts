import { fluentSchema, errorSchemaObject, statusCodes } from "aba-node";

const params = fluentSchema
  .object()
  .prop("noteId", fluentSchema.string().format("uuid").required());

const response = {
  [statusCodes.OK]: fluentSchema
    .object()
    .prop("payload", fluentSchema.string().required()),
  ...errorSchemaObject,
};

export const sRemoveNote = {
  params,
  response,
};
