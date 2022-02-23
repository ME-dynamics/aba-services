import { httpResult } from "aba-node";
import { usecaseTypes, entityTypes } from "../types";

export function buildRetrieveUser(args: usecaseTypes.IBuildRetrieveUser) {
  const { findUserById } = args;
  const { notFound } = httpResult.clientError;
  const { ok } = httpResult.success;
  return async function retrieveUser(id: string) {
    const user = await findUserById(id);

    if (!user) {
      return notFound({ error: "user not found" });
    }

    return ok<entityTypes.IMadeUserObject>({
      payload: user,
    });
  };
}
