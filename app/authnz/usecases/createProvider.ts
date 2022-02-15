import { httpResultSuccess } from "aba-node";
import { makeOtp, makeRole } from "../entities";
import { usecaseTypes, entityTypes } from "../types";

export function buildCreateProvider(args: usecaseTypes.IBuildCreateProvider) {
  const { findOtpByPhone, findRole, insertOtp, insertRole } = args;
  const { created, ok } = httpResultSuccess;
  function otpInput(phoneNumber: string): entityTypes.IOtp {
    return {
      id: undefined,
      // deviceId: undefined, 
      phoneNumber,
      phoneConfirm: false,
      otpCode: undefined,
      otpCodeResendCount: 0,
      otpTempBlockDate: undefined,
      otpToken: undefined,
      otpTokenValidDate: undefined,
      permanentBlock: false,
      createdAt: undefined,
      modifiedAt: undefined,
    };
  }
  function roleInput(otpId: string): entityTypes.IRole {
    return {
      otpId,
      admin: false,
      provider: true,
      assistant: false,
      customer: false,
      support: false,
      accountant: false,
      adminAL: 0,
      providerAL: 0,
      assistantAL: 0,
      customerAL: 0,
      supportAL: 0,
      accountantAL: 0,
      createdAt: undefined,
      modifiedAt: undefined,
      // softDeleted: false,
    };
  }
  return async function createProvider(info: usecaseTypes.ICreateProvider) {
    const { providerPhoneNumber } = info;
    const otpFound = await findOtpByPhone(providerPhoneNumber);
    const otp = otpFound
      ? makeOtp(otpFound)
      : makeOtp(otpInput(providerPhoneNumber));
    const roleFound = await findRole(otp.get.id());
    const role = roleFound
      ? makeRole(roleFound)
      : makeRole(roleInput(otp.get.id()));
    if (roleFound) {
      role.set.provider(true);
      role.set.customer(false);
      role.set.admin(false);
      role.set.assistant(false);
      role.set.support(false);
      role.set.accountant(false);
    }
    await Promise.all([insertOtp(otp.object()), insertRole(role.object())]);
    if (otpFound) {
      return ok<usecaseTypes.ICreateProviderResult>({
        payload: {
          otpId: otp.get.id(),
          phoneNumber: otp.get.phoneNumber(),
        },
      });
    }
    return created<usecaseTypes.ICreateProviderResult>({
      payload: {
        otpId: otp.get.id(),
        phoneNumber: otp.get.phoneNumber(),
      },
    });
  };
}
