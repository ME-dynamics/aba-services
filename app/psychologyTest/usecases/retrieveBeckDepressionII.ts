import { httpResult } from "aba-node";
import { beckDepressionIIStructure } from "../entities";

export function buildRetrieveBeckDepressionII() {
  const { ok } = httpResult.success;
  return function retrieveBeckDepressionII() {
    return ok({
      payload: beckDepressionIIStructure,
    });
  };
}
