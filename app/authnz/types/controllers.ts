import { types } from "aba-node";
import { IPasswordlessVerify } from "./usecases";
export interface IPostPasswordlessVerify {
  Body: IPasswordlessVerify;
}

export type tPostPasswordlessVerify = types.tRequest<IPostPasswordlessVerify>;

export interface IBuildPostPasswordlessStart {
  validatePhoneNumber: (phoneNumber: string) => boolean;
}
export interface IPostPasswordlessStart {
  Body: {
    phoneNumber: string;
  };
}

export type tPostPasswordlessStart = types.tRequest<IPostPasswordlessStart>;

export interface IPostRefresh {
  Body: {
    userId: string;
    xJwtToken: string;
    xRefreshToken: string;
  };
}
export type tPostRefresh = types.tRequest<IPostRefresh>;

export interface IBuildPostCreateProvider {
  validatePhoneNumber: (phoneNumber: string) => boolean;
}

export interface IPostCreateProvider {
  Body: {
    providerPhoneNumber: string;
  };
}

export type tPostCreateProvider = types.tRequest<IPostCreateProvider>;