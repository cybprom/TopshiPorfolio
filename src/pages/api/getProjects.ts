import { Project } from "./../../../typings.d";
import { NextApiResponse, NextApiRequest } from "next";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity";

const query = groq`
  *[_type =="project"]{
   ..., technologies[]->
 }
`;

type Data = {
  project: Project[];
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const project: Project[] = await client.fetch(query);
  res.status(200).json({ project });
}
