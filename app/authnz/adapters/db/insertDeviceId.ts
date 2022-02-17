import { queryGen } from "aba-node";
import type { adaptersTypes, entityTypes } from "../../types";

function insertQueryGen() {
  const { insertQuery } = queryGen;
  const query = insertQuery({
    table: "device_id",
    version: "v1",
    values: [
      { column: "device_id", dynamicValue: true },
      { column: "phone_number", dynamicValue: true },
      { column: "device_unique_id", dynamicValue: true },
      { column: "is_device", dynamicValue: true },
      { column: "platform", dynamicValue: true },
      { column: "brand", dynamicValue: true },
      { column: "manufacturer", dynamicValue: true },
      { column: "model", dynamicValue: true },
      { column: "model_id", dynamicValue: true },
      { column: "design_name", dynamicValue: true },
      { column: "product_name", dynamicValue: true },
      { column: "device_year_class", dynamicValue: true },
      { column: "supported_cpu_arch", dynamicValue: true },
      { column: "os", dynamicValue: true },
      { column: "os_version", dynamicValue: true },
      { column: "os_build_id", dynamicValue: true },
      { column: "os_internal_build_id", dynamicValue: true },
      { column: "android_api_level", dynamicValue: true },
      { column: "device_name", dynamicValue: true },
      { column: "created_at", dynamicValue: true },
      { column: "modified_at", dynamicValue: true },
    ],
  });
  return query;
}

export function buildInsertDeviceId(args: adaptersTypes.IBuildInsert) {
  const { insert } = args;
  const errorPath = "authnz, adapters, db, insertDeviceId";
  const { query, logQuery } = insertQueryGen();
  return async function insertDeviceId(
    deviceIdObject: entityTypes.IMadeDeviceIdObject
  ) {
    const {
      deviceId,
      phoneNumber,
      deviceUniqueId,
      isDevice,
      platform,
      brand,
      manufacturer,
      model,
      modelId,
      designName,
      productName,
      deviceYearClass,
      supportedCpuArch,
      os,
      osVersion,
      osBuildId,
      osInternalBuildId,
      androidApiLevel,
      deviceName,
      createdAt,
      modifiedAt,
    } = deviceIdObject;
    const params = {
      device_id: deviceId,
      phone_number: phoneNumber,
      device_unique_id: deviceUniqueId,
      is_device: isDevice,
      platform,
      brand,
      manufacturer,
      model,
      model_id: modelId,
      design_name: designName,
      product_name: productName,
      device_year_class: deviceYearClass,
      supported_cpu_arch: supportedCpuArch,
      os,
      os_version: osVersion,
      os_build_id: osBuildId,
      os_internal_build_id: osInternalBuildId,
      android_api_level: androidApiLevel,
      device_name: deviceName,
      created_at: createdAt,
      modified_at: modifiedAt,
    };
    await Promise.all([
      insert({ query, params, errorPath }),
      insert({ query: logQuery, params, errorPath }),
    ]);
  };
}
