import Image from "next/image";
import { FC } from "react";

interface Props {
  item: { image: any; title: string };
}

const Card: FC<Props> = ({ item }) => {
  return (
    <div className="mygrid mt-4 grid h-16 w-16  md:h-24 md:w-24">
      <Image className="object-cover" src={item.image} alt={item.title} />
      <p className=" text-center text-[3vw] dark:text-gray-200 md:text-xl">
        {item.title}
      </p>
    </div>
  );
};

export default Card;
