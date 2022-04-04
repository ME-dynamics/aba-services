import { httpResult } from "aba-node";
import { makeOtp, makeRole } from "../entities";

// TODO: move this to network
import { updateUserRole } from "../../user";
import { removeProviderCustomers } from "../../business";

import type { usecaseTypes } from "../types";

export function buildRemoveProvider(args: usecaseTypes.IBuildRemoveProvider) {
  const { findOtpByPhone, findRole, insertRole } = args;
  const { ok } = httpResult.success;
  const { notFound } = httpResult.clientError;
  const { internalServerError } = httpResult.serverError;
  return async function removeProvider(info: usecaseTypes.IRemoveProvider) {
    const { providerPhoneNumber } = info;
    const otpFound = await findOtpByPhone(providerPhoneNumber);
    if (!otpFound) {
      return notFound({ error: "provider not found" });
    }
    const otp = makeOtp(otpFound);
    const roleFound = await findRole(otp.get.id());
    if (!roleFound) {
      return internalServerError({
        error: `role not found.
       either there's a bug in user verification. or provider never did login`,
      });
    }
    if (!roleFound.provider) {
      return notFound({ error: "provider not found" });
    }
    const role = makeRole(roleFound);
    role.set.customer(true);
    role.set.provider(false);
    role.set.admin(false);
    role.set.assistant(false);
    role.set.support(false);
    role.set.accountant(false);

    await Promise.all([
      removeProviderCustomers({ providerId: otp.get.id() }),
      insertRole(role.object()),
      updateUserRole({ userId: otp.get.id(), role: role.get.role() }),
    ]);
    return ok({
      payload: "provider removed",
    });
  };
}
