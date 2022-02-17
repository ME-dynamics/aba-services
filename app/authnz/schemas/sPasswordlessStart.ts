import { statusCodes, fluentSchema, errorSchemaObject } from "aba-node";

const body = fluentSchema
  .object()
  .prop(
    "phoneNumber",
    fluentSchema.string().required().minLength(10).maxLength(14)
  )
  .prop(
    "deviceUniqueId",
    fluentSchema.string().required().minLength(64).maxLength(64)
  )
  .prop("isDevice", fluentSchema.boolean().required())
  .prop("platform", fluentSchema.string().required().maxLength(16))
  .prop("brand", fluentSchema.string().required().maxLength(16))
  .prop("manufacturer", fluentSchema.string().required().maxLength(24))
  .prop("model", fluentSchema.string().required().maxLength(24))
  .prop("modelId", fluentSchema.string().required().maxLength(32))
  .prop("designName", fluentSchema.string().required().maxLength(16))
  .prop("productName", fluentSchema.string().required().maxLength(16))
  .prop("deviceYearClass", fluentSchema.string().required().maxLength(8))
  .prop("supportedCpuArch", fluentSchema.string().required().maxLength(128))
  .prop("os", fluentSchema.string().required().maxLength(16))
  .prop("osVersion", fluentSchema.string().required().maxLength(16))
  .prop("osBuildId", fluentSchema.string().required().maxLength(32))
  .prop("osInternalBuildId", fluentSchema.string().required().maxLength(32))
  .prop("androidApiLevel", fluentSchema.string().required().maxLength(8))
  .prop("deviceName", fluentSchema.string().required().maxLength(16));

const response = {
  [statusCodes.CREATED]: fluentSchema
    .object()
    .prop(
      "payload",
      fluentSchema.object().prop("otpToken", fluentSchema.string().required())
    )
    .prop("deviceId", fluentSchema.string().required()),
  ...errorSchemaObject,
};

export const sPasswordlessStart = {
  body,
  response,
};
