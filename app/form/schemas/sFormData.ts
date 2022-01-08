import { fluentSchema } from "aba-node";

const aggregate = fluentSchema
  .object()
  .prop("title", fluentSchema.string().required())
  .prop("aggregate", fluentSchema.number().required());

const interpret = fluentSchema
  .object()
  .prop(
    "type",
    fluentSchema
      .enum(["image", "title", "paragraph", "list", "slogan"])
      .required()
  )
  .prop("data", fluentSchema.string().required());
const warning = fluentSchema
  .object()
  .prop("title", fluentSchema.string().required())
  .prop("warning", fluentSchema.string().required());

const error = fluentSchema
  .object()
  .prop("title", fluentSchema.string().required())
  .prop("error", fluentSchema.string().required());

export const sFormData = fluentSchema
  .object()
  .maxProperties(12)
  .prop("id", fluentSchema.string().required())
  .prop("userId", fluentSchema.string().required())
  .prop("structureId", fluentSchema.string().required())
  .prop("formName", fluentSchema.string().required())
  .prop("fields", fluentSchema.object().minProperties(1).required())
  .prop("aggregates", fluentSchema.array().items(aggregate).default([]))
  .prop("interpret", fluentSchema.array().items(interpret).default([]))
  .prop("warnings", fluentSchema.array().items(warning).default([]))
  .prop("errors", fluentSchema.array().items(error).default([]))
  .prop("createdAt", fluentSchema.string().required())
  .prop("modifiedAt", fluentSchema.string().required());
