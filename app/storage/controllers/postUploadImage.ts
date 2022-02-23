import { httpResult, auth, types } from "aba-node";
import { controllerTypes } from "../types";
import { uploadImage } from "../usecases";
export function buildPostUploadImage() {
  const roles: types.IRoles = {
    admin: true,
    provider: true,
    customer: true,
    accountant: true,
    assistant: true,
    support: true,
  };
  const { badRequest, forbidden } = httpResult.clientError;
  function validate(fileData: controllerTypes.tMultiPartFile):
    | {
        access: "private" | "public";
        transform: "profile" | "note";
      }
    | false {
    if (!fileData.fields.access) {
      return false;
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const accessValue = fileData.fields?.access?.value;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const transformValue = fileData.fields?.transform?.value;
    const keys = Object.keys(fileData.fields);
    if (keys.length !== 3) {
      return false;
    }
    if (!accessValue || typeof accessValue !== "string") {
      return false;
    }
    if (!transformValue || typeof transformValue !== "string") {
      return false;
    }
    if (accessValue === "private" && transformValue === "note") {
      return {
        access: "private",
        transform: "note",
      };
    }
    if (accessValue === "public" && transformValue === "profile") {
      return {
        access: "public",
        transform: "profile",
      };
    }
    return false;
  }
  return async function postUploadImage(
    httpRequest: controllerTypes.tPostUploadImage,
    reply: types.tReply
  ) {
    const { success, error, payload } = auth(httpRequest, roles);
    if (!success) {
      return error;
    }
    const fileData = await httpRequest.file();
    fileData.file.on("limit", function onFileLimit() {
      fileData.file.unpipe();
      const { code, error } = forbidden({ error: "reach files limit" });
      reply.code(code);
      reply.send({ error });
    });

    const isValid = validate(fileData);
    if (!isValid) {
      fileData.file.unpipe();
      return badRequest({
        error: "you should define access type and image file",
      });
    }
    const { access, transform } = isValid;
    const { userId } = payload;
    const result = await uploadImage({
      file: fileData.file,
      userId,
      access,
      transform,
    });

    return result;
  };
}
