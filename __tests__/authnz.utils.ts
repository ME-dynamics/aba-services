import { sha512 } from "../app/authnz/adapters/utils";

describe("authnz utils", () => {
  it("should return sha512 correct hash", () => {
    const value = "value";
    const hash =
      "ec2c83edecb60304d154ebdb85bdfaf61a92bd142e71c4f7b25a15b9cb5f3c0ae301cfb3569cf240e4470031385348bc296d8d99d09e06b26f09591a97527296";
    const sha = sha512(value);
    expect(sha).toBe(hash);
  });
});
