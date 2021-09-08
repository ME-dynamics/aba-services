import { types } from "aba-node";
import { Multipart } from "fastify-multipart";
import { ICreateFileSession } from "./usecases";

export type tPostUploadImage = types.tRequest<unknown>;

export type tMultiPartFile = Multipart<true>;

export type tPostFileSession = types.tRequest<{
  Body: ICreateFileSession;
}>;

export interface IGetPrivateImage {
  Params: {
    imageId: string;
  };
}

export type tGetPrivateImage = types.tRequest<IGetPrivateImage>;
