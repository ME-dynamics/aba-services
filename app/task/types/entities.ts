export interface IBuildMakeTask {
  uuid: () => string;
}

export interface IMakeTask {
  userId: string;
  id: string | undefined;
  content: string;
  done: boolean;
  createdAt: Date | undefined;
  modifiedAt: Date | undefined;
  softDeleted: boolean;
}

export interface IMadeTaskObject extends IMakeTask {
  id: string;
  createdAt: Date;
  modifiedAt: Date;
}

export interface IMadeTask {
  get: {
    userId: () => string;
    id: () => string;
    content: () => string;
    done: () => boolean;
    createdAt: () => Date;
    modifiedAt: () => Date;
    softDeleted: () => boolean;
  };
  set: {
    content: (newContent: string) => void;
    done: () => void;
    undone: () => void;
    remove: () => void;
    restore: () => void;
  };
  object: () => IMadeTaskObject;
}
