import Image from "next/image";
import { FC } from "react";

interface Props {
  item: { image: any; title: string };
}

const Card: FC<Props> = ({ item }) => {
  return (
    <div className="mygrid mt-4 flex flex-col gap-2 ">
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
