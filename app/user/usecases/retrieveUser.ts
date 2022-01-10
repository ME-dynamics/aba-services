import { httpResultSuccess, httpResultClientError } from "aba-node";
import { usecaseTypes, entityTypes } from "../types";

export function buildRetrieveUser(args: usecaseTypes.IBuildRetrieveUser) {
  const { findUserById } = args;
  const { notFound } = httpResultClientError;
  const { ok } = httpResultSuccess;
  return async function retrieveUser(id: string) {
    const user = await findUserById(id);

    if (!user || user.softDeleted) {
      return notFound({ error: "user not found" });
    }

    return ok<entityTypes.IMadeUserObject>({
      payload: user,
    });
  };
}
