import { httpResultSuccess } from "aba-node";
import { mbtiStructure } from "../entities";

export function buildRetrieveMBTI() {
  const { ok } = httpResultSuccess;
  return function retrieveMBTI() {
    return ok({
      payload: mbtiStructure,
    });
  };
}
