import { types, routeGen } from "aba-node";
import { sNEOPIRStructure } from "../schemas";
import { retrieveNEOPIR } from "./retrieveNEOPIR";
import { applicationVersion } from "../config";
export async function startFormServer(app: types.tHttpInstance) {
  try {
    app.get(
      routeGen({
        version: applicationVersion,
        role: "shared",
        routes: ["form", "neopir"],
      }),
      { schema: sNEOPIRStructure },
      retrieveNEOPIR
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
