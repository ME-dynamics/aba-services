import { adaptersTypes } from "../../types";

export function buildOtpGen(args: adaptersTypes.IBuildOtpGen) {
  const { hash, minutesFromNow, nanoid, secureRandomNumber } = args;
  const errorPath = "authnz, adapters, utils, otp gen";
  return async function otpGen() {
    const otpCode = await secureRandomNumber({ min: 1e4, max: 99999 });
    const hashedOtpCode = await hash(`${otpCode}`);
    const otpToken = nanoid(64);
    const otpTokenValidDate = minutesFromNow(10, errorPath);
    const otpTempBlockDate = minutesFromNow(1, errorPath);
    return {
      otpCode,
      hashedOtpCode,
      otpToken,
      otpTokenValidDate,
      otpTempBlockDate,
    };
  };
}
