// inject controller dependancy and export injected object/ function
import { parsePhoneNumberFromString } from "libphonenumber-js/max";
import { buildPostPasswordlessStart } from "./postPasswordlessStart";
import { buildPostPasswordlessVerify } from "./postPasswordlessVerify";
import { buildPostRefresh } from "./postRefresh";
import { buildGetRetrievePublicKey } from "./getRetrievePublicKey";

function validatePhoneNumber(phoneNumber: string): boolean {
  const parsedNum = parsePhoneNumberFromString(phoneNumber, "IR");
  if (!parsedNum) {
    return false;
  }
  return parsedNum?.isValid() && parsedNum.getType() === "MOBILE";
}

export const postPasswordlessStart = buildPostPasswordlessStart({
  validatePhoneNumber,
});
export const postPasswordlessVerify = buildPostPasswordlessVerify();
export const postRefresh = buildPostRefresh();

export const getRetrievePublicKey = buildGetRetrievePublicKey();
