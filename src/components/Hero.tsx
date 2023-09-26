// "use client";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
// import temitope from "../../public/temitope.jpeg";
import Image from "next/image";
import Link from "next/link";
// import { client } from "@/app/lib/sanity";
import { pageInfo } from "../../typings";

// import { urlFor } from "@/app/lib/ImageUrlBuilder";
import Typewriter from "./Typewriter";
import localFont from "next/font/local";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

type Props = {
  pageinfo: pageInfo;
};

export default async function Hero() {
  return (
    <div className="h-screen flex flex-col-reverse gap-y-20 md:flex-row space-y-8 items-center justify-center text-center overflow-hidden ">
      <div className="flex flex-col gap-y-3 w-full">
        <h1
          className={`font-neu font-extrabold leading-none xl:text-[110px] lg:text-[80px] md:text-[64px] sm:text-[50px] mb-[20px] text-[42px] `}
        >
          {/* <span> {pageinfo?.role.split(" ")[0]} </span> */}
          <span>Frontend</span> <br />
          <br className="sm:hidden 2xlinline font-extrabold" />
          {/* {pageinfo?.role.split(" ")[1]} */}
          Developer
        </h1>
        <Link
          href="#projects"
          className="flex lg:w-1/2 lg:ml-12 items-center  justify-center "
        >
          <span className="font-bolc text-sm md:text-xl animate-pulse">
            check out my work
          </span>{" "}
          <ArrowRightIcon className="h-3 w-6" />
        </Link>
      </div>

      <div className="w-full flex items-start justify-center">
        <div className="flex flex-col items-center justify-center">
          <BackgroundCircles />
          <Image
            className="relative h-56 w-56 mx-auto rounded-xl object-cover"
            alt="ilerioluwa pciture"
            width={1000}
            height={1000}
            src="/ilerioluwa.jpg"
          ></Image>
          <h1 className="text-2xl lg:text-3xl font-semibold px-4 lg:px-8 mt-3">
            {/* <Typewriter name={pageinfo?.name} role={pageinfo?.role} /> */}
            Akintunde Ilerioluwa
          </h1>

          <div className="z-20">
            {/* <h2 className="capitalize  text-sm text-gray-400 pb-2 tracking-[8px] lg:tracking-[15px]">
            {pageinfo?.role}
          </h2> */}

            <div className="pt-5 lg:flex lg:gap-x-2 md:gap-x-6">
              <Link href="#about">
                <button className="HeroButtonClass">About</button>
              </Link>
              <Link href="#skills">
                <button className="HeroButtonClass">skills</button>
              </Link>
              <Link href="#experience">
                <button className="HeroButtonClass">Experience</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
