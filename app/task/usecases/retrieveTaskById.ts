import { httpResultClientError, httpResultSuccess } from "aba-node";
import { entityTypes, usecaseTypes } from "../types";

export function buildRetrieveTaskById(
  args: usecaseTypes.IBuildRetrieveTaskById
) {
  const { findTaskById } = args;
  const { notFound } = httpResultClientError;
  const { ok } = httpResultSuccess;
  return async function retrieveTaskById(id: string) {
    const taskFound = await findTaskById(id);
    if (!taskFound || taskFound.softDeleted) {
      return notFound({ error: "task not found" });
    }
    return ok<entityTypes.IMadeTaskObject>({
      payload: taskFound,
    });
  };
}
