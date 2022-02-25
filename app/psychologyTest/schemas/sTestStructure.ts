import { fluentSchema } from "aba-node";
import { schemaTypes } from "../types";

export function testStructureGen(args: schemaTypes.ITestStructureGen) {
  const { questionCount, value } = args;
  let schema = fluentSchema.object().maxProperties(questionCount);
  for (let index = 1; index <= questionCount; index++) {
    schema = schema.prop(
      `${index}`,
      fluentSchema
        .object()
        .prop("question", fluentSchema.string().required())
        .prop(
          "choices",
          fluentSchema
            .array()
            .items(
              fluentSchema
                .object()
                .prop("label", fluentSchema.string().required())
                .prop(
                  "value",
                  fluentSchema
                    .number()
                    .required()
                    .minimum(value.min)
                    .maximum(value.max)
                )
            )
        )
    );
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
    .prop("shortName", fluentSchema.string().required())
    .prop("description", fluentSchema.string().required())
    .prop("fields", schema);
  return sTestStructure;
}
