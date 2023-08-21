import { pageInfo } from "./../../../typings.d";
import { NextApiResponse, NextApiRequest } from "next";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity";

const query = groq`
  *[_type =="pageInfo"][0]
`;

type Data = {
  pageInfo: pageInfo;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const pageInfo: pageInfo = await client.fetch(query);
  res.status(200).json({ pageInfo });
}
