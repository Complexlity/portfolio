import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { ProjectsType } from "./projects";
import uniqid from "uniqid";
import { TbWorld } from "react-icons/tb";
import { AiFillGithub } from "react-icons/ai";
import Button from "./Button";

// Swiper Imports
import { Navigation, Pagination, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import Card from "./Card";
import projects from "./projects";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      keyboard={{
        enabled: true,
      }}
      navigation={true}
      modules={[Navigation, Pagination, Keyboard]}
      className="mySwiper"
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        900: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
      {projects.map((project) => (
        <SwiperSlide key={project.id}>
          <Card card={project}></Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

interface CardsProps {
  card: ProjectsType;
}

const Card: FC<CardsProps> = ({ card }) => {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-lg shadow-md duration-75 ease-in-out hover:scale-[101%] dark:shadow-orange-800">
      <div>
        <Image
          className="w-full object-contain"
          src={card.image}
          alt="projectImage"
          width={200}
          height={400}
          priority
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
        <div className="flex  flex-1 items-end gap-8 justify-self-end">
          <Link href={card.links.code} target={"_blank"}>
            <Button text={"CODE"}>
              <AiFillGithub className="mt-[.1rem]" />
            </Button>
          </Link>
          <Link href={card.links.live} target={"_blank"}>
            <Button text={"LIVE"}>
              <TbWorld className="mt-[.1rem]" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slider;
