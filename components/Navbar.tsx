import Link from "next/link";
import complexIcon from "../assets/complex.png";
import { Spin as Hamburger } from "hamburger-react";
import { useState } from "react";

import Image from "next/image";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const navTranslate = isOpen ? `0px` : `-20rem`;
  const animation = {
    transition: `all .5s ease-in-out`,
    transform: `translateY(${navTranslate})`,
  };
  return (
    <nav className="sticky top-0 flex flex-col justify-between md:flex-row ">
      <div className="flex items-center justify-between">
        <div className="w-10 md:w-12">
          <Image className="max-h-full w-auto" src={complexIcon} alt="Logo" />
        </div>
        <div className="md:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
      <NavLinks animation={animation} mobile={true} />
      <NavLinks mobile={false} />
    </nav>
  );
};

type navlinks = {
  animation?: { transform: string; transition: string };
  mobile: boolean;
};

const NavLinks = ({ animation, mobile }: navlinks) => {
  const linkStyles = mobile ? `py-2 bg-gray-200  border-b-2 border-black` : "";

  const wrapperStyles = mobile
    ? `absolute right-0 left-0 top-12 flex flex-col bg-gray-300 pb-2 md:hidden`
    : `hidden gap-8 py-4 uppercase md:flex`;
  return (
    <div style={animation} className={wrapperStyles}>
      <Link href="#hero" className={linkStyles}>
        Home
      </Link>
      <Link href="#projects" className={linkStyles}>
        About
      </Link>
      <Link href="#projects" className={linkStyles}>
        Projects
      </Link>
      <Link href="#projects" className={linkStyles}>
        Skills
      </Link>
      <Link href="#projects" className={linkStyles}>
        Contact
      </Link>
    </div>
  );
};

export default Navbar;
