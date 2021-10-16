import {
  tFindPatientByUserIdFunc,
  tFindUserByIdFunc,
  tFindUserByPhoneNumberFunc,
  tInsertPatientFunc,
  tInsertUserFunc,
} from "./adapters";
import { IPatient } from "./entities";

export interface IBuildRetrieveUser {
  findUserById: tFindUserByIdFunc;
}

// create user interfaces

export interface IBuildCreateUser {
  insertUser: tInsertUserFunc;
  findUserByPhoneNumber: tFindUserByPhoneNumberFunc;
}

export interface ICreateUser {
  id: string;
  phoneNumber: string;
}

// activate and deactivate user

export interface IBuildDeOrActivateUser {
  findUserById: tFindUserByIdFunc;
  insertUser: tInsertUserFunc;
}

// create patient

export interface IBuildCreatePatient {
  findUserById: tFindUserByIdFunc;
  findPatientByUserId: tFindPatientByUserIdFunc;
  insertPatient: tInsertPatientFunc;
}

export type tCreatePatient = Omit<IPatient, "softDeleted">;

// retrieve patient

export interface IBuildRetrievePatient {
  findPatientByUserId: tFindPatientByUserIdFunc;
}

// update user

export interface IBuildUpdateUser {
  findUserById: tFindUserByIdFunc;
  insertUser: tInsertUserFunc;
}

export interface IUpdateUser {
  username: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  profilePictureUrl: string | undefined;
  address: string | undefined;
  telephone: string | undefined;
  gender: "male" | "female" | undefined;
}
