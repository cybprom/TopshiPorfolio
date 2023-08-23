"use client";
import Image from "next/image";
import React from "react";
import temitope from "../../../public/temitope.jpeg";
import { Experience } from "../../../typings";
// import { urlfor } from "@/lib/sanity";

type Props = { experience?: Experience };

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex relative mt-10 flex-col rounded-lg items-center space-y-3 w-full flex-shrink-0 md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 lg:opacity-40 lg:hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <h3 className="  top-0  left-0 absolute uppercase tracking-[5px] p-4 text-gray-500 text-xs lg:text-xs ">
        Experience
      </h3>
      <Image
        height={100}
        width={100}
        src={temitope}
        // src={urlfor(experience?.companyImage).url()}
        alt="company image"
        className="h-20 w-20 rounded-full xl:w-[100px] xl:h-[100px] objext-cover object-center"
      />

      <div className=" px-0 md:px-10">
        <h4 className="text-2xl font-light capitalize mb-2">
          {/* {experience.company} */} meeras
        </h4>
        <h4 className="font-bold text-xl mt-1 mb-2">fe dev</h4>
        <div className="flex lg:space-x-3 my-1">
          {/* {experience?.technologies.map((tech) => (
            <Image
              key={tech._id}
              className=" h-5 w-5 lg:h-8 lg:w-8 rounded-full"
              height={100}
              width={100}
              src={temitope}
              // src={urlfor(tech?.image).url()}
              alt="skill sets"
            />
          ))}*/}
        </div>
        <Image
          // key={tech._id}
          className=" h-5 w-5 lg:h-8 lg:w-8 rounded-full"
          height={100}
          width={100}
          src={temitope}
          // src={urlfor(tech?.image).url()}
          alt="skill sets"
        />
        {/* <p className="uppercase py-5 text-gray-300">
          {new Date(experience?.dateStarted).toDateString()} -
          {experience.isCurrentlyWorkingHere
            ? "present"
            : new Date(experience?.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-2 ml-5 text-xs md:text-lg">
          {experience.points.map((point, i) => (
            <li key={i}> {point}</li>
          ))}
        </ul> */}
        <ul className="list-disc space-y-2 ml-5 text-xs md:text-lg">
          <li>about thus and that</li>
          <li>about thus and that</li>
          <li>about thus and that</li>
        </ul>
      </div>
    </article>
  );
}
