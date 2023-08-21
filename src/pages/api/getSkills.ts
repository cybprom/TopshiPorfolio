import { NextApiResponse, NextApiRequest } from "next";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity";
import { Skill } from "../../../typings";

const query = groq`
 *[_type =="skill"]
`;

type Data = {
  skill: Skill[];
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const skill: Skill[] = await client.fetch(query);
  res.status(200).json({ skill });
}
