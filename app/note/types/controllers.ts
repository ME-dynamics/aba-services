import { types } from "aba-node";
import { ICreateNote, IUpdateNote } from "./usecases";

interface IPostCreateNote {
  Body: Omit<ICreateNote, "userId">;
}

export type tPostCreateNote = types.tRequest<IPostCreateNote>;

interface IGetRetrieveUserNotes {
  Params: {
    userId: string;
  };
}

export type tGetRetrieveUserNotes = types.tRequest<IGetRetrieveUserNotes>;

interface IPutUpdateNote {
  Body: Omit<IUpdateNote, "userId">;
}

export type tPutUpdateNote = types.tRequest<IPutUpdateNote>;

interface IDeleteRemoveNote {
  Params: {
    id: string;
  };
}

export type tDeleteRemoveNote = types.tRequest<IDeleteRemoveNote>;
