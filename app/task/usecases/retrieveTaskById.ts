import { httpResult } from "aba-node";
import { entityTypes, usecaseTypes } from "../types";

export function buildRetrieveTaskById(
  args: usecaseTypes.IBuildRetrieveTaskById
) {
  const { findTaskById } = args;
  const { notFound } = httpResult.clientError;
  const { ok } = httpResult.success;
  return async function retrieveTaskById(id: string) {
    const taskFound = await findTaskById(id);
    if (!taskFound) {
      return notFound({ error: "task not found" });
    }
    return ok<entityTypes.IMadeTaskObject>({
      payload: taskFound,
    });
  };
}
