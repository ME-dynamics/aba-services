import { httpClient } from "aba-node";
import FastifyCors from "fastify-cors";
import FastifyCookie from "fastify-cookie";
import {
  startAuthnzServer,
  initDb as initAuthnzDb,
  initSecret as initAuthnzSecret,
  initAdmin,
} from "./app/authnz";
import {
  initDb as initStorageDb,
  initPublicBucket,
  startStorageServer,
} from "./app/storage";
import { initDb as initBusinessDb, startBusinessServer } from "./app/business";
import { initDb as initTestDb, startTestServer } from "./app/psychologyTest";
import { initDb as initNoteDb, startNoteServer } from "./app/note";
import { initDb as initUserDb, startUserServer } from "./app/user";
import { initDb as initTaskDb, startTaskServer } from "./app/task";
import {
  initDb as initNotificationDb,
  retrieveSmsirToken,
} from "./app/notification";
const app = httpClient({ logger: true });
app.register(FastifyCors, {
  origin: process.env.NODE_ENV === "production" ? "https://taskyn.ir" : "*", // TODO: use server url from env here
  // credentials: true,
});
app.register(FastifyCookie);
export async function startService() {
  try {
    await Promise.all([
      initAuthnzDb(),
      initStorageDb(),
      initPublicBucket(),
      initBusinessDb(),
      initTestDb(),
      initNoteDb(),
      initUserDb(),
      initTaskDb(),
      initNotificationDb(),
    ]);
    await Promise.all([initAdmin(), initAuthnzSecret(), retrieveSmsirToken()]);
    startAuthnzServer(app);
    startStorageServer(app);
    startBusinessServer(app);
    startTestServer(app);
    startNoteServer(app);
    startTaskServer(app);
    startUserServer(app);
    await app.listen(3000, "0.0.0.0");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

startService().catch((err) => {
  console.log(err);
  process.exit(1);
});

async function closeGracefully(signal: NodeJS.Signals) {
  console.log({ signal });
  await app.close();
  process.exit();
}
process.on("SIGINT", closeGracefully);
