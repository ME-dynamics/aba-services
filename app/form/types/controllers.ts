import { types } from "aba-node";
import { ISubmitFormStructure } from "./usecases";

interface IPostSubmitFormStruct {
  Body: ISubmitFormStructure;
}

export type tPostSubmitFormStruct = types.tRequest<IPostSubmitFormStruct>;

export type tGetNEOPIR = types.tRequest<unknown>;
export type tGetMBTI = types.tRequest<unknown>;
