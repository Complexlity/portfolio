// Custom next js image components for optimization as well as image interface. See https://nextjs.org/docs/api-reference/next/image
import Image, { StaticImageData } from "next/image";

// Custom next js components for routing. See https://nextjs.org/docs/api-reference/next/link
import Link from "next/link";

// Hero images which are shown depending on the current theme
import darkImg from "../assets/darkImage.png";
import lightImg from "../assets/lightImage.png";

// All social icons. See https://react-icons.github.io/react-icons/
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

// Custom context hook to read global state data. See /Contexts/ThemeContext.tsx for more information
import { useThemeContext } from "../Contexts/ThemeContext";

// Outputs all data in the hero section including the images, social links and texts
const Hero = () => {
  // Get the current them from the global state
  const theme: boolean = useThemeContext().darkMode;

  // Set the avatar object based on the current theme value
  const avatar: StaticImageData = theme ? darkImg : lightImg;

  // Variable containing tailwind styles to avoid repetition
  const iconsStyles =
    "cursor-pointer rounded-full p-3 shadow-md shadow-gray-500 dark:shadow-orange-200 duration-300 ease-in hover:scale-110 sm:p-4";
  return (
    <section
      id="hero"
      className="grid-flow-rows grid  h-[calc(100vh-5rem)] items-center space-y-8 dark:text-gray-100 md:grid-cols-2"
    >
      <div className="mx-auto max-w-[800px] px-4 md:hidden">
        <Image
          className="mx-auto w-full "
          src={avatar}
          width={200}
          height={400}
          alt="Picture of Me"
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
          <h1>A Front-End Web Developer</h1>
        </div>
        <p className="mx-auto w-full max-w-[45ch] md:m-0 md:max-w-[65ch]">
          I am focused on building responsive and accessiblity compliant web
          applications and integrating APIs and back-end technologies .
        </p>
        <div className="grid justify-center">
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
