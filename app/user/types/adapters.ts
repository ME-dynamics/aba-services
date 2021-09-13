import {
  IUser,
  IMadeUser,
  IMadeUserObject,
  IMadePatientObject,
} from "./entities";
import { types } from "aba-node";

// user to object function

export type tUserToObject = (user: IMadeUser) => IMadeUserObject;

// row to user function

export type tRowToUserFunc = (row: types.tRow) => IMadeUserObject;

// insert user to database function

export type tInsertUserFunc = (info: IMadeUserObject) => Promise<void>;

// init db interfaces

export interface IBuildInitDb {
  init: types.tDbInitFunc;
}

// ------

// find by interfaces
export interface IBuildFindUserBy {
  select: types.tDbSelectFunc;
  rowToUser: tRowToUserFunc;
}

// find user by id

export type tFindUserByIdFunc = (
  id: string
) => Promise<IMadeUserObject | undefined>;

// find user by phone number interfaces

export type tFindUserByPhoneNumberFunc = (
  phoneNumber: string
) => Promise<IMadeUserObject | undefined>;

// find patient

export type tRowToPatientFunc = (row: types.tRow) => IMadePatientObject;

export interface IBuildFindPatientByUserId {
  select: types.tDbSelectFunc;
  rowToPatient: tRowToPatientFunc;
}

// insert user to db interfaces

export interface IBuildInsert {
  insert: types.tDbUpsertFunc;
}

// ------
export interface ICreateInsert {
  insert: types.tDbUpsertFunc;
}

export interface findUserById {
  select: types.tDbSelectFunc;
  rowToUser: tRowToUserFunc;
}

export type tUpdateUserFunc = (info: IUser) => Promise<boolean>;
export interface ICreateUpdate {
  insert: types.tDbUpsertFunc;
}

// patient

export type tInsertPatientFunc = (patient: IMadePatientObject) => Promise<void>;

export type tFindPatientByUserIdFunc = (
  userId: string
) => Promise<IMadePatientObject | undefined>;
