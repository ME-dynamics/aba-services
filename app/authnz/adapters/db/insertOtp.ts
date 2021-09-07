import { queryGen, undefinedToNull } from "aba-node";
import { adaptersTypes, entityTypes } from "../../types";

/**
 * insert query generator for insert otp function
 * using this functions allows insert otp function to avoid queryGen closure
 * @returns {string} query
 */
function insertQueryGen(): string {
  const { insertQuery } = queryGen;
  const query = insertQuery({
    table: "otp",
    version: "v1",
    values: [
      { column: "id", self: true },
      { column: "device_id", self: true },
      { column: "phone_number", self: true },
      { column: "phone_confirm", self: true },
      { column: "otp_code", self: true },
      { column: "otp_token", self: true },
      { column: "otp_token_valid_date", self: true },
      { column: "otp_code_resend_count", self: true },
      { column: "otp_temp_block_date", self: true },
      { column: "permanent_block", self: true },
      { column: "created_at", self: true },
      { column: "modified_at", self: true },
      { column: "soft_deleted", self: true },
    ],
  });
  return query;
}

export function buildInsertOtp(args: adaptersTypes.IBuildInsert) {
  const { insert } = args;
  const errorPath = "authnz, adapters, insert otp";
  const query = insertQueryGen();
  return async function insertOtp(otpObject: entityTypes.IMadeOtpObject): Promise<boolean> {
    const {
      id,
      deviceId,
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
      softDeleted,
    } = otpObject;
    const result = await insert({
      query,
      params: {
        id,
        device_id: deviceId,
        phone_number: phoneNumber,
        phone_confirm: phoneConfirm,
        otp_code: undefinedToNull(otpCode),
        otp_token: undefinedToNull(otpToken),
        otp_token_valid_date: undefinedToNull(otpTokenValidDate),
        otp_code_resend_count: otpCodeResendCount,
        otp_temp_block_date: undefinedToNull(otpTempBlockDate),
        permanent_block: permanentBlock,
        created_at: createdAt,
        modified_at: modifiedAt,
        soft_deleted: softDeleted,
      },
      errorPath,
    });
    return !!result;
  };
}
