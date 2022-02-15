import { entityTypes } from "../types";

/**
 * build make otp function, injects nanoid and uuid modules
 * defines isPermanentlyBlocked function - this function checks if
 * @param args
 * @returns
 */
export function buildMakeOtp(args: entityTypes.IBuildMakeOtp) {
  function isPermanentlyBlocked(otpCodeResendCount: number): boolean {
    return otpCodeResendCount > 9;
  }
  const { uuid } = args;
  return function makeOtp(otp: entityTypes.IOtp) {
    const {
      id = uuid(),
      phoneNumber,
      createdAt = new Date(),
      modifiedAt = new Date(),
    } = otp;
    let {
      phoneConfirm,
      otpCode,
      otpToken,
      otpTokenValidDate,
      otpCodeResendCount = 0,
      otpTempBlockDate,
      permanentBlock,
    } = otp;

    permanentBlock = isPermanentlyBlocked(otpCodeResendCount);

    // private function
    function _resetOtp() {
      otpCodeResendCount = 0;
      otpCode = undefined;
      otpToken = undefined;
      otpTokenValidDate = undefined;
      otpTempBlockDate = undefined;
    }

    // * Setters

    function phoneConfirmed() {
      phoneConfirm = true;
      // reset otp
      _resetOtp();
      modifiedAt.setTime(Date.now());
    }

    function setOtp(
      newOtpCode: string,
      newOtpToken: string,
      newOtpTokenValidDate: number,
      newOtpTempBlockDate: number
    ) {
      otpCodeResendCount = otpCodeResendCount + 1;
      permanentBlock = isPermanentlyBlocked(otpCodeResendCount);

      otpCode = newOtpCode;
      otpToken = newOtpToken;
      otpTokenValidDate
        ? otpTokenValidDate.setTime(newOtpTokenValidDate)
        : (otpTokenValidDate = new Date(newOtpTokenValidDate));
      otpTempBlockDate
        ? otpTempBlockDate.setTime(newOtpTempBlockDate)
        : (otpTempBlockDate = new Date(newOtpTempBlockDate));
      modifiedAt.setTime(Date.now());
    }
    const madeOtp: Readonly<entityTypes.IMadeOtp> = {
      get: {
        id: () => id,
        phoneNumber: () => phoneNumber,
        phoneConfirm: () => phoneConfirm,
        otpCode: () => otpCode,
        otpToken: () => otpToken,
        otpTokenValidDate: () => otpTokenValidDate,
        otpCodeResendCount: () => otpCodeResendCount,
        otpTempBlockDate: () => otpTempBlockDate,
        permanentBlock: () => permanentBlock,
        createdAt: () => createdAt,
        modifiedAt: () => modifiedAt,
      },
      set: {
        phoneConfirmed,
        otp: setOtp,
      },
      object: () => {
        return {
          id,
          phoneNumber,
          phoneConfirm,
          otpCode,
          otpToken,
          otpTokenValidDate,
          otpCodeResendCount,
          otpTempBlockDate,
          permanentBlock,
          createdAt,
          modifiedAt,
        };
      },
    };

    return madeOtp;
  };
}
