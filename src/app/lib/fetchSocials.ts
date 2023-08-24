import { client } from "./sanity";

export async function getsocials() {
  return client.fetch(`*[_type =="socials"]`);
}
