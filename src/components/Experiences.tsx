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
        <h3 className="uppercase  text-gray-500 text-2xl mt-4 lg:text-4xl font-[900] stroke-text stroke  ">
          02.experience
        </h3>
        <div className="overflow-hidden max-w-full">
          <div className="w-full flex space-x-2 md:space-x-7 lg:p-10 overflow-x-scroll snap-x snap-mandatory  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7BA0A]/60">
            {/* experience cards */}
            {experience.map((experience, i) => (
              <ExperienceCard
                key={experience?._id}
                experience={experience}
                index={i}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Experiences;
