import { httpResultSuccess } from "aba-node";
import { makeFormStructure } from "../entities";
import { entityTypes, usecaseTypes } from "../types";

export function buildSubmitFormStruct(
  args: usecaseTypes.IBuildSubmitFormStructure
) {
  const { insertFormStructure } = args;
  const { created } = httpResultSuccess;
  function formStructObj(
    info: usecaseTypes.ISubmitFormStructure
  ): entityTypes.IFormStructure {
    const { title, description, fields } = info;
    return {
      id: undefined,
      title,
      description,
      fields,
      createdAt: undefined,
      modifiedAt: undefined,
      softDeleted: false,
    };
  }
  return async function submitFormStruct(
    info: usecaseTypes.ISubmitFormStructure
  ) {
    const formStructure = makeFormStructure(formStructObj(info));
    await insertFormStructure(formStructure.object());
    console.dir(formStructure.get.fields(), {
      depth: null,
      colors: true,
    });

    return created<entityTypes.IMadeFormStructureObject>({
      payload: formStructure.object(),
    });
  };
}
