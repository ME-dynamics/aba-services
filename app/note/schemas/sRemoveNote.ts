import { fluentSchema, errorSchema, statusCodes } from "aba-node";

const params = fluentSchema
  .object()
  .prop("noteId", fluentSchema.string().format("uuid").required());

const response = {
  [statusCodes.OK]: fluentSchema
    .object()
    .prop("payload", fluentSchema.string().required()),
  [statusCodes.NOT_FOUND]: errorSchema,
  [statusCodes.FORBIDDEN]: errorSchema,
};

export const sRemoveNote = {
  params,
  response,
};
