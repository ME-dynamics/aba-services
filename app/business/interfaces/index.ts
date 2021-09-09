import { httpClient } from "aba-node";

import { confirmRequest } from "./confirmRequest";
import { createRequest } from "./createRequest";
import { rejectRequest } from "./rejectRequest";
import { removeRequest } from "./removeRequest";
import { removeCustomer } from "./removeCustomer";
import { retrieveCustomers } from "./retrieveCustomers";
import { retrieveRequests } from "./retrieveRequests";
import {
  sConfirmSchema,
  sCreateRequest,
  sRejectRequest,
  sRemoveCustomer,
  sRemoveRequest,
  sRetrieveCustomers,
  sRetrieveRequests,
} from "../schemas";

const app = httpClient({ dev: true });

const customerEndpoint = `/v1/customer`;
const providerEndpoint = "/v1/provider";

app.post(
  `${providerEndpoint}/requests/confirm`,
  { schema: sConfirmSchema },
  confirmRequest
);
app.post(
  `${customerEndpoint}/requests`,
  { schema: sCreateRequest },
  createRequest
);

app.delete(
  `${providerEndpoint}/requests/reject/:customerId`,
  { schema: sRejectRequest },
  rejectRequest
);
app.delete(
  `${providerEndpoint}/customers/:customerId`,
  { schema: sRemoveCustomer },
  removeCustomer
);
app.delete(
  `${customerEndpoint}/requests`,
  { schema: sRemoveRequest },
  removeRequest
);

app.get(
  `${providerEndpoint}/customers`,
  { schema: sRetrieveCustomers },
  retrieveCustomers
);
app.get(
  `${providerEndpoint}/requests`,
  { schema: sRetrieveRequests },
  retrieveRequests
);
export async function startServer() {
  try {
    await app.listen(3000);
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
}
