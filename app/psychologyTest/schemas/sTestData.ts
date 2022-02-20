import { fluentSchema } from "aba-node";

const sTestResult = fluentSchema
  .object()
  .prop(
    "type",
    fluentSchema.enum(["error", "warning", "factor", "facet"]).required()
  )
  .prop("variable", fluentSchema.string())
  .prop(
    "label",
    fluentSchema
      .object()
      .prop("fa", fluentSchema.string())
      .prop("en", fluentSchema.string())
  )
  .prop("rawScore", fluentSchema.number())
  .prop("baseRate", fluentSchema.number())
  .prop("interpret", fluentSchema.string());

export const sTestData = fluentSchema
  .object()
  .prop("id", fluentSchema.string().required())
  .prop("userId", fluentSchema.string().required())
  .prop("structureId", fluentSchema.string().required())
  .prop("shortName", fluentSchema.string().required())
  .prop("fields", fluentSchema.object().additionalProperties(true))
  .prop("results", fluentSchema.array().items(sTestResult).default([]))
  .prop("resultSummary", fluentSchema.string())
  .prop("createdAt", fluentSchema.string().required())
  .prop("modifiedAt", fluentSchema.string().required());
