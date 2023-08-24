import { createClient } from "next-sanity";

const projectId = "xu1ilqgm";
const dataset = "production";
const apiVersion = "2023-08-24";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});
