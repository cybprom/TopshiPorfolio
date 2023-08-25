"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.3, 0.8, 0.5, 1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 2.5 }}
      className="relative flex justify-center items-center"
    >
      <div className=" absolute [#333333] border h-[200px] w-[200px] rounded-xl mt-52 animate-ping" />
      <div className=" absolute border border-[#333333]  h-[300px] w-[300px] rounded-xl mt-52 animate-ping" />
      <div className=" absolute border border-[#333333]  h-[500px] w-[500px] rounded-full mt-52 animate-ping" />
      <div className=" absolute border border-[#F7AB0A]/30  h-[650px] opacity-20 w-[650px] rounded-full mt-52 animate-pulse" />
      <div className=" absolute border border-[#333333]  h-[700px]  w-[800px] rounded-full mt-52 animate-pulse" />
    </motion.div>
  );
}
