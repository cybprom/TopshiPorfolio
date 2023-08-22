import { Experience } from "./../typings.d";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity";

export const fetchExperience = async () => {
  const query = groq`
    *[_type =="Experience"]{
      ..., technologies[]->
    }
  `;

  const experienceData: Experience[] = await client.fetch(query);

  return experienceData;
};
