import { client } from "./sanity";

export async function getprojects() {
  return client.fetch(`*[_type =="project"]{
      ..., technologies[]->
    }`);
}
