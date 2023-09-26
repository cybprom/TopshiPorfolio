"use client";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Socials } from "../../typings";
import { ChatBubbleLeftIcon } from "@heroicons/react/20/solid";

type Props = {
  socials: Socials[];
};

export default function Header({ socials }: Props) {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center px-2 md:p-3">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center gap-x-1"
      >
        {/* {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            bgColor="transparent"
            fgColor="gray"
            className="text-base h-3 w-3"
          />
        ))} */}
        <SocialIcon
          network="twitter"
          url="https://twitter.com/cybprom"
          bgColor="transparent"
          fgColor="gray"
          className="text-base h-3 w-3"
        />
        <SocialIcon
          network="github"
          url="https://github.com/cybprom"
          bgColor="transparent"
          fgColor="gray"
          className="text-base h-3 w-3"
        />
        <SocialIcon
          network="linkedin"
          url="https://www.linkedin.com/in/ilerioluwa-akintunde-2934a2221"
          bgColor="transparent"
          fgColor="gray"
          className="text-base h-3 w-3"
        />
      </motion.div>

      <Link href="#contact">
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-row items-center justify-center text-gray-400 cursor-pointer gap-x-3"
        >
          <ChatBubbleLeftIcon className="text-gray-400 h-5 w-5 mt-4 md:mt-0" />
          <p className="hidden md:inline-flex uppercase text-sm text-gray-400">
            get in touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
}
