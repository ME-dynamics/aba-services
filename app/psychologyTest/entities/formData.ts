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
      errors,
    } = formData;
    let { fields, aggregates, interpret, softDeleted } = formData;

    // Setters
    function setFields(newFields: Record<string, string>) {
      fields = newFields;
      modifiedAt.setTime(Date.now());
    }
    function setAggregates(newAgg: entityTypes.IAggregate[]) {
      aggregates = newAgg;
      modifiedAt.setTime(Date.now());
    }
    function setInterpret(newInterpret: entityTypes.IInterpret[]) {
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
        warnings: () => warnings,
        errors: () => errors,
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
          errors,
          createdAt,
          modifiedAt,
          softDeleted,
        };
      },
    };
    return madeFormData;
  };
}
