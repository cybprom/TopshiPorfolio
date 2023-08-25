import Link from "next/link";
import React from "react";
import { ArrowUpIcon } from "@heroicons/react/20/solid";

type Props = {};

const Cursor = (props: Props) => {
  return (
    <>
      <Link href="#hero">
        <div className=" border border-gray-400 animate-bounce w-10 h-10 rounded-full flex items-center justify-center">
          <ArrowUpIcon className=" h-6w-6 text-gray-400" />
        </div>
      </Link>
    </>
  );
};

export default Cursor;
