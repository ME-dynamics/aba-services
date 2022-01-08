import { httpResultSuccess } from "aba-node";
import { beckAnxietyStructure } from "../entities";

export function buildRetrieveBeckAnxiety() {
  const { ok } = httpResultSuccess;
  return function retrieveBeckAnxiety() {
    return ok({
      payload: beckAnxietyStructure,
    });
  };
}
