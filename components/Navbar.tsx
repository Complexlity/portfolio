import complexIcon from "../assets/complex.png";
import { Spin as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { useThemeContext } from "../Contexts/ThemeContext";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [shadow, setShadow] = useState(false);
  const darkTheme = useThemeContext().darkMode;
  const setDarkTheme = useThemeContext().setDarkMode;

  function toggleTheme() {
    setDarkTheme(!darkTheme);
  }
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
    window.addEventListener("scroll", () => setOpen(false));
  }, []);

  const navLook = shadow
    ? "dark:bg-darkBg bg-[#ecf0f3] shadow-primaryLight"
    : "";
  const navTranslate = isOpen ? `0px` : `-20rem`;
  const animation = {
    transition: `all .5s ease-in-out`,
    transform: `translateY(${navTranslate})`,
  };
  return (
    <nav
      className={`${navLook} sticky top-0 z-10 flex-col justify-between py-2 font-raleway dark:text-gray-100 md:flex md:flex-row md:py-4`}
    >
      <div className="flex items-center justify-between">
        <Link href={"/"} className="block w-10 md:w-12">
          <Image className="max-h-full w-auto" src={complexIcon} alt="Logo" />
        </Link>
        <div className="md:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
      <div onClick={setOpen.bind(this, false)}>
        <NavLinks animation={animation} mobile={true} />
      </div>

      <div className="flex items-center gap-4 ">
        <NavLinks mobile={false} />
        <div
          onClick={toggleTheme}
          className="fixed bottom-4 right-8 rounded-full bg-primary/70 p-3 dark:bg-gray-500/90 md:static md:block md:rounded-none md:bg-inherit md:dark:bg-inherit"
        >
          {!darkTheme && (
            <BsFillSunFill className="h-6 w-6 cursor-pointer text-gray-100 md:text-blue-500" />
          )}
          {darkTheme && (
            <BsMoonFill className="h-6 w-6 scale-[90%] cursor-pointer text-amber-200" />
          )}
        </div>
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
    ? `px-2 py-3  border-b-2 border-primary  dark:border-orange-400`
    : "";

  const wrapperStyles = mobile
    ? `absolute right-0 left-0 bg-gray-100 px-2 pb-2 dark:bg-darkBg  top-16 flex flex-col  md:hidden`
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
