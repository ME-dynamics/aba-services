import { types } from "aba-node";
import { sNEOPIRStructure } from "../schemas";

import { retrieveNEOPIR } from "./retrieveNEOPIR";

export async function startFormServer(app: types.tHttpInstance) {
  try {
    app.get("/v1/form/neopir", { schema: sNEOPIRStructure }, retrieveNEOPIR);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
