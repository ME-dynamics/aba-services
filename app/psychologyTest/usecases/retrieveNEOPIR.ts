import { httpResult } from "aba-node"

import { NEOPIRStructure } from "../entities"


export function buildRetrieveNEOPIR() {
    const { ok } = httpResult.success;
    return function retrieveNEOPIR() {
        return ok({
            payload: NEOPIRStructure
        });
    }
}