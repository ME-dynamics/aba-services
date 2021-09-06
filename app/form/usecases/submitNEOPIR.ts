import { httpResultSuccess } from "aba-node";
import { makeNEOPIR, makeFormData } from "../entities";
import { entityTypes, usecaseTypes } from "../types";
export function buildSubmitNEOPIR(args: usecaseTypes.IBuildSubmitNEOPIR) {
  const { insertFormData } = args;
  const { created } = httpResultSuccess;
  function formDataObj(
    info: usecaseTypes.ISubmitNEOPIR
  ): entityTypes.IFormData {
    const { fields, structureId, userId } = info;
    const { aGroup, cGroup, eGroup, nGroup, oGroup, validation, warnings } =
      makeNEOPIR(fields);
    const { a, a1, a2, a3, a4, a5, a6 } = aGroup;
    const { c, c1, c2, c3, c4, c5, c6 } = cGroup;
    const { e, e1, e2, e3, e4, e5, e6 } = eGroup;
    const { n, n1, n2, n3, n4, n5, n6 } = nGroup;
    const { o, o1, o2, o3, o4, o5, o6 } = oGroup;
    return {
      id: undefined,
      userId,
      structureId,
      formName: "NEOPIR",
      fields,
      aggregates: {
        a,
        a1,
        a2,
        a3,
        a4,
        a5,
        a6,
        c,
        c1,
        c2,
        c3,
        c4,
        c5,
        c6,
        e,
        e1,
        e2,
        e3,
        e4,
        e5,
        e6,
        n,
        n1,
        n2,
        n3,
        n4,
        n5,
        n6,
        o,
        o1,
        o2,
        o3,
        o4,
        o5,
        o6,
      },
      interpret: {
        some: "thing",
      },
      warnings,
      validation,
      createdAt: undefined,
      modifiedAt: undefined,
      softDeleted: false,
    };
  }
  return async function submitNEOPIR(info: usecaseTypes.ISubmitNEOPIR) {
    //TODO: should check if structure exists

    const formData = makeFormData(formDataObj(info));
    await insertFormData(formData.object());
    return created<entityTypes.IMadeFormDataObject>({
      payload: formData.object(),
    });
  };
}
