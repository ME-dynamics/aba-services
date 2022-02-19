import { httpResultSuccess, httpResultClientError } from "aba-node";
import type { usecaseTypes } from "../types";

export function buildRetrieveFormData(args: usecaseTypes.IBuildRetrieveFormData) {
  const { findFormDataByUserId } = args;
  const { ok } = httpResultSuccess;
  const { notFound } = httpResultClientError;
  return async function retrieveFormData(userId: string) {
    const forms = await findFormDataByUserId(userId);
    if (!forms) {
      return notFound({ error: "forms not found" });
    }
    return ok({
      payload: forms,
    });
  };
}
