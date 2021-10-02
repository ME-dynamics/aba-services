// start your http, grpc, kafka , etc interface here
import { types, routeGen } from "aba-node";
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
  app.post(
    routeGen({
      version: applicationVersion,
      role: "shared",
      routes: ["passwordless", "start"],
    }),
    { schema: sPasswordlessStart },
    passwordlessStart
  );
  app.post(
    routeGen({
      version: applicationVersion,
      role: "shared",
      routes: ["passwordless", "verify"],
    }),
    { schema: sPasswordlessVerify },
    passwordlessVerify
  );
  app.post(
    routeGen({
      version: applicationVersion,
      role: "admin",
      routes: ["provider"],
    }),
    { schema: sCreateProvider },
    createProvider
  );
  app.post(
    routeGen({
      version: applicationVersion,
      role: "shared",
      routes: ["refresh"],
    }),
    { schema: sRefresh },
    refresh
  );

  app.get(
    routeGen({
      version: "v1",
      role: "internal",
      routes: ["jwt", "key", "public"],
    }),
    { schema: sRetrievePublicKey },
    retrievePublicKey
  );
}
