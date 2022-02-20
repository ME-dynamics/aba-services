import { types, buildRouteGenerator } from "aba-node";
import {
  sSubmitMbti,
  sGetMbti,
  sGetBeckAnxiety,
  sGetBeckDepressionII,
  sGetTests,
  sNEOPIRStructure,
} from "../schemas";
// import { retrieveNEOPIR } from "./retrieveNEOPIR";
import { retrieveTests } from "./retrieveTests";
import { retrieveBeckAnxiety } from "./retrieveBeckAnxiety";
import { retrieveBeckDepressionII } from "./retrieveBeckDepressionII";
import { retrieveMBTI } from "./retrieveMbti";
import { createMbti } from "./createMbti";
import { retrieveTestDataById } from "./retrieveTestDataById";
import { retrieveTestsData } from "./retrieveTestsData";
import { applicationVersion } from "../config";
export async function startFormServer(app: types.tHttpInstance) {
  const routeGen = buildRouteGenerator({
    service: "tests",
    version: applicationVersion,
  });
  try {
    app.get(routeGen(["tests"]), { schema: sGetTests }, retrieveTests);
    app.get(
      routeGen(["tests", "beckAnxiety"]),
      { schema: sGetBeckAnxiety },
      retrieveBeckAnxiety
    );
    app.get(
      routeGen(["tests", "beckDepressionII"]),
      { schema: sGetBeckDepressionII },
      retrieveBeckDepressionII
    );
    app.get(routeGen(["tests", "mbti"]), { schema: sGetMbti }, retrieveMBTI);
    app.post(routeGen(["tests", "mbti"]), { schema: sSubmitMbti }, createMbti);
    app.get(routeGen(["testData", ":id", ":userId"]), retrieveTestDataById);
    app.get(routeGen(["testsData", ":userId"]), retrieveTestsData);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
