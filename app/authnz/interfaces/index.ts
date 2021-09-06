// start your http, grpc, kafka , etc interface here
import { httpClient } from "aba-node";
import { port, applicationVersion } from "../config";
import { sPasswordlessStart, sPasswordlessVerify, sRefresh } from "../schemas";
import { passwordlessStart } from "./passwordlessStart";
import { passwordlessVerify } from "./passwordlessVerify";
import { retrievePublicKey } from "./retrievePublicKey";
import { refresh } from "./refresh";
import { nanoid } from "nanoid";
const customerEndpoint = `/${applicationVersion}/customer`;
const providerEndpoint = `/${applicationVersion}/provider`;
const adminEndpoint = `/${applicationVersion}/admin`;
const app = httpClient({ dev: true });
app.post(
  `${customerEndpoint}/passwordless/start`,
  { schema: sPasswordlessStart },
  passwordlessStart
);
app.post(
  `${customerEndpoint}/passwordless/verify`,
  { schema: sPasswordlessVerify },
  passwordlessVerify
);
app.post(`${customerEndpoint}/refresh`, { schema: sRefresh }, refresh);

app.get("/v1/public/key", retrievePublicKey);

app.get("/v1", (req, res) => {
  
  
  // console.dir(req.hostname, { depth: null, colors: true });
  // console.dir(req.ip, { depth: null, colors: true });
  res.send({ hello: nanoid(1024) });
});

export async function startServer() {
  try {
    await app.listen(port, "0.0.0.0");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
