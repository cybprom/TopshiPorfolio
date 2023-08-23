"use client";
import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../../../typings";
type Props = {
  experience?: Experience[];
};

function Experiences({ experience }: Props) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
      >
        <div className="w-full flex space-x-2 md:space-x-7 lg:p-10 overflow-x-scroll snap-x snap-mandatory  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7BA0A]/60">
          {/* experience cards */}
          {/* {experience.map((experience) => (
            <ExperienceCard key={experience._id} experience={experience} />
          ))} */}
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
        </div>
      </motion.div>
    </>
  );
}

export default Experiences;
