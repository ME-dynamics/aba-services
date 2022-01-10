import { httpResultClientError } from "aba-node";
import { passwordlessStart } from "../usecases";
import { strings } from "../config";
import { controllerTypes } from "../types";

export function buildPostPasswordlessStart(
  args: controllerTypes.IBuildPostPasswordlessStart
) {
  const { validatePhoneNumber } = args;
  const { badRequest } = httpResultClientError;
  // TODO: inject any tool that's needed, like request cache
  return async function postPasswordlessStart(
    httpRequest: controllerTypes.tPostPasswordlessStart
  ) {
    const { phoneNumber: number } = httpRequest.body;
    const { isValid, phoneNumber } = validatePhoneNumber(number);
    console.log(phoneNumber);
    if (!isValid) {
      return badRequest({ error: strings.phoneNotValid.fa });
    }
    return await passwordlessStart({ phoneNumber });
  };
}
