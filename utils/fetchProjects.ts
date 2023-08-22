import { Project } from "./../typings.d";

export const fetchProjects = async () => {
  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_BASE_URL || "https://temitopedavidsite.vercel.app"
    }/api/getProjects`
  );
  const data = await res.json();
  const projects: Project[] = data.project;

  return projects;
};

fetchProjects();
