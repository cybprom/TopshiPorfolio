"use client";
import Image from "next/image";
import React from "react";
import temitope from "../public/temitope.jpeg";
import { motion } from "framer-motion";
import { Project } from "../../typings";
import { urlFor } from "@/app/lib/ImageUrlBuilder";

type Props = { project: Project[] };

function Projects({ project }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="h-screen relative flex overflow-hidden flex-col text-left  mx-auto items-center"
    >
      <div className="w-full max-w-7xl mt-24">
        <div>
          <span className="uppercase  gap-x-2 text-gray-500   text-xl lg:text-3xl font-[900] stroke-text stroke ">
            03.
          </span>
          <span className="text-3xl md:text-4xl font-extrabold capitalize">
            Project
          </span>
        </div>
      </div>
      <div className="relative w-full scrollbar-thin flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-track-gray-400/20 scrollbar-thumb-[#F7BA0A]/60 ">
        {project.map((projects, i) => (
          <div
            key={projects._id}
            className=" w-screen flex-shrink-0 flex snap-center flex-col space-y-5 items-center p-3 lg:p-20  justify-center md:p-44 h-screen"
          >
            <motion.div
              className="h-[200px] w-[400px]"
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <Image
                src={urlFor(projects?.image).url()}
                height={1000}
                width={1000}
                alt="project images"
                className=" h-full w-full object-fit"
              />
            </motion.div>

            <div className="space-y-10 px-0 md:px-10 max-w-6xl font-Montserrat">
              <h4 className="text-xl text-center font-semibold">
                <span className="underline decoration-[#F7AB0A]/50 ">
                  Project {i + 1} of {project.length}
                </span>
                : {projects?.title}
              </h4>
              <p className="text-sm lg:text-lg text-center md:text-left tracking-tight  leading-[24px] md:leading-[40px]">
                {projects?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
