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
import { initDb as initUserDb } from "./app/user";
const app = httpClient({ logger: true });

export async function startService() {
  try {
    await Promise.all([
      await initAuthnzDb(),
      await initAuthnzSecret(),
      await initAdmin(),
      await initStorageDb(),
      await initPublicBucket(),
      await initBusinessDb(),
      await initFormDb(),
      await initNoteDb(),
      await initUserDb(),
    ]);
    startAuthnzServer(app);
    startStorageServer(app);
    startBusinessServer(app);
    startFormServer(app);
    startNoteServer(app);
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
