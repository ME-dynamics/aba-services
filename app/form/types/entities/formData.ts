export interface IBuildFormData {
  uuid: () => string;
}

export interface IFormData {
  id: string | undefined;
  userId: string;
  structureId: string;
  formName: string;
  fields: Record<string, number>;
  aggregates: Record<string, number>;
  interpret: Record<string, string>;
  warnings: Record<string, string>;
  validation: Record<string, string>;
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
    fields: () => Record<string, number>;
    aggregates: () => Record<string, number>;
    interpret: () => Record<string, string>;
    createdAt: () => Date;
    modifiedAt: () => Date;
    softDeleted: () => boolean;
  };
  set: {
    fields: (newFields: Record<string, number>) => void;
    aggregates: (newAgg: Record<string, number>) => void;
    interpret: (newInterpret: Record<string, string>) => void;
    restore: () => void;
    remove: () => void;
  };
  object: () => IMadeFormDataObject;
}
