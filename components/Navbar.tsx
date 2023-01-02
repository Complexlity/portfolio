import Link from "next/link";
import complexIcon from "../assets/complex.png";
import { Spin as Hamburger } from "hamburger-react";
import { useState } from "react";

import Image from "next/image";

const linkStyles = `py-2 bg-orange-500 border-b-2 border-black`;

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const navTranslate = isOpen ? `0px` : `-130%`;

  return (
    <nav className="flex flex-col justify-between md:flex-row ">
      <div className="flex justify-between">
        <div className="w-10 md:w-12">
          <Image className="max-h-full w-auto" src={complexIcon} alt="Logo" />
        </div>
        <div className="md:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
      <div
        className={`fixed top-12  flex flex-col md:flex-row md:gap-12 translate-y-[${navTranslate}]`}
      >
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
    </nav>
  );
};

export default Navbar;
