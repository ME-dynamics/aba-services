import { httpClient } from "aba-node";
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
import { initDb as initFormDb, startFormServer } from "./app/form";
import { initDb as initNoteDb, startNoteServer } from "./app/note";
import { initDb as initUserDb, startUserServer } from "./app/user";
import { initDb as initTaskDb, startTaskServer } from "./app/task";
const app = httpClient({ logger: true });

export async function startService() {
  try {
    await Promise.all([
      initAuthnzDb(),
      initAuthnzSecret(),
      initStorageDb(),
      initPublicBucket(),
      initBusinessDb(),
      initFormDb(),
      initNoteDb(),
      initUserDb(),
      initTaskDb(),
    ]);
    await initAdmin();
    startAuthnzServer(app);
    startStorageServer(app);
    startBusinessServer(app);
    startFormServer(app);
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
