import { httpResultSuccess } from "aba-node"

import { NEOPIRStructure } from "../entities"


export function buildRetrieveNEOPIR() {
    const { ok } = httpResultSuccess;
    return function retrieveNEOPIR() {
        return ok({
            payload: NEOPIRStructure
        });
    }
}