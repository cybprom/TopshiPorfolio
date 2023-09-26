"use client";
import Image from "next/image";
import React from "react";
// import temitope from "../public/temitope.jpeg";
import { motion } from "framer-motion";
import { Project } from "../../typings";
// import { urlFor } from "@/app/lib/ImageUrlBuilder";

type Props = { project: Project[] };

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="h-screen relative flex overflow-hidden flex-col text-left  mx-auto items-center"
    >
      <div className="w-full max-w-7xl absolute top-[30%] lg:top-[30%]">
        <div>
          <span className="uppercase  gap-x-2 text-gray-500   text-xl lg:text-3xl font-[900] stroke-text stroke ">
            03.
          </span>
          <span className="text-3xl ml-3 md:text-4xl font-extrabold capitalize">
            Project
          </span>
        </div>
      </div>
      <div className="relative w-full scrollbar-thin flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-track-gray-400/20 scrollbar-thumb-[#F7BA0A]/60 ">
        <div className=" w-screen flex-shrink-0 flex snap-center flex-col space-y-5 items-center p-3 lg:p-20  justify-center md:p-44 h-screen">
          <div className="space-y-10 px-0 md:px-10 max-w-6xl font-Montserrat">
            <h4 className="text-xl text-center font-semibold">
              <span className="underline decoration-[#F7AB0A]/50 ">
                Project 1 of 2
              </span>
              : Movie Discovery
            </h4>
            <p className="text-sm lg:text-lg text-center md:text-left tracking-tight  leading-[24px] md:leading-[40px]">
              This was a task from HNGx internship. It is a Movie Discovery
              webapp, where you can search for trend movies and also see each
              details about the movie. I translated Figma designs into 100%
              functional web pages using Next.js and Tailwind.
            </p>
          </div>
        </div>

        <div className=" mt16 mt-28 w-screen flex-shrink-0 flex snap-center flex-col space-y-5 items-center p-3 lg:p-20  justify-center md:p-44 h-screen">
          <div className="space-y-10 px-0 md:px-10 max-w-6xl font-Montserrat">
            <h4 className="text-xl text-center font-semibold">
              <span className="underline decoration-[#F7AB0A]/50 ">
                Project 2 of 2
              </span>
              : Kuda MFB Clone
            </h4>
            <p className="text-sm lg:text-lg text-center md:text-left tracking-tight  leading-[24px] md:leading-[40px]">
              The website clone was meticulously crafted using a combination of
              HTML, CSS, and JavaScript to replicate the Kuda site functionality
              and aesthetics. HTML served as the backbone, structuring the
              content and defining the layout of the clone. CSS played a crucial
              role in styling, ensuring that the clone closely matched the
              visual design of the original website, with meticulous attention
              to detail in typography, colors, and responsive design. Meanwhile,
              JavaScript brought interactivity and functionality to the clone,
              enabling dynamic features, interactive elements, and real-time
              data retrieval, making the clone a fully functional replica that
              closely resembled the user experience of the source website.
              Together, these technologies seamlessly combined to create a
              faithful representation of the original website.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div> */}
    </motion.div>
  );
}

export default Projects;
