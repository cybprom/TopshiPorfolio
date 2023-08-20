import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import temitope from "../public/temitope.jpeg";
import Image from "next/image";
import Link from "next/link";
type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi My name is Temitope David",
      "i love Javascript",
      "<coffee love Coffee.tsx></coffee>",
      "i am a problem solver",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden ">
      <BackgroundCircles />
      <Image
        className="relative h-32 w-32 mx-auto rounded-full object-cover"
        alt="temitope pciture"
        src={temitope}
      ></Image>

      <div className="z-20">
        <h2 className="uppercase text-gray-500 text-xs lg:text-sm pb-2 tracking-[8px] lg:tracking-[15px]">
          Frontend developer
        </h2>
        <h1 className="text-2xl lg:text-3xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor="red" />
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
