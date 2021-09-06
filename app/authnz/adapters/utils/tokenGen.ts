import { IBuildTokenGen, ITokenGenResult } from "../../types";

export function buildTokenGen(args: IBuildTokenGen) {
  const { hash, nanoid, daysFromNow, minutesFromNow } = args;
  const errorPath = "authnz, adapters, utils, token gen";
  return async function tokenGen(jwt: string): Promise<ITokenGenResult> {
    const hashedJwt = await hash(jwt);
    const refreshToken = nanoid(64);
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
