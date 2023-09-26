"use client";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
type Props = { name: string; role: string };

export default function Typewriter({ name, role }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi My name is Akintunde Ilerioluwa `,
      `I Am Frontend Developer`,
      "with a drive of building meaningful products",
      "that people love using",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <>
      <span className=" text-xl lg:text-3xlcapitalize text-semibold tracking-tight text-gray-400">
        {text}
      </span>
      <Cursor cursorColor="red" />
    </>
  );
}
