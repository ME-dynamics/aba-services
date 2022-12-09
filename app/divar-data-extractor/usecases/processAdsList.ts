import type { usecaseTypes } from "../types";

export function buildProcessAdsList(args: usecaseTypes.IBuildProcessAdsList) {
  const { fetchDivarRoot, addAdsIdsToQueue } = args;
  function processList(list: any): string[] | undefined {
    if (typeof list !== "object") {
      // log the list is not an object
      console.log("list is not an object", list);
      return;
    }
    const postList = list.web_widgets?.post_list;
    if (!postList && !Array.isArray(postList)) {
      // log the postList is not found
      console.log("postList is not found", postList);
      return;
    }
    const postIds: string[] = [];
    for (let index = 0; index < postList.length; index++) {
      const post = postList[index];
      const postId = post.data?.token;
      if (typeof postId !== "string") {
        // log the postId is not a string
        console.log("postId is not a string", postId);
        continue;
      }
      postIds.push(postId);
    }
    return postIds;
  }
  return async function processAdsList() {
    const adsList = await fetchDivarRoot();
    // save this list to the database
    // extract last post time from the list
    const postIds = processList(adsList);
    if (!postIds) {
      return;
    }
    console.log({ postIds });

    for (let index = 0; index < postIds.length; index++) {
      const postId = postIds[index];
      await addAdsIdsToQueue(postId);
    }
  };
}
