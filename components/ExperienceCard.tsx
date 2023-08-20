import Image from "next/image";
import React from "react";
import temitope from "../public/temitope.jpeg";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex relative mt-10 flex-col rounded-lg items-center space-y-3 w-full flex-shrink-0 md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <h3 className="  top-0  left-0 absolute uppercase tracking-[5px] p-4 text-gray-500 text-xs lg:text-xs ">
        Experience
      </h3>
      <Image
        src={temitope}
        alt="company image"
        className="h-20 w-20 rounded-full xl:w-[100px] xl:h-[100px] objext-cover object-center"
      />

      <div className=" px-0 md:px-10">
        <h4 className="text-2xl font-light">CEO Davtech</h4>
        <h4 className="font-bold text-xl mt-1">Davtech</h4>
        <div className="flex lg:space-x-3 my-1">
          <Image
            className=" h-5 w-5 lg:h-8 lg:w-8 rounded-full"
            height={8}
            width={8}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI3pYJqgE0pQg-3wXUGXkjWpj7yPiZ9I3b0w&usqp=CAU"
            alt="skill sets"
          />
          <Image
            className="h-5 w-5 lg:h-8 lg:w-8  rounded-full"
            height={10}
            width={10}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI3pYJqgE0pQg-3wXUGXkjWpj7yPiZ9I3b0w&usqp=CAU"
            alt="skill sets"
          />

          <Image
            className="h-5 w-5 lg:h-8 lg:w-8  rounded-full"
            height={10}
            width={10}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI3pYJqgE0pQg-3wXUGXkjWpj7yPiZ9I3b0w&usqp=CAU"
            alt="skill sets"
          />
          <Image
            className="h-5 w-5 lg:h-8 lg:w-8 rounded-full"
            height={10}
            width={10}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI3pYJqgE0pQg-3wXUGXkjWpj7yPiZ9I3b0w&usqp=CAU"
            alt="skill sets"
          />
          <Image
            className="h-5 w-5 lg:h-8 lg:w-8 rounded-full"
            height={10}
            width={10}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI3pYJqgE0pQg-3wXUGXkjWpj7yPiZ9I3b0w&usqp=CAU"
            alt="skill sets"
          />
        </div>
        <p className="uppercase py-5 text-gray-300">started ... ended...</p>
        <ul className="list-disc space-y-2 ml-5 text-xs md:text-lg">
          <li>Sumarry points Sumarry points</li>
          <li>Sumarry points</li>
          <li>
            Sumarry points Sumarry points Sumarry points Sumarry points Sumarry
            points Sumarry points
          </li>
          <li>Sumarry points</li>
          <li>Sumarry points</li>
        </ul>
      </div>
    </article>
  );
}
