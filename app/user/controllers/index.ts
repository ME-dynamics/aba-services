import { fetchCustomerProvider } from "../adapters";
import { buildGetUser } from "./getUser";
import { buildPostCreateUser } from "./postCreateUser";

export const getUser = buildGetUser({ fetchCustomerProvider });
export const postCreateUser = buildPostCreateUser();
