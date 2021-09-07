import {
  tInsertNoteFunc,
  tFindUserNotesFunc,
  IFindUserNotes,
  tFindNoteByIdFunc,
} from "./adapters";

// create note

export interface IBuildCreateNote {
  insertNote: tInsertNoteFunc;
}

export interface ICreateNote {
  ownerId: string;
  userId: string;
  title: string;
  content: string;
  imageToken: string | undefined;
}

// retrieve note

export interface IBuildRetrieveNote {
  findUserNotes: tFindUserNotesFunc;
}
export interface IRemoveNote {
  userId: string;
  id: string;
}
export type tRetrieveNote = IFindUserNotes;

// remove note

export interface IBuildRemoveNote {
  findNoteById: tFindNoteByIdFunc;
  insertNote: tInsertNoteFunc;
}

// update note

export interface IBuildUpdateNote {
  findNoteById: tFindNoteByIdFunc;
  insertNote: tInsertNoteFunc;
}

export interface IUpdateNote {
  userId: string;
  id: string;
  title: string;
  content: string;
  imageIds: string[] | undefined;
  imageToken: string | undefined;
}
