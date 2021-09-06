import { passwordlessVerify } from "../usecases";
import { tPostPasswordlessVerify } from "../types";
export function buildPostPasswordlessVerify() {
  // TODO: inject any tool that's needed, like request cache
  return async function postPasswordlessVerify(
    httpRequest: tPostPasswordlessVerify
  ) {
    const { otpCode, otpToken } = httpRequest.body;
    const result = await passwordlessVerify({ otpCode, otpToken });
    return result;
  };
}
