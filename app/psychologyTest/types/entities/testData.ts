export interface IBuildTestData {
  uuid: () => string;
}

export type tTestResultTypes = "error" | "warning" | "factor" | "facet";
export interface ITestResult {
  type: tTestResultTypes;
  variable: string;
  label: {
    fa: string;
    en: string;
  };
  rawScore: number;
  baseRate: number;
  interpret: string;
}

export interface ITestData {
  id: string | undefined;
  userId: string;
  structureId: string;
  shortName: string;
  title: {
    fa: string;
    en: string;
  };
  fields: Record<string, number>;
  results: ITestResult[];
  resultSummary: string;
  createdAt: Date | undefined;
  modifiedAt: Date | undefined;
}

export interface IMadeTestDataObject extends ITestData {
  id: string;
  createdAt: Date;
  modifiedAt: Date;
}

export interface IMadeTestData {
  get: {
    id: () => string;
    userId: () => string;
    structureId: () => string;
    shortName: () => string;
    fields: () => Record<string, string | number>;
    results: () => ITestResult[];
    createdAt: () => Date;
    modifiedAt: () => Date;
  };
  object: () => IMadeTestDataObject;
}
