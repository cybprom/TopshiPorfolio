import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import experience from "./sanity/schemas/experience";
import skill from "./sanity/schemas/skills";
import project from "./sanity/schemas/project";
import socials from "./sanity/schemas/socials";
import pageInfo from "./sanity/schemas/pageInfo";

const config = defineConfig({
  projectId: "xu1ilqgm",
  dataset: "production",
  title: "my portfolio website",
  apiVersion: "2023-08-23",
  basePath: "/Studio",
  plugins: [deskTool()],
  schema: { types: [experience, skill, project, socials, pageInfo] },
});

export default config;
