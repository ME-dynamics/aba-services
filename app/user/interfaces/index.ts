import { types, routeGen } from "aba-node";
import { sCreateUser, sRetrieveUser } from "../schemas";
import { applicationVersion } from "../config";

import { retrieveUser } from "./retrieveUser";
import { createUser } from "./createUser";


export function startServer(app: types.tHttpInstance) {
  app.get(
    routeGen({
      version: applicationVersion,
      role: "customer",
      routes: ["users"],
    }),
    { schema: sRetrieveUser },
    retrieveUser
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
