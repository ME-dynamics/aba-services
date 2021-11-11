import {
  fetchCustomerProvider,
  parseStoragePublicUrl,
  fetchImageInfo,
} from "../adapters";
import { buildGetUser } from "./getUser";
import { buildPostCreateUser } from "./postCreateUser";
import { buildPutUpdateUser } from "./putUpdateUser";
import { buildPostCreatePatient } from "./postCreatePatient";
import { buildGetPatient } from "./getPatient";
import { buildGetProviders } from "./getProviders";

export const getUser = buildGetUser({ fetchCustomerProvider });
export const getProviders = buildGetProviders();
export const postCreateUser = buildPostCreateUser();
export const putUpdateUser = buildPutUpdateUser({
  fetchImageInfo,
  parseStoragePublicUrl,
});
export const postCreatePatient = buildPostCreatePatient({
  fetchCustomerProvider,
});
export const getPatient = buildGetPatient({ fetchCustomerProvider });
