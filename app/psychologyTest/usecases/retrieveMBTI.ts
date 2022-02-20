import { httpResult } from "aba-node";
import { mbtiStructure } from "../entities";

export function buildRetrieveMBTI() {
  const { ok } = httpResult.success;
  return function retrieveMBTI() {
    return ok({
      payload: mbtiStructure,
    });
  };
}
