import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-3">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center "
      >
        <SocialIcon
          url="https://www.youtube.com/temitopedavid"
          bgColor="transparent"
          fgColor="gray"
        />
        <SocialIcon
          url="https://www.youtube.com/temitopedavid"
          bgColor="transparent"
          fgColor="gray"
        />
        <SocialIcon
          url="https://www.youtube.com/temitopedavid"
          bgColor="transparent"
          fgColor="gray"
        />
        <SocialIcon
          url="https://www.youtube.com/temitopedavid"
          bgColor="transparent"
          fgColor="gray"
        />
      </motion.div>

      <Link href="#contact">
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-row items-center text=gray-400 cursor-pointer"
        >
          <SocialIcon
            url="https://www.youtube.com/temitopedavid"
            bgColor="transparent"
            fgColor="gray"
            network="email"
          />
          <p className="hidden md:inline-flex uppercase text-sm text-gray-400">
            get in touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
}
