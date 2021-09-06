import {
  tFindUserByIdFunc,
  tFindUserByPhoneNumberFunc,
  tInsertUserFunc,
  tUpdateUserFunc,
  tUserToObject,
} from "./adapters";

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