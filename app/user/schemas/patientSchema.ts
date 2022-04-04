import { fluentSchema } from "aba-node";

const education = fluentSchema
  .enum([
    "uneducated",
    "underAged",
    "preSchool",
    "school",
    "highSchool",
    "dropoutPreSchool",
    "dropoutSchool",
    "dropoutHighSchool",
    "student",
    "graduate",
    "diploma",
    "clergyman",
  ])
  .required();

export const patient = fluentSchema
  .object()
  .prop(
    "problemDescription",
    fluentSchema.string().required().minLength(5).maxLength(5717)
  )
  .prop("maritalStatus", fluentSchema.enum(["engaged", "single"]))
  .required()
  .prop(
    "maritalState",
    fluentSchema.oneOf([
      fluentSchema.null(),
      fluentSchema.enum([
        "namzad",
        "aghed",
        "aghedDayem",
        "movaghat",
        "wives",
        "motarekeh",
        "motalagheh",
        "widow",
      ]),
    ])
  )
  .prop("education", education)
  .prop("academicField", fluentSchema.string())
  .prop(
    "religion",
    fluentSchema
      .enum([
        "islamShia",
        "islamSunny",
        "zoroastrianism",
        "christianity",
        "other",
      ])
      .required()
  )
  .prop("job", fluentSchema.string().required().minLength(2).maxLength(30))
  .prop("bodyDiseases", fluentSchema.string().default(undefined))
  .prop("mindDiseases", fluentSchema.string().default(undefined))
  .prop("drugUse", fluentSchema.string().default(undefined))
  .prop("addiction", fluentSchema.string().default(undefined))
  .prop("isFatherAlive", fluentSchema.boolean().required())
  .prop("isMotherAlive", fluentSchema.boolean().required())
  .prop("fatherDeathReason", fluentSchema.string().default(undefined))
  .prop("motherDeathReason", fluentSchema.string().default(undefined))
  .prop("cousinMarriage", fluentSchema.boolean().default(false))
  .prop(
    "siblingsPosition",
    fluentSchema.number().minimum(1).maximum(41).required()
  )
  .prop("siblings", fluentSchema.string())
  .prop("siblingDiseases", fluentSchema.string());

export const patientSchema = fluentSchema
  .object()
  .prop(
    "payload",
    patient
      .prop("createdAt", fluentSchema.string().format("date-time").required())
      .prop("modifiedAt", fluentSchema.string().format("date-time").required())
  );

// fluentSchema.array().items(
//   fluentSchema
//     .object()
//     .prop(
//       "role",
//       fluentSchema.enum(["sister", "brother", "mother", "father"])
//     )
//     .prop("education", education)
//     .prop("academicField", fluentSchema.string().required())
//     .prop("emotionalRelation", fluentSchema.string().required())
//     .prop("mindDiseases", fluentSchema.string().default(undefined))
// )
