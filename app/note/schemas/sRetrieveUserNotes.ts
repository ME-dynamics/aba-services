import { fluentSchema, errorSchema, statusCodes } from "aba-node";

const params = fluentSchema
  .object()
  .prop("userId", fluentSchema.string().format("uuid").required());

const response = {
  [statusCodes.OK]: fluentSchema
    .object()
    .prop(
      "payload",
      fluentSchema
        .array()
        .required()
        .items(
          fluentSchema
            .object()
            .prop("ownerId", fluentSchema.string().format("uuid").required())
            .prop("userId", fluentSchema.string().format("uuid").required())
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
        )
    )
    .required(),
  [statusCodes.NOT_FOUND]: errorSchema,
  [statusCodes.INTERNAL_SERVER_ERROR]: errorSchema,
};

export const sRetrieveUserNotes = {
  params,
  response,
};
