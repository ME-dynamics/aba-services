import type { Queue } from "bull";
export interface IAdsIdsQueue {
  id: string;
}

export interface IBuildAddAdsIdsToQueue {
  queue: Queue<IAdsIdsQueue>;
}

export interface IRequestQueue {
  type: "root" | "post";
  postId: string | undefined;
}
