import { types } from "aba-node";
import { IMadeFormDataObject } from "./entities";

export interface IBuildInit {
  init: types.tDbInitFunc;
}

// find form data by user id

export interface IBuildFindFormDataByUserId {
  select: types.tDbSelectFunc;
  rowToFormData: tRowToFormDataFunc;
}

export type findFormDataByUserIdFunc = (
  userId: string
) => Promise<IMadeFormDataObject[] | undefined>;

export interface IBuildInsert {
  insert: types.tDbUpsertFunc;
}

// insert form structure

// export type tInsertFormStructureFunc = (
//   formStructure: IMadeFormStructureObject
// ) => Promise<void>;

// insert form data

export type tInsertFormDataFunc = (
  formData: IMadeFormDataObject
) => Promise<void>;

// utils

export type tRowToFormDataFunc = (row: types.tRow) => IMadeFormDataObject;
