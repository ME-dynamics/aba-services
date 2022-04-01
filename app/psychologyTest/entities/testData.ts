import { entityTypes } from "../types";

export function buildMakeTestData(args: entityTypes.IBuildTestData) {
  const { uuid } = args;
  return function makeTestData(TestData: entityTypes.ITestData) {
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
    } = TestData;

    const madeTestData: entityTypes.IMadeTestData = {
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
    return madeTestData;
  };
}
