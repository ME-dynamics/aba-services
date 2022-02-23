import { fluentSchema, errorSchema, statusCodes } from "aba-node";

const body = fluentSchema
  .object()
  .prop("id", fluentSchema.string().format("uuid").required())
  .prop("title", fluentSchema.string().required().maxLength(271))
  .prop("content", fluentSchema.string().required().maxLength(9973))
  .prop(
    "imageIds",
    fluentSchema.oneOf([
      fluentSchema.null(),
      fluentSchema.array().items(fluentSchema.string().format("uuid")),
    ])
  );

const response = {
  [statusCodes.OK]: fluentSchema.object().prop(
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
        fluentSchema.oneOf([
          fluentSchema.null(),
          fluentSchema.array().items(fluentSchema.string().format("uuid")),
        ])
      )
      .prop("createdAt", fluentSchema.string().format("date-time").required())
      .prop("modifiedAt", fluentSchema.string().format("date-time").required())
  ),
  [statusCodes.INTERNAL_SERVER_ERROR]: errorSchema,
  [statusCodes.FORBIDDEN]: errorSchema,
};

export const sUpdateNote = {
  body,
  response,
};
