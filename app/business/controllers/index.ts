import { buildDeleteRejectRequest } from "./deleteRejectRequest";
import { buildDeleteCustomer } from "./deleteCustomer";
import { buildDeleteRequest } from "./deleteRequest";
import { buildDeleteProvider } from "./deleteProvider";
import { buildGetCustomers } from "./getCustomers";
import { buildGetProviderRequests } from "./getProviderRequests";
import { buildGetCustomerRequest } from "./getCustomerRequest";
import { buildPostConfirmRequest } from "./postConfirmRequest";
import { buildPostCreateRequest } from "./postCreateRequest";
import { buildGetCustomerProviderInfo } from "./getCustomerProviderInfo";

export const deleteRejectRequest = buildDeleteRejectRequest();
export const deleteRequest = buildDeleteRequest();
export const deleteCustomer = buildDeleteCustomer();
export const deleteProvider = buildDeleteProvider()
export const getCustomers = buildGetCustomers();
export const getProviderRequests = buildGetProviderRequests();
export const getCustomerRequest = buildGetCustomerRequest();
export const postConfirmRequest = buildPostConfirmRequest();
export const postCreateRequest = buildPostCreateRequest();
export const getCustomerProviderInfo = buildGetCustomerProviderInfo();
