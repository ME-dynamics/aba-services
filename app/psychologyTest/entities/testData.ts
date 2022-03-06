import { entityTypes } from "../types";

export function buildMakeTestData(args: entityTypes.IBuildTestData) {
  const { uuid } = args;
  return function makeFormData(formData: entityTypes.ITestData) {
    const {
      id = uuid(),
      createdAt = new Date(),
      modifiedAt = new Date(),
      structureId,
      userId,
      shortName,
      title,
      results,
      resultSummary,
      fields,
    } = formData;

    const madeFormData: entityTypes.IMadeTestData = {
      get: {
        id: () => id,
        userId: () => userId,
        shortName: () => shortName,
        structureId: () => structureId,
        fields: () => fields,
        results: () => results,
        createdAt: () => createdAt,
        modifiedAt: () => modifiedAt,
      },
      object: () => {
        return {
          id,
          userId,
          structureId,
          shortName,
          title,
          fields,
          results,
          resultSummary,
          createdAt,
          modifiedAt,
        };
      },
    };
    return madeFormData;
  };
}
