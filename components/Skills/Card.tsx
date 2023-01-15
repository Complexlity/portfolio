// Custom next js image components for optimization. See https://nextjs.org/docs/api-reference/next/image
import Image from "next/image";

// Functional component interface
import { FC } from "react";

// Props interfaces
interface Props {
  item: { image: any; title: string };
}

// This takes an image and a title and outputs a card component for it
const Card: FC<Props> = ({ item }) => {
  return (
    <div className="mt-4 flex flex-col gap-2 ">
      <Image
        className="h-full w-full object-contain"
        src={item.image}
        alt={item.title}
      />
      <p className=" text-center font-roboto text-[3vw] dark:text-gray-200 md:text-xl">
        {item.title}
      </p>
    </div>
  );
};

export default Card;
