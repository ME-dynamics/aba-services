import { types } from "aba-node";
import { IValidatePhoneNumberResult } from "./adapters";
import { IPasswordlessVerify, IPasswordlessStart, IRefresh } from "./usecases";
export interface IPostPasswordlessVerify {
  Body: IPasswordlessVerify;
}

export type tPostPasswordlessVerify = types.tRequest<IPostPasswordlessVerify>;

export interface IBuildPostPasswordlessStart {
  validatePhoneNumber: (phoneNumber: string) => IValidatePhoneNumberResult;
}
export interface IPostPasswordlessStart {
  Body: IPasswordlessStart;
}

export type tPostPasswordlessStart = types.tRequest<IPostPasswordlessStart>;

export interface IPostRefresh {
  Body: IRefresh;
}
export type tPostRefresh = types.tRequest<IPostRefresh>;

export interface IBuildPostCreateProvider {
  validatePhoneNumber: (phoneNumber: string) => IValidatePhoneNumberResult;
}

export interface IPostCreateProvider {
  Body: {
    providerPhoneNumber: string;
  };
}

export type tPostCreateProvider = types.tRequest<IPostCreateProvider>;

export interface IBuildDeleteProvider {
  validatePhoneNumber: (phoneNumber: string) => IValidatePhoneNumberResult;
}

export interface IDeleteProvider {
  Params: {
    providerPhoneNumber: string;
  };
}

export type tDeleteProvider = types.tRequest<IDeleteProvider>;
