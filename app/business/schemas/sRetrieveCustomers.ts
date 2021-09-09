import { statusCodes, fluentSchema, errorSchema } from "aba-node";

// TODO: add a shared schema file
const customerSchema = fluentSchema
  .object()
  .prop(
    "payload",
    fluentSchema
      .object()
      .prop("staffId", fluentSchema.string().format("uuid").required())
      .prop("customerId", fluentSchema.string().format("uuid").required())
      .prop("name", fluentSchema.string().default(null))
      .prop("imageUrl", fluentSchema.string().default(null))
      .prop("description", fluentSchema.string().default(null))
      .prop("createdAt", fluentSchema.string().format("date").required())
      .prop("modifiedAt", fluentSchema.string().format("date").required())
  );

const response = {
  [statusCodes.OK]: fluentSchema.array().items(customerSchema),
  [statusCodes.NOT_FOUND]: errorSchema,
};

export const sRetrieveCustomers = {
  response,
};
