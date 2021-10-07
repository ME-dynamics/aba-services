// import { statusCodes, fluentSchema, errorSchema } from "aba-node";

// const body = fluentSchema
//   .object()
//   .prop("userId", fluentSchema.string().required().format("uuid"))
//   .prop("businessId", fluentSchema.string().format("uuid"))
//   .prop("access", fluentSchema.enum(["private", "public"]).required())
//   .prop("countLimit", fluentSchema.number().required().minimum(1).maximum(20))
//   .prop("sizeLimit", fluentSchema.number().required().minimum(1).maximum(5));

// const response = {
//   [statusCodes.CREATED]: fluentSchema
//     .object()
//     .prop(
//       "payload",
//       fluentSchema
//         .object()
//         .prop("session", fluentSchema.string().minLength(32).minLength(32))
//         .prop("secret", fluentSchema.string().minLength(64).minLength(64))
//     ),
//   [statusCodes.INTERNAL_SERVER_ERROR]: errorSchema,
//   [statusCodes.FORBIDDEN]: errorSchema,
//   [statusCodes.BAD_REQUEST]: errorSchema,
// };

// export const sFileSessionSchema = {
//   body,
//   response,
// };
