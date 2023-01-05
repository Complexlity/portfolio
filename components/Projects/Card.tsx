import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import projectImg from "../../assets/hero-image.png";
import Button from "../Button";
import { ProjectsType } from "./projects";
import uniqid from "uniqid";
import { TbWorld } from "react-icons/tb";
import { AiFillGithub } from "react-icons/ai";

interface CardsProps {
  card: ProjectsType;
}

const Card: FC<CardsProps> = ({ card }) => {
  return (
    <div className="group grid overflow-hidden rounded-lg shadow-md duration-75 ease-in-out hover:scale-[101%] dark:shadow-orange-800">
      <div>
        <Image
          className="w-full"
          src={card.image || projectImg}
          alt="projectImage"
          width={200}
          height={400}
        />
      </div>
      <div className="grid gap-2 py-4 px-6">
        <h1 className="text-xl font-semibold uppercase dark:text-gray-200">
          {card.title}
        </h1>
        <div className="flex flex-wrap gap-2 text-sm">
          {card.techologies.map((value) => (
            <Button
              key={uniqid()}
              text={value}
              styles={"rounded-full md:text-[.5rem] text-[.5rem]"}
            />
          ))}
        </div>
        <p className="dark:text-gray-200">{card.description}</p>
        <div className="absolute inset-0  hidden items-center justify-center gap-8 bg-gradient-to-r from-blue-700/95 to-sky-800/95 group-hover:flex dark:from-green-600/95 dark:to-cyan-900/95">
          <Link href={card.links.live}>
            <TbWorld
              className="w-full cursor-pointer text-gray-800 dark:text-gray-300"
              size={128}
            />
          </Link>
          <Link href={card.links.code}>
            <AiFillGithub
              className="w-full cursor-pointer text-gray-800 dark:text-gray-300"
              size={128}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
