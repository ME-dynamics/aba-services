import { types } from "aba-node";
import { ISubmitFormStructure, ISubmitMBTI } from "./usecases";

interface IPostSubmitFormStruct {
  Body: ISubmitFormStructure;
}

export type tPostSubmitFormStruct = types.tRequest<IPostSubmitFormStruct>;

interface IPostSubmitMBTI {
  Body: Omit<ISubmitMBTI, "userId">;
}

export type tPostCreateMbti = types.tRequest<IPostSubmitMBTI>;

export type tGetNEOPIR = types.tRequest<unknown>;
export type tGetMBTI = types.tRequest<unknown>;
export type tGetTests = types.tRequest<unknown>;
export type tGetBeckAnxiety = types.tRequest<unknown>;
export type tGetBeckDepressionII = types.tRequest<unknown>;
