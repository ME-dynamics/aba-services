import { buildDeleteRejectRequest } from "./deleteRejectRequest";
import { buildDeleteCustomer } from "./deleteCustomer";
import { buildDeleteRequest } from "./deleteRequest"
import { buildGetCustomers } from "./getCustomers";
import { buildGetRequests } from "./getRequests";
import { buildPostConfirmRequest } from "./postConfirmRequest";
import { buildPostCreateRequest } from "./postCreateRequest";
import { buildGetCustomerProviderInfo } from "./getCustomerProviderInfo";

export const deleteRejectRequest = buildDeleteRejectRequest();
export const deleteRequest = buildDeleteRequest();
export const deleteCustomer = buildDeleteCustomer();
export const getCustomers = buildGetCustomers();
export const getRequests = buildGetRequests();
export const postConfirmRequest = buildPostConfirmRequest();
export const postCreateRequest = buildPostCreateRequest();
export const getCustomerProviderInfo = buildGetCustomerProviderInfo();
