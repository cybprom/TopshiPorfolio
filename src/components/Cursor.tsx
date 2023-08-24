import Link from "next/link";
import React from "react";
import temitope from "../../public/temitope.jpeg";
import Image from "next/image";

type Props = {};

const Cursor = (props: Props) => {
  return (
    <>
      <Link href="#hero">
        <footer className="w-full sticky bottom-20 sm:bottom-5 cursor-pointer">
          <div className="items-center flex  justify-center">
            <Image
              src={temitope}
              alt="temitope image"
              height={20}
              width={20}
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 "
            />
          </div>
        </footer>
      </Link>
    </>
  );
};

export default Cursor;
