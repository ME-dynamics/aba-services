// start your http, grpc, kafka , etc interface here
import { types, buildRouteGenerator } from "aba-node";
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

export function startAuthnzServer(app: types.tHttpInstance) {
  const routeGen = buildRouteGenerator({ service: "authnz", version: applicationVersion });
  app.post(
    routeGen(["passwordless", "start"]),
    { schema: sPasswordlessStart },
    passwordlessStart
  );
  app.post(
    routeGen(["passwordless", "verify"]),
    { schema: sPasswordlessVerify },
    passwordlessVerify
  );
  app.post(
    routeGen(["provider"]),
    { schema: sCreateProvider },
    createProvider
  );
  app.post(
    routeGen(["refresh"]),
    { schema: sRefresh },
    refresh
  );

  app.get(
    routeGen(["jwt", "key", "public"]),
    { schema: sRetrievePublicKey },
    retrievePublicKey
  );
}
