import { ErrorFactory } from "aba-node";
import { parsePhoneNumberFromString } from "libphonenumber-js/max";

export function validatePhoneNumber(phoneNumber: string): boolean {
  try {
    const parsedNum = parsePhoneNumberFromString(phoneNumber, "IR");
    if (!parsedNum) {
      return false;
    }
    return parsedNum?.isValid() && parsedNum.getType() === "MOBILE";
  } catch (error) {
    throw new ErrorFactory({
      name: "validate_phone_number",
      message: "could not parse phone number",
      detail: "",
      nativeError: error,
      path: "authnz, adapters, utils, validate phone number",
    });
  }
}
