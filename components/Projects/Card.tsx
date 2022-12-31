import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import projectImg from "../../assets/hero-image.png";
import Button from "../Button";
import projects, { ProjectsType } from "./projects";

interface CardsProps {
  card: ProjectsType;
}

const Card: FC<CardsProps> = ({ card }) => {
  return (
    <div className="grid overflow-hidden rounded-lg shadow-md">
      <div>
        <Image
          className="w-full"
          src={card.image || projectImg}
          alt="projectImage"
          width={200}
          height={400}
        />
      </div>
      <div className="grid gap-2 p-3">
        <h1 className="text-xl font-bold uppercase">{card.title}</h1>
        <div className="flex flex-wrap gap-2 text-sm">
          {card.techologies.map((value) => (
            <Button text={value} />
          ))}
        </div>
        <p>{card.description}</p>
        <div className="mt-2 flex justify-center gap-8">
          <Link href={card.links.live}>
            <Button text="LIVE" color="green" />
          </Link>
          <Link href={card.links.code}>
            <Button text="CODE" color="orange" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
