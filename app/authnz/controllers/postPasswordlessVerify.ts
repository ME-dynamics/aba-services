import { passwordlessVerify } from "../usecases";
import { controllerTypes } from "../types";
export function buildPostPasswordlessVerify() {
  // TODO: inject any tool that's needed, like request cache
  return async function postPasswordlessVerify(
    httpRequest: controllerTypes.tPostPasswordlessVerify
  ) {
    const { otpCode, otpToken } = httpRequest.body;
    return await passwordlessVerify({ otpCode, otpToken });
  };
}
