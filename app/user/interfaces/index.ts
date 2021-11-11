import { types, routeGen } from "aba-node";
import { sRetrieveUser, sUpdateUser, sRetrieveProviders } from "../schemas";
import { applicationVersion } from "../config";

import { retrieveUser } from "./retrieveUser";
import { retrieveProviders } from "./retrieveProviders";
import { updateUser } from "./updateUser";
import { createPatient } from "./createPatient";
import { retrievePatient } from "./retrievePatient";

export function startUserServer(app: types.tHttpInstance) {
  app.get(
    routeGen({
      version: applicationVersion,
      role: "shared",
      routes: ["users"],
    }),
    { schema: sRetrieveUser },
    retrieveUser
  );
  app.get(
    routeGen({
      version: applicationVersion,
      role: "shared",
      routes: ["users", "providers"],
    }),
    { schema: sRetrieveProviders },
    retrieveProviders
  );
  app.put(
    routeGen({
      version: applicationVersion,
      role: "shared",
      routes: ["users"],
    }),
    { schema: sUpdateUser },
    updateUser
  );
  app.post(
    routeGen({
      version: applicationVersion,
      role: "shared",
      routes: ["patients"],
    }),
    createPatient
  );
  app.get(
    routeGen({
      version: applicationVersion,
      role: "shared",
      routes: ["patients"],
    }),
    retrievePatient
  );
  // app.post(
  //   routeGen({
  //     version: applicationVersion,
  //     role: "internal",
  //     routes: ["users"],
  //   }),
  //   { schema: sCreateUser },
  //   createUser
  // );
}
