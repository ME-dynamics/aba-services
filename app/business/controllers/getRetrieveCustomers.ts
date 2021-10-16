import { auth, types } from "aba-node"
import { retrieveCustomers } from "../usecases"

import { controllerTypes } from "../types"



export function buildGetRetrieveCustomers(){
    const roles: types.IRoles = {
        customer: false,
        provider: true,
        admin: false,
        accountant: false,
        assistant: false,
        support: false,
    }
    return async function getRetrieveCustomers(httpRequest: controllerTypes.tGetCustomers){
        const {success, error, payload} = auth(httpRequest, roles);
        if(!success) {
            return error;
        }
        const { userId } = payload;
        return await retrieveCustomers(userId);
    }
}