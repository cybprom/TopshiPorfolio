import { Project } from "./../typings.d";

export const fetchProjects = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`
  );
  const data = await res.json();
  const projects: Project[] = data.project;
  console.log(projects);
  return projects;
};

fetchProjects();