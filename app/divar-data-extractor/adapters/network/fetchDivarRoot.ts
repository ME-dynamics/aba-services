import { request } from "undici";

export async function fetchDivarRoot() {
  // qom id is 8
  // coordinator will be used later to assign each data extractor with cities to fetch
  const { statusCode, body } = await request(
    " https://api.divar.ir/v8/web-search/8/ROOT",
    {
      method: "POST",
      body: JSON.stringify({
        json_schema: {
          category: {
            value: "ROOT",
          },
          cities: ["8"],
        },
        "last-post-date": 1670581329252131,
      }),
    }
  );
  if (statusCode < 200 || statusCode > 299) {
    return undefined;
  }
  const data = await body.json();
  // console.log({ data });

  return data;
}
