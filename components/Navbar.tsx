import Link from "next/link";
import complexIcon from "../assets/complex.png";

import Image from "next/image";

const linkStyles = `py-2 bg-orange-500 border-b-2 border-black`;

const Navbar = () => {
  return (
    <nav className="flex flex-col justify-between md:flex-row ">
      <div className="w-10 md:w-12">
        <Image className="max-h-full w-auto" src={complexIcon} alt="Logo" />
      </div>
      <div className="flex flex-col md:flex-row md:gap-12">
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
