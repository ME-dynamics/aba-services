import { statusCodes, fluentSchema, errorSchema } from "aba-node";

const address = fluentSchema
  .object()
  .prop("state", fluentSchema.string().required().minLength(2).maxLength(8))
  .prop("city", fluentSchema.string().required())
  .prop("area", fluentSchema.string().required())
  .prop("telephone", fluentSchema.string().required())
  .prop("zip", fluentSchema.string().required())
  .prop("latitude", fluentSchema.number().required())
  .prop("longitude", fluentSchema.number().required())
  .prop("description", fluentSchema.string().required());

const staff = fluentSchema.array().items(fluentSchema.string().format("uuid"));

const body = fluentSchema
  .object()
  .prop("name", fluentSchema.string().required().minLength(3).maxLength(24))
  .prop("address", address)
  .prop("logoUrl", fluentSchema.string().required())
  .prop("gallery", fluentSchema.array().required().items(fluentSchema.string()))
  .prop(
    "portfolio",
    fluentSchema.array().items(fluentSchema.string()).default(undefined)
  )
  .prop(
    "features",
    fluentSchema.array().items(fluentSchema.string()).default(undefined)
  )
  .prop("description", fluentSchema.string().required().maxLength(1777))
  .prop("staff", staff);


const response = {
  [statusCodes.CREATED]: fluentSchema.object().prop("payload", fluentSchema.object()
  .prop("id", fluentSchema.string().required())
  .prop("name", fluentSchema.string().required())
  .prop("slug", fluentSchema.string().required()))
  .prop("address", address.required())
  .prop("logoUrl", fluentSchema.string().required())
  .prop("gallery", fluentSchema.array().items(fluentSchema.string()))
  .prop("portfolio", fluentSchema.array().items(fluentSchema.string()))
  .prop("features", fluentSchema.array().items(fluentSchema.string()))
  .prop("description", fluentSchema.string().required())

}