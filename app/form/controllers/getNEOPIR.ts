import { retrieveNEOPIR } from "../usecases";

export function buildGetNEOPIR() {
  return function getNEOPIR() {
    return retrieveNEOPIR();
  };
}
