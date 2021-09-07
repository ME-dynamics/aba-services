import { httpClient } from "aba-node";

import { confirmRequest } from "./confirmRequest";
import { createRequest } from "./createRequest";
import { rejectRequest } from "./rejectRequest";
import { removeRequest } from "./removeRequest";
import { removeCustomer } from "./removeCustomer";
import { retrieveCustomers } from "./retrieveCustomers";
import { retrieveRequests } from "./retrieveRequests";


const app = httpClient({ dev: true });

const customerEndpoint = `/v1/customer`;
const providerEndpoint = "/v1/provider";

app.post(`${providerEndpoint}/requests/confirm`, confirmRequest);
app.post(`${customerEndpoint}/requests`, createRequest);


app.delete(`${providerEndpoint}/requests/reject/:customerId`, rejectRequest);
app.delete(`${providerEndpoint}/customers/:customerId`, removeCustomer);
app.delete(`${customerEndpoint}/requests`, removeRequest);


app.get(`${providerEndpoint}/customers`, retrieveCustomers);
app.get(`${providerEndpoint}/requests`, retrieveRequests);
export async function startServer() {
  try {
    await app.listen(3000);
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
}
