import {
  findUserById,
  findUserByPhoneNumber,
  insertUser,
  findPatientByUserId,
  insertPatient,
} from "../adapters";

import { buildCreateUser } from "./createUser";
import { buildRetrieveUser } from "./retrieveUser";
import { buildUpdateUser } from "./updateUser";
import { buildCreatePatient } from "./createPatient";
import { buildRetrievePatient } from "./retrievePatient";

export const retrieveUser = buildRetrieveUser({ findUserById });
export const createUser = buildCreateUser({
  findUserByPhoneNumber,
  insertUser,
});
export const retrievePatient = buildRetrievePatient({ findPatientByUserId });
export const createPatient = buildCreatePatient({
  findUserById,
  findPatientByUserId,
  insertPatient,
});
export const updateUser = buildUpdateUser({ findUserById, insertUser });
