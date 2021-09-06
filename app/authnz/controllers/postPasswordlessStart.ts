import { httpResultClientError } from "aba-node"
import { passwordlessStart } from "../usecases";
import { tRole, tPostPasswordlessStart, IBuildPostPasswordlessStart } from "../types";

export function buildPostPasswordlessStart(args: IBuildPostPasswordlessStart) {
  const { validatePhoneNumber } = args;
  const { badRequest } = httpResultClientError;
  // TODO: inject any tool that's needed, like request cache
  return async function postPasswordlessStart(
    httpRequest: tPostPasswordlessStart,
  ) {
    const { phoneNumber } = httpRequest.body;
    if(!validatePhoneNumber(phoneNumber)) {
      return badRequest({error: "phone number is not valid"});
    }
    return await passwordlessStart({ phoneNumber });
  };
}
