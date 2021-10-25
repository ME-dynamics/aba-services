import {
  tInsertNoteFunc,
  tFindCustomerNotesFunc,
  tFindNoteByIdFunc,
  tImageIdsValidationFunc,
} from "./adapters";

// create note

export interface IBuildCreateNote {
  insertNote: tInsertNoteFunc;
  imageIdsValidation: tImageIdsValidationFunc;
}

export interface ICreateNote {
  providerId: string;
  customerId: string;
  title: string;
  content: string;
  imageIds: string[] | undefined;
}

// retrieve note

export interface IBuildRetrieveNote {
  findCustomerNotes: tFindCustomerNotesFunc;
}
export interface IRemoveNote {
  providerId: string;
  id: string;
}
export interface IRetrieveNote {
  providerId: string;
  customerId: string;
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
  providerId: string;
  id: string;
  title: string;
  content: string;
  imageIds: string[] | undefined;
}
