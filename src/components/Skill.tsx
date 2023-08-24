import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Skill } from "../../typings";
import { urlFor } from "@/app/lib/ImageUrlBuilder";

type Props = {
  directionleft?: boolean;
  skill: Skill;
};

function Skilltool({ directionleft, skill }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
          x: directionleft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="rounded-full border border-gray-500 h-20 w-20 lg:h-24 lg:w-24 filter group-hover:grayscale transition duration-300 ease-in-out"
      >
        <Image
          src={urlFor(skill?.image).url()}
          className="h-full w-full  object-cover "
          alt="skillset"
          height={40}
          width={40}
        />
      </motion.div>

      <div className="absolute opacity-0 group-hover:opacity-80 transition-opacity duration-300 ease-in-out group-hover:bg-white h-20 w-20 lg:h-24 lg:w-24 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">
            {skill?.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skilltool;
