import Image from "next/image";
import React from "react";
import { Experience } from "../../typings";
import { urlFor } from "@/app/lib/ImageUrlBuilder";

type Props = { experience: Experience; index: number };

export default function ExperienceCard({ experience, index }: Props) {
  return (
    <article className="flex relative flex-col rounded-lg items-center space-y-3 w-full flex-shrink-0 md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 lg:opacity-40 lg:hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <h3 className=" top-0  left-0 absolute uppercase tracking-[5px]  p-4 text-gray-500 text-xs lg:text-xs ">
        Experience
      </h3>
      <Image
        height={100}
        width={100}
        src="ilerioluwa.jpg"
        alt="company image"
        className="h-20 w-20 rounded-full xl:w-[100px] xl:h-[100px] objext-cover object-center"
      />

      <div className=" px-0 md:px-10">
        <h4 className="text-2xl font-light capitalize mb-2 font-Montserrat">
          RareSkills
        </h4>
        <h4 className="font-bold text-base lg:text-xl mt-1 mb-2">
          {experience.jobTitle}
        </h4>
        <div className="flex lg:space-x-3 my-1">
          {experience?.technologies.map((tech) => (
            <Image
              key={tech._id}
              className=" h-5 w-5 lg:h-8 lg:w-8 rounded-full"
              height={100}
              width={100}
              src={urlFor(tech?.image).url()}
              alt="skill sets"
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300 text-xs sm:text-sm md:text-xl">
          {new Date(experience?.dateStarted).toDateString()} -
          {experience.isCurrentlyWorkingHere
            ? "present"
            : new Date(experience?.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-2 ml-5 text-xs md:text-base font-Montserrat">
          {experience.points.map((point, i) => (
            <li key={i}> {point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
