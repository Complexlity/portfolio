import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="mt-8 px-3">
      <hr className="border-t-2 border-gray-300" />
      <div className="mt-4 flex items-center justify-between text-[.65rem] text-slate-500 dark:text-amber-100  sm:text-base ">
        <p>
          Copyright &copy; Complexlity {year}
          <span className="ml-1 mr-1 inline-block h-full w-[2px] bg-slate-300 sm:ml-4 sm:mr-4 ">
            &nbsp;
          </span>
          Developer
        </p>
        <div className="flex gap-4 sm:gap-8 ">
          <Link href="https://www.github.com/Complexlity">
            <AiFillGithub
              className="h-4 w-4 text-gray-400 dark:text-amber-100 sm:h-8 sm:w-8"
              color=""
            />
          </Link>
          <Link href="https://www.twitter.com">
            <FaTwitter
              className="h-4 w-4 text-gray-400 dark:text-amber-100 sm:h-8 sm:w-8"
              color=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
