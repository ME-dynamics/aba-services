import { httpResultSuccess } from "aba-node";

import {
  mbtiStructure,
  beckAnxietyStructure,
  beckDepressionIIStructure,
} from "../entities";

export function buildRetrieveTests() {
  const { ok } = httpResultSuccess;
  const mbti = {
    id: mbtiStructure.id,
    title: mbtiStructure.title,
    description: mbtiStructure.description,
  };
  const beckAnxiety = {
    id: beckAnxietyStructure.id,
    title: beckAnxietyStructure.title,
    description: beckAnxietyStructure.description,
  };
  const beckDepressionII = {
    id: beckDepressionIIStructure.id,
    title: beckDepressionIIStructure.title,
    description: beckDepressionIIStructure.description,
  };
  return function retrieveTests() {
    return ok({
      payload: [mbti, beckAnxiety, beckDepressionII],
    });
  };
}
