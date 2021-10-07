import { types } from "aba-node";
import { entityTypes } from ".";
import { IMadeNoteObject } from "./entities";

// db
export interface IBuildInitDb {
  init: types.tDbInitFunc;
}

export interface IBuildFindUserNotes {
  select: types.tDbSelectFunc;
  rowToNote: tRowToNoteFunc;
}

export interface IFindUserNotes {
  ownerId: string;
  userId: string;
}

export type tFindUserNotesFunc = (
  info: IFindUserNotes
) => Promise<entityTypes.IMadeNoteObject[] | undefined>;

export interface IBuildFindNoteById {
  select: types.tDbSelectFunc;
  rowToNote: tRowToNoteFunc;
}

export type tFindNoteByIdFunc = (
  id: string
) => Promise<IMadeNoteObject | undefined>;

export interface IBuildInsertNote {
  insert: types.tDbUpsertFunc;
}

export type tInsertNoteFunc = (note: IMadeNoteObject) => Promise<void>;

// utils

export type tRowToNoteFunc = (row: types.tRow) => IMadeNoteObject;

export type tImageIdsValidationFunc = (
  imageIds: string[],
  ownerId: string
) => Promise<boolean>;

// network

export interface IMakeImage {
  userId: string;
  id: string | undefined;
  access: "public" | "private";
  url: string | undefined;
  createdAt: Date | undefined;
  modifiedAt: Date | undefined;
  softDeleted: boolean;
}

export interface IMadeImageObject extends IMakeImage {
  id: string;
  createdAt: Date;
  modifiedAt: Date;
}

export type tFetchImageInfoFunc = (
  imageId: string
) => Promise<types.IErrorResult | types.IPayloadResult<IMadeImageObject>>;
