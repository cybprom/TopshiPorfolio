import { pageInfo } from "./../typings";

import { groq } from "next-sanity";
import { client } from "@/lib/sanity";

export const fetchPageInfo = async () => {
  const query = groq`
    *[_type =="pageInfo"][0]
  `;

  const pageInfoData: pageInfo = await client.fetch(query);

  return pageInfoData;
};
