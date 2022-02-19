export interface IBuildFormData {
  uuid: () => string;
}

export interface IAggregate {
  title: string;
  aggregate: number;
}
export type tInterpretTypes =
  | "image"
  | "title"
  | "paragraph"
  | "list"
  | "slogan";
export interface IInterpret {
  type: tInterpretTypes;
  data: string;
}

export interface IWarning {
  title: string;
  warning: string;
}

export interface IError {
  title: string;
  error: string;
}
export interface IFormData {
  id: string | undefined;
  userId: string;
  structureId: string; // test/form shorthand id like NEO or NEOPIR
  formName: string; // test/form full title like "Neo-PIR Test"
  fields: Record<string, string>;
  aggregates: IAggregate[];
  interpret: IInterpret[];
  warnings: IWarning[];
  errors: IError[];
  createdAt: Date | undefined;
  modifiedAt: Date | undefined;
  softDeleted: boolean;
}

export interface IMadeFormDataObject extends IFormData {
  id: string;
  createdAt: Date;
  modifiedAt: Date;
}

export interface IMadeFormData {
  get: {
    id: () => string;
    userId: () => string;
    structureId: () => string;
    fields: () => Record<string, string>;
    aggregates: () => IAggregate[];
    interpret: () => IInterpret[];
    warnings: () => IWarning[];
    errors: () => IError[];
    createdAt: () => Date;
    modifiedAt: () => Date;
    softDeleted: () => boolean;
  };
  set: {
    fields: (newFields: Record<string, string>) => void;
    aggregates: (newAgg: IAggregate[]) => void;
    interpret: (newInterpret: IInterpret[]) => void;
    restore: () => void;
    remove: () => void;
  };
  object: () => IMadeFormDataObject;
}
