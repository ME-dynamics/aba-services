import { httpClient } from "aba-node";
import { sCreateUser, sRetrieveUser } from "../schemas";
import { applicationVersion, port } from "../config";

import { retrieveUser } from "./retrieveUser";
import { createUser } from "./createUser";

export const app = httpClient({ dev: true });

const customerEndpoint = `/${applicationVersion}/customer`;
const providerEndpoint = `/${applicationVersion}/provider`;
const adminEndpoint = `/${applicationVersion}/admin`;
const internalEndpoint = `/${applicationVersion}/internal`;

app.get(`${customerEndpoint}/users/`, { schema: sRetrieveUser }, retrieveUser);

app.post(`${internalEndpoint}/users`, { schema: sCreateUser }, createUser);

export async function startServer() {
  try {
    await app.listen(port);
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
}
