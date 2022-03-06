import { httpResult } from "aba-node";
import { passwordlessStart } from "../usecases";
import { strings } from "../config";
import { controllerTypes } from "../types";

export function buildPostPasswordlessStart(
  args: controllerTypes.IBuildPostPasswordlessStart
) {
  const { validatePhoneNumber } = args;
  const { badRequest } = httpResult.clientError;
  // TODO: inject any tool that's needed, like request cache
  return async function postPasswordlessStart(
    httpRequest: controllerTypes.tPostPasswordlessStart
  ) {
    const {
      phoneNumber: number,
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
    } = httpRequest.body;
    const { isValid, phoneNumber } = validatePhoneNumber(number);
    if (!isValid) {
      return badRequest({ error: strings.phoneNotValid.fa });
    }
    return await passwordlessStart({
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
    });
  };
}
