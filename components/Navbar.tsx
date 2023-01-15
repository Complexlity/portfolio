// React interfaces for context actions (first two) and hooks (last two)
import { Dispatch, SetStateAction, useEffect, useState } from "react";

// C Logo Icon
import complexIcon from "../assets/complex.png";

// Custom next js image components for optimization. See https://nextjs.org/docs/api-reference/next/image
import Image from "next/image";

// The spin hamburger menu. See https://hamburger-react.netlify.app/ for more information
import { Spin as Hamburger } from "hamburger-react";

// Custom context hook to read global state data. See /Contexts/ThemeContext.tsx for more information
import { useThemeContext } from "../Contexts/ThemeContext";

// Moon and sun icon used to toggle theme. See https://react-icons.github.io/react-icons/
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";

// This outputs the mobile or the desktop navbar depending on the width of the screen
const Navbar = () => {
  // Initializes the state values
  const [isOpen, setOpen] = useState(false); // Checks mobile menu open/close
  const [shadow, setShadow] = useState(false); // Checks desktop menu bottom shadow when scrolling

  // Gets the theme value as well as function to update the theme. See /Context/themeContext.tsx
  const darkTheme: boolean = useThemeContext().darkMode;
  const setDarkTheme = useThemeContext().setDarkMode;

  // Minimizes the update theme function for cleaner code in JSX element
  function toggleTheme() {
    setDarkTheme(!darkTheme);
  }

  // Checks for the scroll position and adds the shadow to the desktop menu. It also closes the moblie menu when the user starts to scroll
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

  // TailwindCSS style depending on if the shadow state is true or false
  const navLook = shadow
    ? "dark:bg-darkBg bg-[#ecf0f3] shadow-primaryLight"
    : "";

  // Handles the animation of the mobile menu
  const navTranslate = isOpen ? `0px` : `-20rem`;
  const animation = {
    transition: `all .5s ease-in-out`,
    transform: `translateY(${navTranslate})`,
  };

  return (
    <nav
      className={`${navLook} sticky top-0 z-10 flex-col justify-between py-2 font-raleway dark:text-gray-100 md:flex md:flex-row md:py-3 md:py-4`}
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

// NavLink type definition
type navlinks = {
  animation?: { transform: string; transition: string };
  mobile: boolean;
};

// This sub-component outputs a different style depending on whether it is on mobile or not.
//It uses the mobile property to check for it
// It also shows animation on mobile and not on desktop
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
