import { client } from "./sanity";

export async function getprojects() {
  return client.fetch(
    `*[_type =="project"]{
      ..., technologies[]->
    }`,
    { next: { revalidate: 60 } }
  );
}
