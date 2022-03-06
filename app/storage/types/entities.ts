export interface IBuildMakeFileSession {
  nanoid: (size: number) => string;
}

export interface IMakeFileSession {
  session: string | undefined;
  secret: string | undefined;
  userId: string;
  businessId: string;
  access: "private" | "public";
  countLimit: number;
  sizeLimit: number;
  createdAt: Date | undefined;
  modifiedAt: Date | undefined;
}

export interface IMadeFileSessionObject extends IMakeFileSession {
  session: string;
  secret: string;
  createdAt: Date;
  modifiedAt: Date;
}
export interface IMadeFileSession {
  get: {
    session: () => string;
    secret: () => string;
    userId: () => string;
    businessId: () => string | undefined;
    access: () => "private" | "public";
    countLimit: () => number;
    sizeLimit: () => number;
    createdAt: () => Date;
    modifiedAt: () => Date;
    softDeleted: () => boolean;
  };
  set: {
    remove: () => void;
    restore: () => void;
  };
  object: () => IMadeFileSessionObject;
}

// image

export interface IBuildMakeImage {
  uuid: () => string;
  serverUrl: string;
}

export interface IMakeImage {
  userId: string;
  id: string | undefined;
  access: "public" | "private";
  url: string | undefined;
  createdAt: Date | undefined;
  modifiedAt: Date | undefined;
}

export interface IMadeImageObject extends IMakeImage {
  id: string;
  createdAt: Date;
  modifiedAt: Date;
}

export interface IMadeImage {
  get: {
    userId: () => string;
    id: () => string;
    access: () => "public" | "private";
    url: () => string | undefined;
    createdAt: () => Date;
    modifiedAt: () => Date;
  };
  object: () => IMadeImageObject;
}
