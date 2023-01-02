import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="px-3">
      <hr className="border-t-2 border-gray-300" />
      <div className="mt-4 flex items-center justify-between text-xs text-slate-500 sm:text-base ">
        <p>
          Copyright &copy; Complexlity {year}
          <span className="ml-1 mr-1 inline-block h-full w-[2px] bg-slate-300 sm:ml-4 sm:mr-4 ">
            &nbsp;
          </span>
          Developer
        </p>
        <div className="flex gap-4 sm:gap-8 ">
          <Link href="https://www.github.com">
            <AiFillGithub className="h-4 w-4 sm:h-8 sm:w-8" color="gray" />
          </Link>
          <Link href="https://www.twitter.com">
            <FaTwitter className="h-4 w-4 sm:h-8 sm:w-8" color="gray" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
