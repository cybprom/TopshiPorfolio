"use client";
import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../../typings";
import Skilltool from "./Skill";

type Props = { skill: Skill[] };

export default function Skills({ skill }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="h-screen flex flex-col py-32 text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      {/* <h3 className="uppercase tracking-[10px] text-gray-500 text-xl">
        skills
      </h3>
      <h3 className="uppercase tracking-[5px] text-gray-500 text-xl">
        hover over a skill for proeficiency
      </h3> */}
      <div className=" grid grid-cols-4 gap-5">
        {skill?.slice(0, skill.length / 2).map((skill) => (
          <Skilltool key={skill._id} skill={skill} />
        ))}
        {skill?.slice(skill.length / 2, skill.length).map((skill) => (
          <Skilltool key={skill._id} skill={skill} directionleft />
        ))}
      </div>
    </motion.div>
  );
}
