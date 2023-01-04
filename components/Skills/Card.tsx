import Image from "next/image";
import { FC } from "react";

interface Props {
  item: { image: any; title: string };
}

const Card: FC<Props> = ({ item }) => {
  return (
    <div className="group relative">
      <div className="mx-auto grid h-24 w-24 items-center justify-start">
        <Image
          className="w-full object-contain"
          src={item.image}
          alt={item.title}
        />
      </div>
      <p className="text-center text-[3vw] dark:text-gray-200 md:text-xl">
        {item.title}
      </p>
    </div>
  );
};

export default Card;
