import { httpResultSuccess, httpResultClientError } from "aba-node";
import { makePatient } from "../entities";
import { usecaseTypes, entityTypes } from "../types";

export function buildCreatePatient(args: usecaseTypes.IBuildCreatePatient) {
  const { findUserById, findPatientByUserId, insertPatient } = args;
  const { notFound } = httpResultClientError;
  const { created, ok } = httpResultSuccess;
  function patientInput(
    info: usecaseTypes.tCreatePatient
  ): entityTypes.IPatient {
    const {
      userId,
      academicField,
      addiction,
      birthday,
      bodyDiseases,
      cousinMarriage,
      drugUse,
      education,
      isFatherAlive,
      isMotherAlive,
      fatherDeathReason,
      motherDeathReason,
      job,
      maritalState,
      maritalStatus,
      mindDiseases,
      problemDescription,
      religion,
      siblings,
      siblingsPosition,
      createdAt,
      modifiedAt,
    } = info;
    return {
      userId,
      academicField,
      addiction,
      birthday,
      bodyDiseases,
      cousinMarriage,
      createdAt,
      drugUse,
      education,
      isFatherAlive,
      isMotherAlive,
      fatherDeathReason,
      motherDeathReason,
      job,
      maritalState,
      maritalStatus,
      mindDiseases,
      modifiedAt,
      problemDescription,
      religion,
      siblings,
      siblingsPosition,
      softDeleted: false,
    };
  }
  return async function createPatient(info: usecaseTypes.tCreatePatient) {
    const { userId } = info;
    const userFound = await findUserById(userId);
    if (!userFound || userFound.softDeleted) {
      return notFound({ error: "user not found" });
    }
    const patientFound = await findPatientByUserId(userId);
    const patient = makePatient(patientInput(info));
    await insertPatient(patient.object());

    if (!patientFound || patientFound.softDeleted) {
      return created({
        payload: patient.object(),
      });
    }
    return ok({
      payload: patient.object(),
    });
  };
}
