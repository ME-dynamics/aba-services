import { types, buildRouteGenerator } from "aba-node";
import { sGetTests } from "../schemas";
import { retrieveTests } from "./retrieveTests";
import { retrieveTestById } from "./retrieveTestById";
import { submitTest } from "./submitTest";
import { retrieveTestDataById } from "./retrieveTestDataById";
import { retrieveTestHistory } from "./retrieveTestHistory";
import { applicationVersion } from "../config";
export async function startFormServer(app: types.tHttpInstance) {
  const routeGen = buildRouteGenerator({
    service: "tests",
    version: applicationVersion,
  });
  try {
    app.get(routeGen([]), { schema: sGetTests }, retrieveTests);

    app.get(routeGen([":testId"]), retrieveTestById);
    app.post(routeGen([]), submitTest);
    app.get(routeGen(["testResult", ":id", ":userId"]), retrieveTestDataById);
    app.get(routeGen(["testHistory", ":userId"]), retrieveTestHistory);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
