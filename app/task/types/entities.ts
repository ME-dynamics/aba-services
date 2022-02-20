export interface IBuildMakeTask {
  uuid: () => string;
}

export interface IMakeTask {
  userId: string;
  providerId: string;
  id: string | undefined;
  content: string;
  done: boolean;
  createdAt: Date | undefined;
  modifiedAt: Date | undefined;
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
  };
  set: {
    content: (newContent: string) => void;
    done: () => void;
    undone: () => void;
  };
  object: () => IMadeTaskObject;
}
