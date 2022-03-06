import { httpResult } from "aba-node";
import { entityTypes, usecaseTypes } from "../types";

export function buildRetrieveTasksByUserId(
  args: usecaseTypes.IBuildRetrieveTasksByUserId
) {
  const { findTasksByUserId } = args;
  const { notFound } = httpResult.clientError;
  const { ok } = httpResult.success;
  return async function retrieveTasksByUserId(
    info: usecaseTypes.IRetrieveTasksByUserId
  ) {
    const { userId, providerId } = info;
    const tasksFound = await findTasksByUserId({ userId, providerId });
    if (!tasksFound) {
      return notFound({ error: "no task found" });
    }
    return ok<entityTypes.IMadeTaskObject[]>({
      payload: tasksFound,
    });
  };
}
