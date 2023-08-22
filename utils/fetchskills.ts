import { Skill } from "../typings";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity";

export const fetchskills = async () => {
  const query = groq`
    *[_type =="skill"]
  `;

  const skillData: Skill[] = await client.fetch(query);
  return skillData;
};
fetchskills();
