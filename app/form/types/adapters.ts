import { types } from "aba-node";
import { entityTypes } from ".";

export interface IBuildInit {
  init: types.tDbInitFunc;
}

export interface IBuildInsert {
  insert: types.tDbUpsertFunc;
}

// insert form structure

export type tInsertFormStructureFunc = (
  formStructure: entityTypes.IMadeFormStructureObject
) => Promise<void>;

// insert form data

export type tInsertFormDataFunc = (
  formData: entityTypes.IMadeFormDataObject
) => Promise<void>;
