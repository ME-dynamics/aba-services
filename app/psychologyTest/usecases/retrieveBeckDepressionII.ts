import { httpResultSuccess } from "aba-node";
import { beckDepressionIIStructure } from "../entities";

export function buildRetrieveBeckDepressionII() {
  const { ok } = httpResultSuccess;
  return function retrieveBeckDepressionII() {
    return ok({
      payload: beckDepressionIIStructure,
    });
  };
}
