import { types, buildRouteGenerator } from "aba-node";

import { confirmRequest } from "./confirmRequest";
import { createRequest } from "./createRequest";
import { rejectRequest } from "./rejectRequest";
import { removeCustomer } from "./removeCustomer";
import { removeProvider } from "./removeProvider";
import { removeRequest } from "./removeRequest";
import { retrieveCustomers } from "./retrieveCustomers";
import { retrieveProviderRequests } from "./retrieveProviderRequests";
import { retrieveCustomerProviderInfo } from "./retrieveCustomerProviderInfo";
import { retrieveCustomerRequest } from "./retrieveCustomerRequest";
import {
  sConfirmSchema,
  sCreateRequest,
  sRejectRequest,
  sRemoveCustomer,
  sRetrieveCustomers,
  sRetrieveRequests,
  sRemoveRequest,
  sRetrieveCustomerProviderInfo,
  sRetrieveRequestByCustomerId,
  sRemoveProvider,
} from "../schemas";
import { applicationVersion } from "../config";

export function startBusinessServer(app: types.tHttpInstance) {
  const routeGen = buildRouteGenerator({
    service: "business",
    version: applicationVersion,
  });
  app.post(
    routeGen(["requests", "confirm"]),
    { schema: sConfirmSchema },
    confirmRequest
  );
  app.post(routeGen(["requests"]), { schema: sCreateRequest }, createRequest);

  app.delete(
    routeGen(["requests", "reject", ":customerId"]),
    { schema: sRejectRequest },
    rejectRequest
  );
  app.delete(
    routeGen(["customers", ":customerId"]),
    { schema: sRemoveCustomer },
    removeCustomer
  );
  app.delete(
    routeGen(["provider"]),
    { schema: sRemoveProvider },
    removeProvider
  );
  app.delete(routeGen(["requests"]), { schema: sRemoveRequest }, removeRequest);
  app.get(
    routeGen(["customers"]),
    { schema: sRetrieveCustomers },
    retrieveCustomers
  );
  app.get(
    routeGen(["requests", "provider"]),
    { schema: sRetrieveRequests },
    retrieveProviderRequests
  );
  app.get(
    routeGen(["providers"]),
    { schema: sRetrieveCustomerProviderInfo },
    retrieveCustomerProviderInfo
  );
  app.get(
    routeGen(["requests", "customer"]),
    { schema: sRetrieveRequestByCustomerId },
    retrieveCustomerRequest
  );
}
