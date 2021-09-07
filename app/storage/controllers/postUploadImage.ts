import { httpResultClientError, auth, types } from "aba-node";
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
  const { badRequest, unauthorized } = httpResultClientError;
  function validate(fileData: controllerTypes.tMultiPartFile) {
    if (!fileData.fields.session) {
      return false;
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { fieldname, value } = fileData.fields.session;
    const keys = Object.keys(fileData.fields);
    if (keys.length < 2 || keys.length > 2) {
      return false;
    }
    if (keys[0] !== "session" || keys[1] !== "imageFile") {
      return false;
    }
    if (fieldname !== "session") {
      return false;
    }
    if (!value || typeof value !== "string") {
      return false;
    }
    return value;
  }
  return async function postUploadImage(
    httpRequest: controllerTypes.tPostUploadImage
  ) {
    const { success, error, payload } = auth(httpRequest, roles);
    if (!success) {
      return error ? error : unauthorized({ error: "unauthorized" });
    }
    const fileData = await httpRequest.file();
    const session = validate(fileData);
    if (session) {
      const result = await uploadImage({
        file: fileData.file,
        userId: payload?.userId || "",
        session,
      });
      return result;
    }
    fileData.file.unpipe();
    return badRequest({ error: "session should exists" });
  };
}
