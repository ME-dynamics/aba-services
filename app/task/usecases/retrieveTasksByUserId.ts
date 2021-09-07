import { httpResultSuccess, httpResultClientError } from "aba-node";
import { entityTypes, usecaseTypes } from "../types";

export function buildRetrieveTasksByUserId(
  args: usecaseTypes.IBuildRetrieveTasksByUserId
) {
  const { findTasksByUserId } = args;
  const { notFound } = httpResultClientError;
  const { ok } = httpResultSuccess;
  return async function retrieveTasksByUserId(userId: string) {
    const tasksFound = await findTasksByUserId(userId);
    if (!tasksFound) {
      return notFound({ error: "no task found" });
    }
    return ok<entityTypes.IMadeTaskObject[]>({
      payload: tasksFound,
    });
  };
}
