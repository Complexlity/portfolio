import Image from "next/image";
import { FC } from "react";

interface Props {
  item: { image: any; title: string };
}

const Card: FC<Props> = ({ item }) => {
  return (
    <div className="space-y-2">
      <div className="bg-orange-200">
        <Image className="w-full" src={item.image} alt={item.title} />
      </div>
      <p className="text-center text-[3vw] uppercase md:text-xl">
        {item.title}
      </p>
    </div>
  );
};

export default Card;
