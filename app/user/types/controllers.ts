import { types } from "aba-node";
import { ICreateUser, IUpdateUser, tCreatePatient } from "./usecases";

import {
  tFetchCustomerProviderFunc,
  tParseStoragePublicUrlFunc,
  tFetchImageInfoFunc,
} from "./adapters";

export interface IBuildGetUser {
  fetchCustomerProvider: tFetchCustomerProviderFunc;
}

interface IGetUser {
  Params: {
    id: string | undefined;
  };
}

export type tGetUser = types.tRequest<IGetUser>;

interface IPostCreateUser {
  Body: ICreateUser;
}

export type tPostCreateUser = types.tRequest<IPostCreateUser>;

export interface IBuildPostCreatePatient {
  fetchCustomerProvider: tFetchCustomerProviderFunc;
}

interface IPostCreatePatient {
  Body: Omit<tCreatePatient, "userId">;
  Params: {
    id: string | undefined;
  };
}

export type tPostCreatePatient = types.tRequest<IPostCreatePatient>;

export interface IBuildGetPatient {
  fetchCustomerProvider: tFetchCustomerProviderFunc;
}

interface IGetPatient {
  Params: {
    id: string | undefined;
  };
}

export type tGetPatient = types.tRequest<IGetPatient>;

export type tGetProviders = types.tRequest<unknown>;
export interface IBuildPutUpdateUser {
  parseStoragePublicUrl: tParseStoragePublicUrlFunc;
  fetchImageInfo: tFetchImageInfoFunc;
  fetchCustomerProvider: tFetchCustomerProviderFunc;

}
interface IPutUpdateUser {
  Body: IUpdateUser;
  Params: {
    id: string | undefined;
  };
}

export type tPutUpdateUser = types.tRequest<IPutUpdateUser>;
