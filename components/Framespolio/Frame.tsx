"use client";

import Image from "next/image";
import Link from "next/link";
import { FramesType } from "./data";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Frame({ frame, index }: { frame: FramesType, index: number }) {
  return (
    <>
      <div className="w-full">
        <div
          className={`container flex flex-col items-center justify-center gap-8 lg:gap-0 ${
            index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
        >
          <div className="] space-y-2 text-center lg:w-1/2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
              {frame.title}
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {frame.description}
            </p>
            <Link
              className="flex w-fit mx-auto gap-2 justify-between h-10 relative items-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href={frame.link}
              target="_blank"
            >
              <span>Preview</span>
              <span >
                <FaExternalLinkAlt />
              </span>
            </Link>
          </div>
          <Image
            alt="Project Screenshot"
            className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-contain object-center lg:w-1/2"
            height="600"
            src={frame.image}
            width="800"
          />
        </div>
        <hr className="outline:none border:none my-2 border-collapse border-spacing-0 bg-primary py-[.5px] text-primary dark:bg-orange-300" />
      </div>
    </>
  );
}
