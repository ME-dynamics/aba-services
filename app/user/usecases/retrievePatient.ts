import { httpResult } from "aba-node";
import { usecaseTypes } from "../types";

export function buildRetrievePatient(args: usecaseTypes.IBuildRetrievePatient) {
  const { findPatientByUserId } = args;
  const { notFound } = httpResult.clientError;
  const { ok } = httpResult.success;
  return async function retrievePatient(userId: string) {
    const patientFound = await findPatientByUserId(userId);
    if (!patientFound) {
      return notFound({ error: "patient details not found" });
    }
    return ok({
      payload: patientFound,
    });
  };
}
