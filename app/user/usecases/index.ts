import {
  findUserById,
  findUserByPhoneNumber,
  insertUser,
  findPatientByUserId,
  insertPatient,
  findProviders,
} from "../adapters";

import { buildCreateUser } from "./createUser";
import { buildRetrieveUser } from "./retrieveUser";
import { buildUpdateUser } from "./updateUser";
import { buildCreatePatient } from "./createPatient";
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
