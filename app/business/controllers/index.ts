import { buildDeleteRejectRequest } from "./deleteRejectRequest";
import { buildDeleteRemoveCustomer } from "./deleteRemoveCustomer";
import { buildDeleteRemoveRequest } from "./deleteRemoveRequest";
import { buildGetRetrieveCustomers } from "./getRetrieveCustomers";
import { buildGetRetrieveRequests } from "./getRetrieveRequests";
import { buildPostConfirmRequest } from "./postConfirmRequest";
import { buildPostCreateRequest } from "./postCreateRequest";
import { buildGetCustomerProviderInfo } from "./getCustomerProviderInfo";

export const deleteRejectRequest = buildDeleteRejectRequest();
export const deleteRemoveCustomer = buildDeleteRemoveCustomer();
export const deleteRemoveRequest = buildDeleteRemoveRequest();
export const getRetrieveCustomers = buildGetRetrieveCustomers();
export const getRetrieveRequests = buildGetRetrieveRequests();
export const postConfirmRequest = buildPostConfirmRequest();
export const postCreateRequest = buildPostCreateRequest();
export const getCustomerProviderInfo = buildGetCustomerProviderInfo();
