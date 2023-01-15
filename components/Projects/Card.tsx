// Custom next js image components for optimization. See https://nextjs.org/docs/api-reference/next/image
import Image from "next/image";

// Custom next js components for routing. See https://nextjs.org/docs/api-reference/next/link
import Link from "next/link";

// Typescript interfaces
import { FC } from "react"; // Functional component interface. See
import { ProjectsType } from "./projects"; // Custom projects interfaces

// This package creates a unique string which I used as key in react map. See https://www.npmjs.com/package/uniqid
import uniqid from "uniqid";

// Live and Code icons. See https://react-icons.github.io/react-icons/
import { TbWorld } from "react-icons/tb";
import { AiFillGithub } from "react-icons/ai";

// Props interface
interface CardsProps {
  card: ProjectsType;
}

// This takes in a project and outputs a card for it. Consisting of the image, tools and description
const Card: FC<CardsProps> = ({ card }) => {
  return (
    <div className="group flex flex-col overflow-hidden rounded-lg shadow-md duration-75 ease-in-out hover:scale-[101%] dark:shadow-orange-800">
      <div>
        <Image
          unoptimized={true}
          className="w-full object-contain"
          src={card.image}
          alt="projectImage"
          width={200}
          height={400}
          priority={true}
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 py-4 px-6">
        <h1 className="text-lg font-semibold uppercase dark:text-gray-200 lg:text-xl">
          {card.title}
        </h1>
        <div className="flex flex-wrap gap-2 text-sm">
          {card.techologies.map((value) => (
            <button
              key={uniqid()}
              className="rounded-full bg-primary  px-2 text-[.5rem] text-gray-100 hover:bg-primaryLight dark:bg-orange-300 dark:text-[80%]   dark:font-semibold dark:text-black md:text-[.5rem] md:tracking-wide"
            >
              {value}
            </button>
          ))}
        </div>
        <p className=" dark:text-gray-200">{card.description}</p>

        <div className="absolute inset-0  hidden items-center justify-center gap-8 bg-gradient-to-r from-blue-700/95 to-sky-800/95 group-hover:flex dark:from-green-600/95 dark:to-cyan-900/95">
          <Link href={card.links.live} target={"_blank"}>
            <TbWorld
              className="w-full cursor-pointer text-gray-800 dark:text-gray-300"
              size={128}
            />
          </Link>
          <Link href={card.links.code} target={"_blank"}>
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
