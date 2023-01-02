import Image from "next/image";
import avatar from "../assets/hero-image.png";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
const Hero = () => {
  return (
    <div className="grid items-center space-y-8 pt-8 md:grid-cols-2">
      <div className="space-y-8 px-4 md:hidden">
        <Image
          className="mx-auto w-full "
          src={avatar}
          width={200}
          height={400}
          alt="Picture of Me"
        />
      </div>
      <div className="grid gap-3 px-1 text-center md:text-start">
        <p className="text-lg">DEVELOPER</p>
        <p className="text-4xl font-semibold text-primary">Complexlity</p>
        <p className="mx-auto w-full max-w-[45ch] md:m-0 md:max-w-[65ch]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          dignissimos libero qui porro esse molestiae!
        </p>
        <div className="grid justify-center md:justify-start">
          <div className="mx-auto flex w-full content-center items-center gap-6 py-4">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110">
                <FaLinkedinIn />
              </div>
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <div className="cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110">
                <FaGithub />
              </div>
            </a>
            <Link href="/#contact">
              <div className="cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="#">
              <div className="cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden space-y-8 px-4 md:block md:px-0">
        <Image
          className="mx-auto w-full "
          src={avatar}
          width={200}
          height={400}
          alt="Picture of Me"
        />
      </div>
    </div>
  );
};

export default Hero;
