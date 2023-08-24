// "use client";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import temitope from "../../public/temitope.jpeg";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/app/lib/sanity";
import { use } from "react";
// import { pageInfo } from "../../../typings";
// import { getPageInfo } from "../../../sanity/Sanity-utils";
import { urlFor } from "@/app/lib/ImageUrlBuilder";
type Props = {};

export async function getPageInfo() {
  return client.fetch(`*[_type =="pageInfo"][0]`);
}
export default async function Hero({}: Props) {
  // const [text, count] = useTypewriter({
  //   words: [
  //     `Hi My name is $temitope `,
  //     "I am Frontend Developer ",
  //     "<Typescript>I Write </Typescript>",
  //     "I love animations",
  //   ],
  //   loop: true,
  //   delaySpeed: 2000,
  // });
  const pageinfo = await getPageInfo();
  // console.log(pageinfo);
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden ">
      <BackgroundCircles />
      <Image
        className="relative h-32 w-32 mx-auto rounded-full object-cover"
        alt="temitope pciture"
        width={100}
        height={100}
        // src={temitope}
        src={urlFor(pageinfo?.heroImage).url()}
      ></Image>

      <div className="z-20">
        <h2 className="uppercase text-gray-500 text-xs lg:text-sm pb-2 tracking-[8px] lg:tracking-[15px]">
          {pageinfo?.role}
          {/* frontend devser */}
        </h2>
        <h1 className="text-2xl lg:text-3xl font-semibold px-10">
          {/* <span>{text}</span> */}
          coder
          {/* <Cursor cursorColor="red" /> */}
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="HeroButtonClass">About</button>
          </Link>
          <Link href="#skills">
            <button className="HeroButtonClass">skills</button>
          </Link>
          <Link href="#experience">
            <button className="HeroButtonClass">Experience</button>
          </Link>

          <Link href="#projects">
            <button className="HeroButtonClass">projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
