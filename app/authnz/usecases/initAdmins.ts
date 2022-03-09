import { entityTypes, usecaseTypes } from "../types";

import { admin } from "../config";
import { makeOtp, makeRole } from "../entities";

export function buildInitAdmins(args: usecaseTypes.IBuildInitAdmin) {
  const {
    findAdmins,
    deleteAdmin,
    findOtpByPhone,
    insertOtp,
    insertRole,
    validatePhoneNumber,
  } = args;
  function otpInput(phoneNumber: string): entityTypes.IOtp {
    return {
      id: undefined,
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
      admin: true,
      provider: false,
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
    };
  }
  return async function initAdmins() {
    const adminsFound = await findAdmins();
    if (adminsFound) {
      for (let index = 0; index < adminsFound.length; index++) {
        const { otpId } = adminsFound[index];
        await deleteAdmin(otpId);
      }
    }
    if (admin) {
      for (let index = 0; index < admin.length; index++) {
        const phoneNumber = admin[index];
        const { isValid, phoneNumber: parsedPhoneNumber } =
          validatePhoneNumber(phoneNumber);
        if (!isValid) {
          console.log(phoneNumber, "is not valid");
          process.exit(1);
        }
        const otpFound = await findOtpByPhone(parsedPhoneNumber);
        if (otpFound) {
          const role = makeRole(roleInput(otpFound.id));
          await insertRole(role.object());
        } else {
          const otp = makeOtp(otpInput(parsedPhoneNumber));
          const role = makeRole(roleInput(otp.get.id()));
          await Promise.all([
            insertOtp(otp.object()),
            insertRole(role.object()),
          ]);
        }
      }
    }
  };
}
