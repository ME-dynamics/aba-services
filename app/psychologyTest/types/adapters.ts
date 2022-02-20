import { types } from "aba-node";
import { IMadeTestDataObject } from "./entities";

export interface IBuildInit {
  init: types.tDbInitFunc;
}

// find form data by user id

export interface IBuildFindTestData {
  select: types.tDbSelectFunc;
  rowToTestData: tRowToTestDataFunc;
}

export type tFindTestDataByIdFunc = (
  testId: string
) => Promise<IMadeTestDataObject | undefined>;

export type tFindTestsDataByUserIdFunc = (
  userId: string
) => Promise<IMadeTestDataObject[] | undefined>;

export interface IBuildInsert {
  insert: types.tDbUpsertFunc;
}

// insert form structure

// export type tInsertFormStructureFunc = (
//   formStructure: IMadeFormStructureObject
// ) => Promise<void>;

// insert form data

export type tInsertTestDataFunc = (
  testData: IMadeTestDataObject
) => Promise<void>;

// utils

export type tRowToTestDataFunc = (row: types.tRow) => IMadeTestDataObject;
