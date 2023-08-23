import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: "xu1ilqgm",
  dataset: "production",
  apiVersion: "2023-08-23",
  useCdn: true,
});
export async function getPageInfo() {
  return client.fetch(groq`*[_type =="pageInfo"][0]`);
}
