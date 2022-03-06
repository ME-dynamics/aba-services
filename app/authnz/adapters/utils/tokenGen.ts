import { adaptersTypes } from "../../types";

export function buildTokenGen(args: adaptersTypes.IBuildTokenGen) {
  const { hash, nanoid, daysFromNow } = args;
  const errorPath = "authnz, adapters, utils, token gen";
  return async function tokenGen(
    jwt: string
  ): Promise<adaptersTypes.ITokenGenResult> {
    const hashedJwt = await hash(jwt);
    const refreshToken = nanoid(128);
    const hashedRefreshToken = await hash(refreshToken);
    const refreshExpiresAt = daysFromNow(180, errorPath);
    return {
      hashedJwt,
      refreshToken,
      hashedRefreshToken,
      refreshExpiresAt,
    };
  };
}
