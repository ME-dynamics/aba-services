import { queryGen, undefinedToNull } from "aba-node";
import { adaptersTypes, entityTypes } from "../../types";

/**
 * insert query generator for insert otp function
 * using this functions allows insert otp function to avoid queryGen closure
 * @returns {string} query
 */
function insertQueryGen() {
  const { insertQuery } = queryGen;
  const query = insertQuery({
    table: "otp",
    version: "v1",
    values: [
      { column: "id", dynamicValue: true }, 
      { column: "phone_number", dynamicValue: true },
      { column: "phone_confirm", dynamicValue: true },
      { column: "otp_code", dynamicValue: true },
      { column: "otp_token", dynamicValue: true },
      { column: "otp_token_valid_date", dynamicValue: true },
      { column: "otp_code_resend_count", dynamicValue: true },
      { column: "otp_temp_block_date", dynamicValue: true },
      { column: "permanent_block", dynamicValue: true },
      { column: "created_at", dynamicValue: true },
      { column: "modified_at", dynamicValue: true },
    ],
  });
  return query;
}

export function buildInsertOtp(args: adaptersTypes.IBuildInsert) {
  const { insert } = args;
  const errorPath = "authnz, adapters, insert otp";
  const { query, logQuery } = insertQueryGen();
  return async function insertOtp(
    otpObject: entityTypes.IMadeOtpObject
  ): Promise<void> {
    const {
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
    } = otpObject;
    const params = {
      id,
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
    };
    await Promise.all([
      insert({
        query,
        params,
        errorPath,
      }),
      insert({
        query: logQuery,
        params,
        errorPath,
      }),
    ]);
  };
}
