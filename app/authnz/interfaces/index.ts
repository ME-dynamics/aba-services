// start your http, grpc, kafka , etc interface here
import { types } from "aba-node";
import { applicationVersion } from "../config";
import {
  sPasswordlessStart,
  sPasswordlessVerify,
  sRefresh,
  sRetrievePublicKey,
  sCreateProvider,
} from "../schemas";
import { passwordlessStart } from "./passwordlessStart";
import { passwordlessVerify } from "./passwordlessVerify";
import { createProvider } from "./createProvider";
import { retrievePublicKey } from "./retrievePublicKey";

import { refresh } from "./refresh";
import { nanoid } from "nanoid";
const customerEndpoint = `/${applicationVersion}/customer`;
const providerEndpoint = `/${applicationVersion}/provider`;
const adminEndpoint = `/${applicationVersion}/admin`;

export function startAuthnzServer(app: types.tHttpInstance) {
  app.post(
    `${customerEndpoint}/passwordless/start`,
    { schema: sPasswordlessStart },
    passwordlessStart
  );
  app.post(
    `${customerEndpoint}/passwordless/verify`,
    { schema: sPasswordlessVerify },
    passwordlessVerify
  );
  app.post(
    `${adminEndpoint}/provider`,
    { schema: sCreateProvider },
    createProvider
  );
  app.post(`${customerEndpoint}/refresh`, { schema: sRefresh }, refresh);

  app.get(
    "/v1/internal/public/key",
    { schema: sRetrievePublicKey },
    retrievePublicKey
  );

  app.get("/v1", (req, res) => {
    // console.dir(req.hostname, { depth: null, colors: true });
    // console.dir(req.ip, { depth: null, colors: true });
    res.send({ hello: nanoid(1024) });
  });
}
