import { httpResultSuccess } from "aba-node";
import { makeMBTI, makeFormData } from "../entities";

import { entityTypes, usecaseTypes } from "../types";

export function buildSubmitMBTI(args: usecaseTypes.IBuildSubmitMBTI) {
  const { insertFormData } = args;
  const { created } = httpResultSuccess;
  function formDataInput(
    info: usecaseTypes.ISubmitMBTI
  ): entityTypes.IFormData {
    const { fields, userId } = info;
    const { aggregates, interpret } = makeMBTI(fields);
    return {
      id: undefined,
      userId,
      structureId: "MBTI",
      formName: "MBTI",
      fields,
      aggregates,
      interpret,
      warnings: [],
      errors: [],
      createdAt: undefined,
      modifiedAt: undefined,
      softDeleted: false,
    };
  }
  return async function submitMBTI(info: usecaseTypes.ISubmitMBTI) {
    const formData = makeFormData(formDataInput(info));
    await insertFormData(formData.object());
    return created<entityTypes.IMadeFormDataObject>({
      payload: formData.object(),
    });
  };
}
