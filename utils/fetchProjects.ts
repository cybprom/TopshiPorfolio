import { Project } from "./../typings.d";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity";

export const fetchProjects = async () => {
  const query = groq`
    *[_type =="project"]{
      ..., technologies[]->
    }
  `;

  const projectData: Project[] = await client.fetch(query);
  return projectData;
};

fetchProjects();
