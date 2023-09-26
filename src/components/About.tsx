"use client";
import React from "react";
import { motion } from "framer-motion";

import Image from "next/image";
import { pageInfo } from "../../typings";
import { urlFor } from "@/app/lib/ImageUrlBuilder";

type Props = {
  pageinfo: pageInfo;
};

const About = ({ pageinfo }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="h-screen relative flex flex-col text-center justify-center md:text-left md:flex-row max-w-7xl px-2 lg:px-10  mx-auto items-center"
    >
      <Image
        className="mt-14 md:mb-0  w-[300px] h-[300px] bg-center flex xl:w-[500px] xl:h-[500px] flex-shrink-0  rounded-full object-cover md:rounded-lg "
        alt="ilerioluwa picture"
        height={100}
        width={1000}
        src="/ilerioluwa.jpg"
      />

      <div className="space-y-6 px-0 md:px-10 mt-8">
        <div className="flex items-center justify-center lg:justify-start">
          <h3 className="uppercase mt-2  text-gray-500   text-xl lg:text-3xl font-[900] stroke-text stroke  ">
            01.
          </h3>
          <span className="text-4xl ml-3  font-extrabold capitalize md:text-4xl text-white">
            About
          </span>
        </div>

        <h4 className=" tracking-wide text-xl font-semibold mt-3 font-Montserrat ">
          Here is a
          <span className="underline mx-2 tracking-tighter decoration-[#F7BA0A]/60">
            Little
          </span>
          About Me
        </h4>
        <p className="tracking-tight font-Montserrat font-medium text-sm md:text-xl leading-[24px] md:leading-[40px]">
          Hey there, I am Akintunde Ilerioluwa, a passionate frontend developer.
          I am an ambitious, driven and curious person who is always eager to
          learn new things. I am constantly looking for opportunities to do
          better and achieve greatness. I am proficient in working with
          technologies such as HTML, CSS, SCSS, Tailwind, Javascript, Next.JS. I
          also have interest in CyberSecurity and Blockchain.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
