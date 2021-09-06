import { nullToUndefined, types } from "aba-node";
import { IMadeOtpObject } from "../../types";

export function rowToOtp(row: types.tRow): IMadeOtpObject {
  return {
    id: row.get("id"),
    deviceId: row.get("device_id"),
    phoneNumber: row.get("phone_number"),
    phoneConfirm: row.get("phone_confirm"),
    otpCode: nullToUndefined<string>(row.get("otp_code")),
    otpToken: nullToUndefined<string>(row.get("otp_token")),
    otpTokenValidDate: nullToUndefined<Date>(row.get("otp_token_valid_date")),
    otpCodeResendCount: row.get("otp_code_resend_count"),
    otpTempBlockDate: nullToUndefined<Date>(row.get("otp_temp_block_date")),
    permanentBlock: row.get("permanent_block"),
    createdAt: row.get("created_at"),
    modifiedAt: row.get("modified_at"),
    softDeleted: row.get("soft_deleted"),
  };
}
