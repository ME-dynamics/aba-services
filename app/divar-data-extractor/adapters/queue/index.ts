import Bull from "bull";

import { buildAddAdsIdsToQueue } from "./addAdsIdsToQueue";

import { adapterTypes } from "../../types";

export const requestQueue = new Bull<adapterTypes.IRequestQueue>("request", {
  limiter: { max: 5, duration: 1000 },
  
});

export const adsIdQueue = new Bull<adapterTypes.IAdsIdsQueue>("adsId");

export const addAdsIdsToQueue = buildAddAdsIdsToQueue({ queue: adsIdQueue });
