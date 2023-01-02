import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="px-3">
      <hr className="border-t-2 border-gray-300" />
      <div className="mt-4 flex items-center justify-between text-slate-500 ">
        <p>
          Copyright &copy; Complexlity {year}
          <span className="ml-4 mr-4 inline-block h-full w-[2px] bg-slate-300 ">
            &nbsp;
          </span>
          Trademark Policy
        </p>
        <div className="flex gap-8 ">
          <Link href="https://www.github.com">
            <AiFillGithub color="gray" size={30} />
          </Link>
          <Link href="https://www.twitter.com">
            <FaTwitter color="gray" size={30} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
