import { Experience } from "./../typings.d";

export const fetchExperience = async () => {
  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_BASE_URL ||
      "https://temitopedavidsite.vercel.app/"
    }/api/getExperience`
  );
  const data = await res.json();
  const experience: Experience[] = data.experience;

  return experience;
};
