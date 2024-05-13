"use client";

import Image from "next/image";
import Link from "next/link";
import { FramesType } from "./data";
export default function Frame({ frame, index }: { frame: FramesType, index: number }) {
  return (
    <>
      <section className="w-full">
        <div
          className={`container flex flex-col items-center justify-center gap-8 lg:gap-0 ${
            index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
        >
          <div className="] space-y-4 lg:w-1/2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {frame.title}
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {frame.description}
            </p>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href={frame.link}
            >
              See Preview
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
        <hr className="my-2 bg-primary dark:bg-orange-300 outline:none border:none text-primary border-spacing-0 border-collapse py-[.5px]"/>
      </section>
    </>
  );
}
