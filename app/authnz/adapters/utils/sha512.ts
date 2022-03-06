import { createHash } from "crypto";

export function sha512(value: string): string {
  const sha = createHash("sha512");
  sha.update(value);
  return sha.digest("hex");
}
