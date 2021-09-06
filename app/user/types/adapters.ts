import { IUser, IMadeUser, IMadeUserObject } from "./entities";
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

export type tFindUserByIdFunc = (id:string) => Promise<IMadeUserObject | undefined> 


// find user by phone number interfaces

export type tFindUserByPhoneNumberFunc = (
  phoneNumber: string
) => Promise<IMadeUserObject | undefined>;


// ------


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
