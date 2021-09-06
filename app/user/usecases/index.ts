import { findUserById, findUserByPhoneNumber, insertUser } from "../adapters"

import { buildCreateUser } from "./createUser";
import { buildRetrieveUser } from "./retrieveUser";



export const retrieveUser = buildRetrieveUser({findUserById})



export const createUser = buildCreateUser({findUserByPhoneNumber, insertUser});
