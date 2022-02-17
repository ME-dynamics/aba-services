import type { types } from "aba-node";
import type { entityTypes } from "../../types";

export function rowToDeviceId(
  row: types.tRow
): entityTypes.IMadeDeviceIdObject {
  return {
    deviceId: row.get("device_id")?.toString(),
    phoneNumber: row.get("phone_number"),
    deviceUniqueId: row.get("device_unique_id"),
    isDevice: row.get("is_device"),
    platform: row.get("platform"),
    brand: row.get("brand"),
    manufacturer: row.get("manufacturer"),
    model: row.get("model"),
    modelId: row.get("model_id"),
    designName: row.get("design_name"),
    productName: row.get("product_name"),
    deviceYearClass: row.get("device_year_class"),
    supportedCpuArch: row.get("supported_cpu_arch"),
    os: row.get("os"),
    osVersion: row.get("os_version"),
    osBuildId: row.get("os_build_id"),
    osInternalBuildId: row.get("os_internal_build_id"),
    androidApiLevel: row.get("android_api_level"),
    deviceName: row.get("device_name"),
    createdAt: row.get("created_at"),
    modifiedAt: row.get("modified_at"),
  };
}
