import Image from "next/image";
import React from "react";
import temitope from "../public/temitope.jpeg";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlfor } from "@/lib/sanity";

type Props = { project: Project[] };

function Projects({ project }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row justify-evenly mx-auto items-center"
    >
      <div className="relative w-full scrollbar-thin flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-track-gray-400/20 scrollbar-thumb-[#F7BA0A]/60 ">
        {project.map((projects, i) => (
          <div
            key={projects._id}
            className=" w-screen flex-shrink-0 flex snap-center flex-col space-y-5 items-center p-3 lg:p-20  justify-center md:p-44 h-screen"
          >
            <motion.div
              className=""
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <Image
                src={urlfor(projects?.image).url()}
                height={200}
                width={200}
                alt="project images"
              />
            </motion.div>

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-xl text-center font-semibold">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {project.length}
                </span>
                : {projects?.title}
              </h4>
              <p className="  text-sm lg:text-lg text-center md:text-left">
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
