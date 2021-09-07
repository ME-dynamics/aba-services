import { statusCodes, fluentSchema, errorSchema } from "aba-node";

const key = fluentSchema
  .object()
  .prop("alg", fluentSchema.string().required())
  .prop("crv", fluentSchema.string().required())
  .prop("d", fluentSchema.string())
  .prop("kty", fluentSchema.string().required())
  .prop("x", fluentSchema.string().required())
  .additionalProperties(false)
  .maxProperties(5);
const response = {
  [statusCodes.OK]: fluentSchema
    .object()
    .prop("keys", fluentSchema.array().items(key)),
  [statusCodes.NOT_FOUND]: errorSchema,
  [statusCodes.INTERNAL_SERVER_ERROR]: errorSchema,
};

export const sRetrievePublicKey = {
  response,
};
