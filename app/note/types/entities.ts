// note

export interface IBuildMakeNote {
  uuid: () => string;
}

export interface IMakeNote {
  providerId: string;
  customerId: string;
  id: string | undefined;
  title: string;
  content: string;
  imageIds: string[] | undefined;
  createdAt: Date | undefined;
  modifiedAt: Date | undefined;
  softDeleted: boolean;
}

export interface IMadeNoteObject extends IMakeNote {
  id: string;
  createdAt: Date;
  modifiedAt: Date;
}

export interface IMadeNote {
  get: {
    providerId: () => string;
    customerId: () => string;
    id: () => string;
    title: () => string;
    content: () => string;
    imageIds: () => string[] | undefined;
    createdAt: () => Date;
    modifiedAt: () => Date;
    softDeleted: () => boolean;
  };
  set: {
    title: (newTitle: string) => void;
    content: (newContent: string) => void;
    imageIds: (newImageIds: string[] | undefined) => void;
    remove: () => void;
    restore: () => void;
  };
  object: () => IMadeNoteObject;
}
