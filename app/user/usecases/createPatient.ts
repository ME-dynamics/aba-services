import { httpResult } from "aba-node";
import { makePatient } from "../entities";
import { usecaseTypes, entityTypes } from "../types";

export function buildCreatePatient(args: usecaseTypes.IBuildCreatePatient) {
  const { findUserById, findPatientByUserId, insertPatient } = args;
  const { notFound } = httpResult.clientError;
  const { created, ok } = httpResult.success;
  return async function createPatient(info: usecaseTypes.tCreatePatient) {
    const { userId } = info;
    const userFound = await findUserById(userId);
    if (!userFound) {
      return notFound({ error: "user not found" });
    }
    const patientFound = await findPatientByUserId(userId);
    const patient = makePatient(info);
    await insertPatient(patient.object());

    if (!patientFound) {
      return created({
        payload: patient.object(),
      });
    }
    return ok({
      payload: patient.object(),
    });
  };
}
