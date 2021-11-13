import { auth, types, httpResultClientError } from "aba-node";

import { createPatient } from "../usecases";
import { controllerTypes, usecaseTypes } from "../types";

export function buildPostCreatePatient(
  args: controllerTypes.IBuildPostCreatePatient
) {
  const { fetchCustomerProvider } = args;
  const roles: types.IRoles = {
    customer: true,
    provider: true,
    admin: true,
    accountant: false,
    assistant: false,
    support: false,
  };
  function patientInput(
    id: string,
    info: Omit<usecaseTypes.tCreatePatient, "userId">
  ): usecaseTypes.tCreatePatient {
    const {
      academicField,
      addiction,
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
      userId: id,
      academicField,
      addiction,
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
    };
  }
  const { badRequest, forbidden } = httpResultClientError;
  return async function postCreatePatient(
    httpRequest: controllerTypes.tPostCreatePatient
  ) {
    const { success, error, payload } = auth(httpRequest, roles);
    if (!success) {
      return error;
    }
    const { role, userId } = payload;
    const { id } = httpRequest.params;
    const patientInfo = httpRequest.body;
    if (role === "admin") {
      if (!id) {
        return badRequest({ error: "user id must be defined" });
      }
      return await createPatient(patientInput(id, patientInfo));
    }
    if (role === "provider") {
      if (!id) {
        return badRequest({ error: "user id must be defined" });
      }
      const providerId = await fetchCustomerProvider(id);
      if (!providerId) {
        return forbidden({ error: "action not allowed" });
      }
      if (userId !== providerId) {
        return forbidden({ error: "action not allowed" });
      }

      return await createPatient(patientInput(id, patientInfo));
    }
    return await createPatient(patientInput(userId, patientInfo));
  };
}
