import { fluentSchema, errorSchema, statusCodes } from "aba-node";

const body = fluentSchema
  .object()
  .prop("customerId", fluentSchema.string().format("uuid").required())
  .prop("title", fluentSchema.string().required().maxLength(271))
  .prop("content", fluentSchema.string().required().maxLength(9973))
  .prop(
    "imageIds",
    fluentSchema
      .array()
      .items(fluentSchema.string().format("uuid").required())
      .default(undefined)
  );

const response = {
  [statusCodes.CREATED]: fluentSchema.object().prop(
    "payload",
    fluentSchema
      .object()
      .prop("providerId", fluentSchema.string().format("uuid").required())
      .prop("customerId", fluentSchema.string().format("uuid").required())
      .prop("id", fluentSchema.string().format("uuid").required())
      .prop("title", fluentSchema.string().required().maxLength(271))
      .prop("content", fluentSchema.string().required().maxLength(9973))
      .prop(
        "imageIds",
        fluentSchema
          .array()
          .items(fluentSchema.string().format("uuid").required())
          .default(null)
      )
      .prop("createdAt", fluentSchema.string().format("date").required())
      .prop("modifiedAt", fluentSchema.string().format("date").required())
  ).required(),
  [statusCodes.INTERNAL_SERVER_ERROR]: errorSchema,
  [statusCodes.FORBIDDEN]: errorSchema,
};

export const sCreateNote = {
  body,
  response,
};
