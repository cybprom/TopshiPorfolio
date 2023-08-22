import { Socials } from "../typings";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity";

export const fetchsocials = async () => {
  const query = groq`
    *[_type =="socials"]
  `;

  const socialsData: Socials[] = await client.fetch(query);
  return socialsData;
};

fetchsocials();
