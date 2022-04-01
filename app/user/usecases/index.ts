import {
  findUserById,
  findUserByPhoneNumber,
  insertUser,
  findPatientByUserId,
  insertPatient,
  findProviders,
} from "../adapters";

import { buildCreateUser } from "./createUser";
import { buildCreatePatient } from "./createPatient";

import { buildUpdateUser } from "./updateUser";
import { buildUpdateUserRole } from "./updateUserRole";

import { buildRetrieveUser } from "./retrieveUser";
import { buildRetrievePatient } from "./retrievePatient";
import { buildRetrieveProviders } from "./retrieveProviders";

export const retrieveUser = buildRetrieveUser({ findUserById });
export const createUser = buildCreateUser({
  findUserByPhoneNumber,
  insertUser,
});
export const retrievePatient = buildRetrievePatient({ findPatientByUserId });
export const retrieveProviders = buildRetrieveProviders({ findProviders });
export const createPatient = buildCreatePatient({
  findUserById,
  findPatientByUserId,
  insertPatient,
});

export const updateUser = buildUpdateUser({ findUserById, insertUser });
export const updateUserRole = buildUpdateUserRole({findUserById, insertUser})