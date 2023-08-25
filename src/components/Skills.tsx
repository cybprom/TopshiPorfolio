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
      className="h-screen flex flex-col py-28 text-center md:text-left gap-y-20 max-w-[2000px] xl:px-10 min-h-screen xl:space-y-0 mx-auto items-center"
    >
      <div className="w-full max-w-7xl ">
        <div>
          <span className="uppercase  gap-x-2 text-gray-500   text-xl lg:text-3xl font-[900] stroke-text stroke ">
            03.
          </span>
          <span className="text-3xl md:text-4xl font-extrabold capitalize">
            skills
          </span>
        </div>
        <p className="capitalize mt-6">
          these are the tools i frequently use :hover on them to see my
          proficiency
        </p>
      </div>

      <div className=" grid grid-cols-4 gap-5">
        {skill.map((skill) => (
          <Skilltool key={skill._id} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}
