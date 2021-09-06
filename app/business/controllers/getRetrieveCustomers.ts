import { retrieveCustomers } from "../usecases"




export function buildGetRetrieveCustomers(){
    return async function getRetrieveCustomers(){
        return await retrieveCustomers("b44b2952-800f-48d7-9ea3-7b8b52fdab9f");
    }
}