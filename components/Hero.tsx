import Image from "next/image";
import darkImg from "../assets/darkImage.png";
import lightImg from "../assets/lightImage.png";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
const Hero = ({ theme }) => {
  const avatar = theme ? darkImg : lightImg;
  const iconsStyles =
    "cursor-pointer rounded-full p-3 shadow-md shadow-gray-500 dark:shadow-orange-200 duration-300 ease-in hover:scale-110 sm:p-4";
  return (
    <section
      id="hero"
      className="grid h-[calc(100vh-7rem)] items-center space-y-8 pt-8 dark:text-white md:grid-cols-2"
    >
      <div className="px-4 md:hidden">
        <Image
          className="mx-auto w-full "
          src={avatar}
          width={200}
          height={400}
          alt="Picture of Me"
        />
      </div>
      <div className="grid gap-3 px-1 text-center md:text-start">
        <div className="font-raleway text-3xl font-bold text-gray-600 dark:text-gray-200 sm:text-4xl md:text-5xl">
          <h1 className="mb-2 sm:mb-4">
            Hi, I'm{" "}
            <span className="text-primary dark:text-orange-300 ">
              Complexlity
            </span>
          </h1>
          <h1>A Front-End Web Developer</h1>
        </div>
        <p className="mx-auto w-full max-w-[45ch] md:m-0 md:max-w-[65ch]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          dignissimos libero qui porro esse molestiae!
        </p>
        <div className="grid justify-center md:justify-start">
          <div className="bg- mx-auto flex w-full content-center items-center gap-4 py-4 md:gap-6">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div className={iconsStyles}>
                <FaLinkedinIn size={24} />
              </div>
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <div className={iconsStyles}>
                <FaGithub size={24} />
              </div>
            </a>
            <Link href="/#contact">
              <div className={iconsStyles}>
                <AiOutlineMail size={24} />
              </div>
            </Link>
            <Link href="#">
              <div className={iconsStyles}>
                <BsFillPersonLinesFill size={24} />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden px-4 md:block md:px-0">
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
