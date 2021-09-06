import { statusCodes, fluentSchema, errorSchema } from "aba-node";

const fieldsSchema = fluentSchema
  .object()
  .required()
  .additionalProperties(
    fluentSchema
      .object()
      .maxProperties(2)
      .prop("question", fluentSchema.string().required())
      .prop(
        "choices",
        fluentSchema
          .array()
          .minItems(2)
          .maxItems(8)
          .required()
          .items(
            fluentSchema
              .object()
              .maxProperties(2)
              .prop("label", fluentSchema.string().required())
              .prop("value", fluentSchema.number().required())
          )
      )
  );

const body = fluentSchema
  .object()
  .prop("title", fluentSchema.string().required())
  .prop("description", fluentSchema.string())
  .prop("fields", fieldsSchema);

const response = {
  [statusCodes.CREATED]: fluentSchema
    .object()
    .prop(
      "payload",
      fluentSchema
        .object()
        .prop("id", fluentSchema.string().required())
        .prop("title", fluentSchema.string().required())
        .prop("description", fluentSchema.string())
        .prop("fields", fieldsSchema)
        .prop("createdAt", fluentSchema.string().required())
        .prop("modifiedAt", fluentSchema.string().required())
    ),
  [statusCodes.INTERNAL_SERVER_ERROR]: errorSchema,
};

export const sSubmitFormStruct = {
  body,
  response,
};

// let es = fluentSchema.object().prop("erfan", fluentSchema.string());
// for (let index = 0; index < 10; index++) {
//   es = es.prop(`${index}`, fluentSchema.string());
// }
// console.dir(es.valueOf(), { depth: null, colors: true });
