import { httpClient } from "aba-node";
import {
  startAuthnzServer,
  initDb as initAuthnzDb,
  initSecret as initAuthnzSecret,
  initAdmin,
} from "./app/authnz";
const app = httpClient({ dev: true });

export async function startService() {
  try {
    await initAuthnzDb();
    await initAuthnzSecret();
    await initAdmin();
    startAuthnzServer(app);
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
