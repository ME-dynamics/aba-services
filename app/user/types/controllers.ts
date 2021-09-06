import { types } from "aba-node";
import { ICreateUser } from "./usecases";

interface IGetRetrieveUser {
  Params: {
    id: string;
  };
}

export type tGetRetrieveUser = types.tRequest<IGetRetrieveUser>;

interface IPostCreateUser {
  Body: ICreateUser;
}

export type tPostCreateUser = types.tRequest<IPostCreateUser>;

interface IPatchDeOrActivateUser {
  Params: {
    id: string;
  };
}

export type tPatchDeOrActivateUser = types.tRequest<IPatchDeOrActivateUser>;
