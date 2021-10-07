import {
  tInsertNoteFunc,
  tFindUserNotesFunc,
  IFindUserNotes,
  tFindNoteByIdFunc,
  tImageIdsValidationFunc,
} from "./adapters";

// create note

export interface IBuildCreateNote {
  insertNote: tInsertNoteFunc;
  imageIdsValidation: tImageIdsValidationFunc;
}

export interface ICreateNote {
  ownerId: string;
  userId: string;
  title: string;
  content: string;
  imageIds: string[] | undefined;
}

// retrieve note

export interface IBuildRetrieveNote {
  findUserNotes: tFindUserNotesFunc;
}
export interface IRemoveNote {
  ownerId: string;
  id: string;
}
export interface IRetrieveNote {
  ownerId: string;
  userId: string;
}

// remove note

export interface IBuildRemoveNote {
  findNoteById: tFindNoteByIdFunc;
  insertNote: tInsertNoteFunc;
}

// update note

export interface IBuildUpdateNote {
  findNoteById: tFindNoteByIdFunc;
  insertNote: tInsertNoteFunc;
  imageIdsValidation: tImageIdsValidationFunc;
}

export interface IUpdateNote {
  ownerId: string;
  id: string;
  title: string;
  content: string;
  imageIds: string[] | undefined;
}
