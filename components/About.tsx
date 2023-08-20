import React from "react";
import { motion } from "framer-motion";
import Temitope from "../public/temitope.jpeg";
import Image from "next/image";

type Props = {};

const About = (props: Props) => {
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
        src={Temitope}
      />

      <div className="space-y-6 px-0 md:px-10">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-xl">
          About
        </h3>
        <h4 className="text-xl font-semibold">
          Here is a
          <span className="underline decoration-[#F7BA0A]/60"> Litle </span>
          Background
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          voluptate consectetur eaque. Corporis magni repellendus itaque
          voluptate consequatur consectetur debitis ratione molestias
          dignissimos aliquam expedita, optio veritatis sed facere ullam.
          Corporis et velit ut totam deleniti laudantium suscipit, nihil vel,
          aspernatur neque repellendus amet aperiam ipsa illo voluptatem sequi
          id doloribus ipsum sed? Reiciendis, vel sunt. Aut necessitatibus
          cupiditate consequuntur? Repudiandae eveniet perspiciatis alias cum,
          doloribus itaque perferendis dolorum libero,
        </p>
      </div>
    </motion.div>
  );
};

export default About;
