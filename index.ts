import { httpClient } from "aba-node";
import {
  startAuthnzServer,
  initDb as initAuthnzDb,
  initSecret as initAuthnzSecret,
} from "./app/authnz";
import {
  initDb as initStorageDb,
  initPublicBucket,
  startStorageServer,
} from "./app/storage";
const app = httpClient({ dev: true });

export async function startService() {
  try {
    await initAuthnzDb();
    await initAuthnzSecret();
    await initStorageDb();
    await initPublicBucket();
    startAuthnzServer(app);
    startStorageServer(app);
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
