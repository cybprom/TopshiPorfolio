import { client } from "./sanity";

export async function getExperience() {
  return client.fetch(`*[_type =="Experience"]{
      ..., technologies[]->
    }`);
}
