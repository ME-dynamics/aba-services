import { passwordlessVerify } from "../usecases";
import { controllerTypes } from "../types";
export function buildPostPasswordlessVerify() {
  return async function postPasswordlessVerify(
    httpRequest: controllerTypes.tPostPasswordlessVerify
  ) {
    const { otpCode, otpToken, deviceId } = httpRequest.body;
    return await passwordlessVerify({ otpCode, otpToken, deviceId });
  };
}
