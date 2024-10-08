import Image from "next/image";
import darkImg from "../assets/darkImage.png";
import lightImg from "../assets/lightImage.png";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { useThemeContext } from "../Contexts/ThemeContext";
import { SiFarcaster } from "react-icons/si";
import { FaCalendarAlt } from "react-icons/fa";

const Hero = () => {
  const theme = useThemeContext().darkMode;
  const avatar = theme ? darkImg : lightImg;
  const iconsStyles =
    "cursor-pointer rounded-full p-3 shadow-md shadow-gray-500 dark:shadow-orange-200 duration-300 ease-in hover:scale-110 sm:p-4";
  return (
    <section
      id="hero"
      className=" grid min-h-[calc(90vh)] items-center  space-y-8 dark:text-gray-100 md:grid-cols-2 "
    >
      <div className="mx-auto max-w-[800px] px-4 md:hidden">
        <Image
          className="mx-auto w-full "
          src={avatar}
          width={200}
          height={400}
          alt="Picture of Me"
          priority
        />
      </div>
      <div className="grid gap-3 px-1 text-center">
        <div className="font-raleway text-3xl font-bold text-gray-600 dark:text-gray-200 md:text-4xl lg:text-5xl">
          <h1 className="mb-2 sm:mb-4">
            Hi, I&apos;m{" "}
            <span className="text-primary dark:text-orange-300 ">
              Complexlity
            </span>
          </h1>
          <h1></h1>
        </div>
        <p className="description mx-auto w-full max-w-[45ch] md:m-0 md:max-w-[65ch]">
          A Software Engineer building the applications and tools. Reach out on
          any off my socials.
        </p>
        <div className="grid justify-center">
          <div className="bg- mx-auto flex w-full content-center items-center gap-4 py-4 md:gap-6">
            <Link
              href="https://github.com/Complexlity"
              target="_blank"
              rel="noreferrer"
            >
              <div className={iconsStyles}>
                <FaGithub size={24} />
              </div>
            </Link>
            <Link
              href="https://warpcast.com/complexlity"
              target="_blank"
              rel="noreferrer"
            >
              <div className={iconsStyles}>
                <SiFarcaster size={24} />
              </div>
            </Link>
            <Link
              href="https://www.linkedin.com/in/nwalozie-elijah-306b33215/"
              target="_blank"
              rel="noreferrer"
            >
              <div className={iconsStyles}>
                <FaLinkedinIn size={24} />
              </div>
            </Link>
            <Link
              href="https://cal.com/complexlity/30min"
              target="_blank"
              rel="noreferrer"
            >
              <div className={iconsStyles}>
                <FaCalendarAlt size={24} />
              </div>
            </Link>
            <Link href="/#contact">
              <div className={iconsStyles}>
                <AiOutlineMail size={24} />
              </div>
            </Link>
            {/* <Link href="#">
              <div className={iconsStyles}>
                <BsFillPersonLinesFill size={24} />
              </div>
            </Link> */}
          </div>
        </div>
      </div>
      <div className="mt-0 hidden px-4 md:block md:px-0">
        <Image
          className="mx-auto w-full "
          src={avatar}
          width={200}
          height={400}
          alt="Picture of Me"
        />
      </div>
    </section>
  );
};

export default Hero;
