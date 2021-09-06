import { submitFormStruct } from "../usecases";
import { controllerTypes } from "../types";

export function buildPostSubmitFormStruct() {
  return async function postSubmitFormStruct(
    httpRequest: controllerTypes.tPostSubmitFormStruct
  ) {
    const info = httpRequest.body;
    return await submitFormStruct(info);
  };
}
