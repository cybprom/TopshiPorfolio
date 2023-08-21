import { NextApiResponse, NextApiRequest } from "next";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity";
import { Socials } from "../../../typings";

const query = groq`
 *[_type =="socials"]
`;

type Data = {
  socials: Socials[];
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const socials: Socials[] = await client.fetch(query);
  res.status(200).json({ socials });
}
