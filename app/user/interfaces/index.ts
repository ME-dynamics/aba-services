import { types, buildRouteGenerator } from "aba-node";
import { sRetrieveUser, sUpdateUser, sRetrieveProviders } from "../schemas";
import { applicationVersion } from "../config";

import { retrieveUser } from "./retrieveUser";
import { retrieveProviders } from "./retrieveProviders";
import { updateUser } from "./updateUser";
import { createPatient } from "./createPatient";
import { retrievePatient } from "./retrievePatient";

export function startUserServer(app: types.tHttpInstance) {
  const routeGen = buildRouteGenerator({
    service: "users",
    version: applicationVersion,
  });
  app.get(routeGen([":id"]), { schema: sRetrieveUser }, retrieveUser);
  app.get(
    routeGen(["providers"]),
    { schema: sRetrieveProviders },
    retrieveProviders
  );
  app.get(routeGen(["patients", ":id"]), retrievePatient);

  app.put(routeGen([":id"]), { schema: sUpdateUser }, updateUser);
  app.post(routeGen(["patients", ":id"]), createPatient);
}
