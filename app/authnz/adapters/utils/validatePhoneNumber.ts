import { ErrorFactory } from "aba-node";
import { parsePhoneNumberFromString } from "libphonenumber-js/max";
import { adaptersTypes } from "../../types";
export function validatePhoneNumber(
  phoneNumber: string
): adaptersTypes.IValidatePhoneNumberResult {
  try {
    const parsedNum = parsePhoneNumberFromString(phoneNumber, "IR");
    if (!parsedNum) {
      return {
        isValid: false,
        phoneNumber: "",
      };
    }
    const isValid = parsedNum?.isValid() && parsedNum.getType() === "MOBILE";
    // return parsed phone number to avoid duplicate phone numbers
    // for example: using same phone number with persian and english digits
    return { isValid, phoneNumber: parsedNum.number.toString() };
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
