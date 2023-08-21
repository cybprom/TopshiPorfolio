import { Experience } from "../../../typings";
import { NextApiResponse, NextApiRequest } from "next";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity";

const query = groq`
  *[_type =="Experience"]{
   ..., technologies[]->
 }
`;

type Data = {
  experience: Experience[];
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const experience: Experience[] = await client.fetch(query);
  res.status(200).json({ experience });
}
