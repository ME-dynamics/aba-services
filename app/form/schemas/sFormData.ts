import { fluentSchema } from "aba-node";

export const sFormData = fluentSchema
  .object()
  .maxProperties(12)
  .prop("id", fluentSchema.string().required())
  .prop("userId", fluentSchema.string().required())
  .prop("structureId", fluentSchema.string().required())
  .prop("formName", fluentSchema.string().required().maxLength(18))
  .prop("fields", fluentSchema.object().minProperties(1).required())
  .prop("aggregates", fluentSchema.object().minProperties(1).required())
  .prop("interpret", fluentSchema.object().minProperties(1).required())
  .prop("warnings", fluentSchema.object().default(null))
  .prop("validation", fluentSchema.object().default(null))
  .prop("created_at", fluentSchema.string().required())
  .prop("modified_at", fluentSchema.string().required());
