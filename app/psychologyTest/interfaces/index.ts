import { types, routeGen } from "aba-node";
import {
  sSubmitMbti,
  sGetMbti,
  sGetBeckAnxiety,
  sGetBeckDepressionII,
  sGetTests,
} from "../schemas";
// import { retrieveNEOPIR } from "./retrieveNEOPIR";
import { retrieveTests } from "./retrieveTests";
import { retrieveBeckAnxiety } from "./retrieveBeckAnxiety";
import { retrieveBeckDepressionII } from "./retrieveBeckDepressionII";
import { retrieveMBTI } from "./retrieveMbti";
import { createMbti } from "./createMbti";
import { retrieveFormData } from "./retrieveFormData";
import { applicationVersion } from "../config";
export async function startFormServer(app: types.tHttpInstance) {
  try {
    // app.get(
    //   routeGen({
    //     version: applicationVersion,
    //     role: "shared",
    //     routes: ["tests", "neopir"],
    //   }),
    //   { schema: sNEOPIRStructure },
    //   retrieveNEOPIR
    // );
    app.get(
      routeGen({
        version: applicationVersion,
        role: "shared",
        routes: ["tests"],
      }),
      { schema: sGetTests },
      retrieveTests
    );
    app.get(
      routeGen({
        version: applicationVersion,
        role: "shared",
        routes: ["tests", "beckAnxiety"],
      }),
      { schema: sGetBeckAnxiety },
      retrieveBeckAnxiety
    );
    app.get(
      routeGen({
        version: applicationVersion,
        role: "shared",
        routes: ["tests", "beckDepressionII"],
      }),
      { schema: sGetBeckDepressionII },
      retrieveBeckDepressionII
    );
    app.get(
      routeGen({
        version: applicationVersion,
        role: "shared",
        routes: ["tests", "mbti"],
      }),
      { schema: sGetMbti },
      retrieveMBTI
    );
    app.post(
      routeGen({
        version: applicationVersion,
        role: "shared",
        routes: ["tests", "mbti"],
      }),
      { schema: sSubmitMbti },
      createMbti
    );
    app.get(
      routeGen({
        version: applicationVersion,
        routes: ["formData", ":id"],
        role: "shared",
      }),
      retrieveFormData
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
