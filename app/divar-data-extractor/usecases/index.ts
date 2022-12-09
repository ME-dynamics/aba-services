import { addAdsIdsToQueue, fetchDivarRoot } from "../adapters";
import { buildProcessAdsList } from "./processAdsList";

export const processAdsList = buildProcessAdsList({
  addAdsIdsToQueue,
  fetchDivarRoot,
});
