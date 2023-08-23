import { createClient, groq } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "xu1ilqgm",
  dataset: "production",
  apiVersion: "2023-08-23",
  useCdn: true,
});
export async function getPageInfo() {
  return client.fetch(groq`*[_type =="pageInfo"][0]`);
}

const builder = imageUrlBuilder(client);

export function urlfor(source: any) {
  return builder.image(source);
}
