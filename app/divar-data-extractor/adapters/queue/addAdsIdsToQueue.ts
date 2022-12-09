import type { adapterTypes } from "../../types";

export function buildAddAdsIdsToQueue(
  args: adapterTypes.IBuildAddAdsIdsToQueue
) {
  const { queue } = args;
  return async function addAdIdToQueue(adId: string) {
    await queue.add({ id: adId });
  };
}
