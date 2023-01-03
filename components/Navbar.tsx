import Link from "next/link";
import complexIcon from "../assets/complex.png";
import { Spin as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";

import Image from "next/image";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  const navLook = shadow ? "bg-white shadow-primaryLight" : "";
  const navTranslate = isOpen ? `0px` : `-20rem`;
  const animation = {
    transition: `all .5s ease-in-out`,
    transform: `translateY(${navTranslate})`,
  };
  return (
    <nav
      className={`${navLook} sticky top-0 z-10 flex-col justify-between md:flex md:flex-row`}
    >
      <div className="flex items-center justify-between">
        <div className="w-10 md:w-12">
          <Image className="max-h-full w-auto" src={complexIcon} alt="Logo" />
        </div>
        <div className="md:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
      <div onClick={setOpen.bind(this, false)}>
        <NavLinks animation={animation} mobile={true} />
      </div>

      <div onClick={setOpen.bind(this, false)}>
        <NavLinks mobile={false} />
      </div>
    </nav>
  );
};

type navlinks = {
  animation?: { transform: string; transition: string };
  mobile: boolean;
};

const NavLinks = ({ animation, mobile }: navlinks) => {
  const linkStyles = mobile
    ? `px-2 py-2 bg-gray-200  border-b-2 border-black`
    : "";

  const wrapperStyles = mobile
    ? `absolute right-0 left-0 top-12 flex flex-col bg-gray-300 pb-2 md:hidden`
    : `hidden gap-8 py-4 uppercase md:flex`;
  return (
    <div style={animation} className={wrapperStyles}>
      <a href="#hero" className={linkStyles}>
        Home
      </a>
      <a href="#about" className={linkStyles}>
        About
      </a>
      <a href="#projects" className={linkStyles}>
        Projects
      </a>
      <a href="#skills" className={linkStyles}>
        Skills
      </a>
      <a href="#contact" className={linkStyles}>
        Contact
      </a>
    </div>
  );
};

export default Navbar;
