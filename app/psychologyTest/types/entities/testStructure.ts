// export interface IBuildFormStructure {
//   uuid: () => string;
// }

export interface IChoice {
  label: string;
  value: number;
}
export interface IQuestion {
  question: string;
  choices: IChoice[];
}
export type tQuestionFields = Record<string, IQuestion>;
export interface ITestStructure {
  id: string;
  title: {
    fa: string;
    en: string;
  };
  shortName: string;
  description: string;
  fields: tQuestionFields;
  // createdAt: Date | undefined;
  // modifiedAt: Date | undefined;
  // softDeleted: boolean;
}

// export interface IMadeFormStructureObject extends IFormStructure {
//   id: string;
//   createdAt: Date;
//   modifiedAt: Date;
// }

// export interface IMadeFormStructure {
//   get: {
//     id: () => string;
//     title: () => string;
//     description: () => string | undefined;
//     fields: () => tQuestionFields;
//     createdAt: () => Date;
//     modifiedAt: () => Date;
//     softDeleted: () => boolean;
//   };
//   set: {
//     title: (newTitle: string) => void;
//     description: (newDescription: string | undefined) => void;
//     fields: (newFields: tQuestionFields) => void;
//     remove: () => void;
//     restore: () => void;
//   };
//   object: () => IMadeFormStructureObject;
// }
