import { types } from "aba-node";
import { tFetchCustomerProviderFunc } from "./adapters";
import { ICreateNote, IUpdateNote } from "./usecases";

export interface IBuildPostCreateNote {
  fetchCustomerProvider: tFetchCustomerProviderFunc;
}
interface IPostCreateNote {
  Body: Omit<ICreateNote, "providerId">;
}

export type tPostCreateNote = types.tRequest<IPostCreateNote>;

export interface IBuildGetCustomerNotes {
  fetchCustomerProvider: tFetchCustomerProviderFunc;
}

interface IGetCustomerNotes {
  Params: {
    id: string;
  };
}

export type tGetCustomerNotes = types.tRequest<IGetCustomerNotes>;

interface IPutUpdateNote {
  Body: Omit<IUpdateNote, "providerId">;
}

export type tPutUpdateNote = types.tRequest<IPutUpdateNote>;

export interface IBuildDeleteNote {
  fetchCustomerProvider: tFetchCustomerProviderFunc;
}
interface IDeleteNote {
  Params: {
    noteId: string;
  };
}

export type tDeleteNote = types.tRequest<IDeleteNote>;
