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
        alt="temitope picture"
        height={100}
        width={1000}
        src={urlFor(pageinfo?.profilePic).url()}
      />

      <div className="space-y-6 px-0 md:px-10 mt-8">
        <h3 className="uppercase  text-gray-500 text-2xl lg:text-4xl font-[900] stroke-text stroke  ">
          01. About
        </h3>

        <h4 className=" tracking-wide text-xl font-semibold mt-3 font-Montserrat ">
          Here is a
          <span className="underline mx-2 tracking-tighter decoration-[#F7BA0A]/60">
            Little
          </span>
          Background
        </h4>
        <p className="tracking-tight font-Montserrat font-medium text-sm md:text-xl leading-[24px] md:leading-[40px]">
          {pageinfo?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
};

export default About;
