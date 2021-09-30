import { errorSchema, fluentSchema, statusCodes } from "aba-node";

function fieldsSchemaGen() {
  let schema = fluentSchema.object().maxProperties(240);
  for (let index = 1; index <= 240; index++) {
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
                  fluentSchema.number().required().minimum(0).maximum(4)
                )
            )
        )
    );
  }
  return schema;
}

const NEOPIRStructure = fluentSchema
  .object()
  .prop("id", fluentSchema.string().required())
  .prop(
    "title",
    fluentSchema
      .object()
      .prop("fa", fluentSchema.string().required())
      .prop("en", fluentSchema.string().required())
  )
  .prop("description", fluentSchema.string().required())
  .prop("fields", fieldsSchemaGen());

const response = {
  [statusCodes.OK]: fluentSchema.object().prop("payload", NEOPIRStructure),
  [statusCodes.INTERNAL_SERVER_ERROR]: errorSchema,
};

export const sNEOPIRStructure = {
  response,
};
