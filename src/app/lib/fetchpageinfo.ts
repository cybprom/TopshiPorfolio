import { client } from "./sanity";

export async function getPageInfo() {
  return client.fetch(`*[_type =="pageInfo"][0]`, { next: { revalidate: 60 } });
}
