import { processAdsList } from "../usecases";

export function buildQueueAdsList() {
  return async function queueAdsList() {
    await processAdsList();
  };
}
