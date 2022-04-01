import { fluentSchema } from "aba-node";

export const sChoice = fluentSchema
  .object()
  .prop("label", fluentSchema.string().required())
  .prop("value", fluentSchema.number().required());

export const sQuestion = fluentSchema
  .object()
  .prop("question", fluentSchema.string().required())
  .prop("questionHint", fluentSchema.string().default(""))
  .prop("choices", fluentSchema.array().items(sChoice).required());

export function testStructureGen(questionCount: number) {
  let schema = fluentSchema.object().maxProperties(questionCount);
  for (let index = 1; index <= questionCount; index++) {
    schema = schema.prop(`${index}`, sQuestion);
  }
  const sTestStructure = fluentSchema
    .object()
    .prop("id", fluentSchema.string().required())
    .prop(
      "title",
      fluentSchema
        .object()
        .maxProperties(2)
        .prop("fa", fluentSchema.string().required())
        .prop("en", fluentSchema.string().required())
    )
    .prop("minutesToFill", fluentSchema.number().required())
    .prop("shortName", fluentSchema.string().required())
    .prop("description", fluentSchema.string().required())
    .prop("fields", schema);
  return sTestStructure;
}
