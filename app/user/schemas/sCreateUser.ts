import { statusCodes, fluentSchema, errorSchema } from "aba-node";

const body = fluentSchema
  .object()
  .prop("id", fluentSchema.string().required().format("uuid"))
  .prop(
    "phoneNumber",
    fluentSchema.string().required().minLength(10).maxLength(14)
  );

const siblings = fluentSchema
  .array()
  .items(
    fluentSchema
      .object()
      .prop("role", fluentSchema.string().required())
      .prop("education", fluentSchema.string().required())
      .prop("academicFields", fluentSchema.string().default(null))
      .prop("emotionalRelation", fluentSchema.string().required())
      .prop("minDiseases", fluentSchema.string().default(null))
  );

export const user = fluentSchema
  .object()
  .prop(
    "payload",
    fluentSchema
      .object()
      .prop("id", fluentSchema.string().required())
      .prop("username", fluentSchema.string().required())
      .prop("phoneNumber", fluentSchema.string().required())
      .prop("firstName", fluentSchema.string().default(null))
      .prop("lastName", fluentSchema.string().default(null))
      .prop("profilePictureUrl", fluentSchema.string().default(null))
      .prop("address", fluentSchema.string().default(null))
      .prop("telephone", fluentSchema.string().default(null))
      .prop("problemDescription", fluentSchema.string().default(null))
      .prop("birthday", fluentSchema.string().default(null))
      .prop("maritalStatus", fluentSchema.string().default(null))
      .prop("maritalState", fluentSchema.string().default(null))
      .prop("education", fluentSchema.string().default(null))
      .prop("academicField", fluentSchema.string().default(null))
      .prop("religion", fluentSchema.string().default(null))
      .prop("job", fluentSchema.string().default(null))
      .prop("bodyDiseases", fluentSchema.string().default(null))
      .prop("mindDiseases", fluentSchema.string().default(null))
      .prop("drugUse", fluentSchema.string().default(null))
      .prop("addiction", fluentSchema.string().default(null))
      .prop("isFatherAlive", fluentSchema.string().default(null))
      .prop("isMotherAlive", fluentSchema.string().default(null))
      .prop("cousinMarriage", fluentSchema.string().default(null))
      .prop("siblingsPosition", fluentSchema.string().default(null))
      .prop("siblings", siblings)
      .prop("deactivationReason", fluentSchema.string().default(null))
      .prop("createdAt", fluentSchema.string().required())
      .prop("modifiedAt", fluentSchema.string().required())
      .prop("softDeleted", fluentSchema.boolean().required())
  );
const response = {
  [statusCodes.CREATED]: user,
  [statusCodes.OK]: user,
  [statusCodes.INTERNAL_SERVER_ERROR]: errorSchema,
};

export const sCreateUser = {
  body,
  response,
};
