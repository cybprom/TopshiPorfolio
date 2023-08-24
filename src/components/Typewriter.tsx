"use client";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
type Props = {};

export default function Typewriter({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi My name is temitope `,
      "I am Frontend Developer ",
      "<Typescript>I Write </Typescript>",
      "I love animations",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <>
      <span>{text}</span>
      <Cursor cursorColor="red" />
    </>
  );
}
