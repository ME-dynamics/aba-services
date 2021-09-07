import { httpClient } from "aba-node";
import { sSubmitFormStruct } from "../schemas";
import { submitFormStruct } from "./submitFormStruct";

const app = httpClient({ dev: true });

app.post("/v1/form/structure", { schema: sSubmitFormStruct }, submitFormStruct);

export async function startServer() {
  try {
    await app.listen(3000, "0.0.0.0");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
