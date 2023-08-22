import { Socials } from "../typings";

export const fetchsocials = async () => {
  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_BASE_URL ||
      "https://temitopedavidsite.vercel.app/"
    }/api/getSocials`
  );
  const data = await res.json();
  const socials: Socials[] = data.socials;

  return socials;
};

fetchsocials();
