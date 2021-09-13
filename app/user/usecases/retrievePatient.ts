import { httpResultClientError, httpResultSuccess } from "aba-node";
import { usecaseTypes } from "../types";

export function buildRetrievePatient(args: usecaseTypes.IBuildRetrievePatient) {
  const { findPatientByUserId } = args;
  const { notFound } = httpResultClientError;
  const { ok } = httpResultSuccess;
  return async function retrievePatient(userId: string) {
    const patientFound = await findPatientByUserId(userId);
    if (!patientFound || patientFound.softDeleted) {
      return notFound({ error: "patient details not found" });
    }
    return ok({
      payload: patientFound,
    });
  };
}
