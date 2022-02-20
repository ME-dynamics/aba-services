import { httpResult } from "aba-node";
import { beckAnxietyStructure } from "../entities";

export function buildRetrieveBeckAnxiety() {
  const { ok } = httpResult.success;
  return function retrieveBeckAnxiety() {
    return ok({
      payload: beckAnxietyStructure,
    });
  };
}
