import { httpResultClientError } from "aba-node";
import { v4 } from "uuid";
import { controllerTypes } from "../types";
import { uploadImage } from "../usecases";
export function buildPostUploadImage() {
  const { badRequest } = httpResultClientError;
  function validate(fileData: controllerTypes.tMultiPartFile) {
    if (!fileData.fields.session) {
      return false;
    }
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
    const fileData = await httpRequest.file();
    const session = validate(fileData);
    if (session) {
      const result = await uploadImage({
        file: fileData.file,
        userId: v4(),
        session,
      });
      return result;
    }
    fileData.file.unpipe();
    return badRequest({ error: "session should exists" });
  };
}
