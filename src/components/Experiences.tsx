"use client";
import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../../typings";
type Props = {
  experience: Experience[];
};

function Experiences({ experience }: Props) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="h-screen flex relative flex-col text-left  px-10 mx-auto justify-center"
      >
        <div className="w-full lg:px-10 flex items-center mb-3">
          <h3 className="uppercase text-gray-500 mt-4 font-[900] stroke-text stroke  text-xl lg:text-3xl">
            02.
          </h3>
          <span className="text-4xl mt-3 lg:mt-2 font-extrabold capitalize md:text-4xl text-white">
            experience
          </span>
        </div>

        <div className="overflow-hidden max-w-full">
          <div className="w-full flex space-x-2 md:space-x-7 lg:p-10 overflow-x-scroll snap-x snap-mandatory  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7BA0A]/60">
            {/* experience cards */}
            {/* {experience.map((experience, i) => (
              <ExperienceCard
                key={experience?._id}
                experience={experience}
                index={i}
              />
            ))} */}
            {/* <ExperienceCard /> */}
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Experiences;
