"use client";
import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/20/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { pageInfo } from "../../typings";
type Props = { pageinfo: pageInfo };

interface IFormInput {
  name: string;
  subject: string;
  email: string;
  message: string;
}

const Contact = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    window.location.href = `mailto:ilerioluwac@gmail.com?subject=${data.subject}&body= hi my name is ${data.name}, ${data.message} ${data.email}`;
  };
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl  px-4 lg:px-10 justify-evenly mx-auto items-center">
      <div className="flex-col space-y-4">
        <h4 className="capitalize text-xl font-semibold text-center ">
          i have got just what you need {""}
          <span className="decoration-[yellow]/30 underline">
            Lets Talk.
          </span>{" "}
        </h4>
        <div className="space-y-4">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-yellow-800 animate-pulse h-7 w-7 " />
            <p className="text-xl">+2347069275553</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-yellow-800 animate-pulse h-7 w-7 " />
            <p className="text-xl capitalize">Lagos Nigeria</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-yellow-800 animate-pulse h-7 w-7 " />
            <p className="text-xl capitalize">ilerioluwac@gmail.com</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2  w-[90%] lg:w-fit mx-auto"
        >
          <div className="flex gap-y-2 flex-col lg:flex-row">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactinput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactinput"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="subject"
            className="contactinput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactinput"
            name=""
          ></textarea>

          <button
            type="submit"
            className="bg-[#F7BA0A] py-5 px-10 rounded-md text-black font-bold text-base"
          >
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
