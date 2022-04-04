// inject controller dependancy and export injected object/ function
import { validatePhoneNumber } from "../adapters";

import { buildPostPasswordlessStart } from "./postPasswordlessStart";
import { buildPostPasswordlessVerify } from "./postPasswordlessVerify";
import { buildPostCreateProvider } from "./postCreateProvider";
import { buildDeleteProvider } from "./deleteProvider";
import { buildPostRefresh } from "./postRefresh";
import { buildGetRetrievePublicKey } from "./getRetrievePublicKey";

export const postPasswordlessStart = buildPostPasswordlessStart({
  validatePhoneNumber,
});
export const deleteProvider = buildDeleteProvider({ validatePhoneNumber });

export const postPasswordlessVerify = buildPostPasswordlessVerify();
export const postRefresh = buildPostRefresh();
export const postCreateProvider = buildPostCreateProvider({
  validatePhoneNumber,
});
export const getRetrievePublicKey = buildGetRetrievePublicKey();
