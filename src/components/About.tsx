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
      className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-2 lg:px-10 justify-evenly mx-auto items-center"
    >
      <Image
        className="mt-14 md:mb-0  md:w-64 md:h-72 flex xl:w-[500px] xl:h-[500px] flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg "
        alt="temitope picture"
        height={100}
        width={1000}
        src={urlFor(pageinfo?.profilePic).url()}
      />

      <div className="space-y-6 px-0 md:px-10">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-xl">
          About
        </h3>

        <h4 className="text-xl font-semibold">
          Here is a
          <span className="underline decoration-[#F7BA0A]/60 tracking-[3px]">
            {" "}
            Litle{" "}
          </span>
          Background
        </h4>
        <p>{pageinfo?.backgroundInformation}</p>
      </div>
    </motion.div>
  );
};

export default About;
