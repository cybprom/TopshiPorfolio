"use client";
import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../../typings";
import Skilltool from "./Skill";
import Image from "next/image";

type Props = { skill: Skill[] };

export default function Skills() {
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
          <span className="text-3xl ml-3 md:text-4xl font-extrabold capitalize">
            skills
          </span>
        </div>
        <p className="capitalize mt-6">
          these are the tools i frequently use :hover on each tools to see my
          proficiency
        </p>
      </div>

      <div className="mt-6 grid grid-cols-2 lg:grid-cols-3 gap-5 space-y-5 mb-32">
        {/* {skill.map((skill) => (
          <Skilltool key={skill._id} skill={skill} />
        ))} */}
        <div className="group relative flex cursor-pointer">
          <motion.div className="rounded-full  h20 w20 lg:h-40 lg:w-45 filter group-hover:grayscale transition duration-300 ease-in-out">
            <Image
              src="/TailwindLogo.png"
              className="h-full w-full  object-cover "
              alt="skillset"
              height={100}
              width={1000}
            />
          </motion.div>

          <div className="absolute opacity-0 group-hover:opacity-80 transition-opacity duration-300 ease-in-out group-hover:bg-white h-20 w-20 lg:h-24 lg:w-24 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
              <p className="text-3xl font-bold text-black opacity-100">85%</p>
            </div>
          </div>
        </div>

        <div className="group relative flex cursor-pointer">
          <motion.div className="rounded-full  h20 w20 lg:h-40 lg:w24 filter group-hover:grayscale transition duration-300 ease-in-out">
            <Image
              src="/NextjsLogo.png"
              className="h-full w-full  object-cover "
              alt="skillset"
              height={100}
              width={1000}
            />
          </motion.div>

          <div className="absolute opacity-0 group-hover:opacity-80 transition-opacity duration-300 ease-in-out group-hover:bg-white h-20 w-20 lg:h-24 lg:w-24 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
              <p className="text-3xl font-bold text-black opacity-100">75%</p>
            </div>
          </div>
        </div>

        <div className="group relative flex cursor-pointer">
          <motion.div className="rounded-full  h20 w20 lg:h-40 lg:w24 filter group-hover:grayscale transition duration-300 ease-in-out">
            <Image
              src="/reactLogo.svg"
              className="h-full w-full  object-cover "
              alt="skillset"
              height={100}
              width={1000}
            />
          </motion.div>

          <div className="absolute opacity-0 group-hover:opacity-80 transition-opacity duration-300 ease-in-out group-hover:bg-white h-20 w-20 lg:h-24 lg:w-24 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
              <p className="text-3xl font-bold text-black opacity-100">65%</p>
            </div>
          </div>
        </div>

        <div className="group relative flex cursor-pointer">
          <motion.div className="rounded-full  h20 w20 lg:h-40 lg:w24 filter group-hover:grayscale transition duration-300 ease-in-out">
            <Image
              src="/CSS3Logo.png"
              className="h-full w-full  object-cover "
              alt="skillset"
              height={100}
              width={1000}
            />
          </motion.div>

          <div className="absolute opacity-0 group-hover:opacity-80 transition-opacity duration-300 ease-in-out group-hover:bg-white h-20 w-20 lg:h-24 lg:w-24 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
              <p className="text-3xl font-bold text-black opacity-100">85%</p>
            </div>
          </div>
        </div>

        <div className="group relative flex cursor-pointer">
          <motion.div className="rounded-full  h20 w20 lg:h-40 lg:w24 filter group-hover:grayscale transition duration-300 ease-in-out">
            <Image
              src="/github-logo.png"
              className="h-full w-full  object-cover "
              alt="skillset"
              height={100}
              width={1000}
            />
          </motion.div>

          <div className="absolute opacity-0 group-hover:opacity-80 transition-opacity duration-300 ease-in-out group-hover:bg-white h-20 w-20 lg:h-24 lg:w-24 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
              <p className="text-3xl font-bold text-black opacity-100">75%</p>
            </div>
          </div>
        </div>

        <div className="group relative flex cursor-pointer">
          <motion.div className="rounded-full  h20 w20 lg:h-40 lg:w24 filter group-hover:grayscale transition duration-300 ease-in-out">
            <Image
              src="/javascriptLogo.png"
              className="h-full w-full  object-cover "
              alt="skillset"
              height={100}
              width={1000}
            />
          </motion.div>

          <div className="absolute opacity-0 group-hover:opacity-80 transition-opacity duration-300 ease-in-out group-hover:bg-white h-20 w-20 lg:h-24 lg:w-24 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
              <p className="text-3xl font-bold text-black opacity-100">75%</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
