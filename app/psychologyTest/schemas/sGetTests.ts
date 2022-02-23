import { statusCodes, fluentSchema, errorSchemaObject } from "aba-node";

const sTests = fluentSchema
  .array()
  .items(
    fluentSchema
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
  );

const response = {
  [statusCodes.OK]: fluentSchema.object().prop("payload", sTests),
};

export const sGetTests = {
  response,
  ...errorSchemaObject
};
