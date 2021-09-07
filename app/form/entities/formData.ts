import { entityTypes } from "../types";

export function buildMakeFormData(args: entityTypes.IBuildFormData) {
  const { uuid } = args;
  return function makeFormData(formData: entityTypes.IFormData) {
    const {
      id = uuid(),
      createdAt = new Date(),
      modifiedAt = new Date(),
      structureId,
      userId,
      formName,
      warnings,
      validation,
    } = formData;
    let { fields, aggregates, interpret, softDeleted } = formData;

    // Setters
    function setFields(newFields: Record<string, number>) {
      fields = newFields;
      modifiedAt.setTime(Date.now());
    }
    function setAggregates(newAgg: Record<string, number>) {
      aggregates = newAgg;
      modifiedAt.setTime(Date.now());
    }
    function setInterpret(newInterpret: Record<string, string>) {
      interpret = newInterpret;
      modifiedAt.setTime(Date.now());
    }
    function remove() {
      softDeleted = true;
      modifiedAt.setTime(Date.now());
    }
    function restore() {
      softDeleted = false;
      modifiedAt.setTime(Date.now());
    }
    const madeFormData: entityTypes.IMadeFormData = {
      get: {
        id: () => id,
        userId: () => userId,
        structureId: () => structureId,
        fields: () => fields,
        aggregates: () => aggregates,
        interpret: () => interpret,
        createdAt: () => createdAt,
        modifiedAt: () => modifiedAt,
        softDeleted: () => softDeleted,
      },
      set: {
        fields: setFields,
        aggregates: setAggregates,
        interpret: setInterpret,
        remove,
        restore,
      },
      object: () => {
        return {
          id,
          userId,
          formName,
          structureId,
          fields,
          aggregates,
          interpret,
          warnings,
          validation,
          createdAt,
          modifiedAt,
          softDeleted,
        };
      },
    };
    return madeFormData;
  };
}
