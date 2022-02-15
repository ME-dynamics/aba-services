// inject and export entities
import { time } from "aba-node";
import { v4 } from "uuid";
import { nanoid } from "nanoid";
import { buildMakeOtp } from "./otp";
import { buildMakeToken } from "./token";
import { buildMakeRole } from "./role";

export const makeOtp = buildMakeOtp({
  uuid: v4,
});

export const makeToken = buildMakeToken({
  hoursFromNow: time.hoursFromNow,
  nanoid,
});

export const makeRole = buildMakeRole();
