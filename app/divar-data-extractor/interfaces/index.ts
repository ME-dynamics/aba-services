import { setTimeout } from "timers/promises";
import { adsIdQueue, requestQueue } from "../adapters";
import { processAdsList } from "../usecases";
export async function startDivarDataExtractorServer() {
  requestQueue.process(async (job) => {
    const { type, postId } = job.data;
    if (type === "root") {
      await processAdsList(); // process root ads
    } else if (type === "post") {
      // process post ads
    }
  });
  adsIdQueue.process(async (job) => {
    const { id } = job.data;
    requestQueue.add({ type: "post", postId: id });
  });
  // eslint-disable-next-line no-constant-condition
  while (true) {
    await setTimeout(1000 * 10); // 10 seconds
    requestQueue.add({ type: "root", postId: undefined });
  }
}
