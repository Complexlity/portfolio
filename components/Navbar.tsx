import Link from "next/link";
import complexIcon from "../assets/complex.png";
import avatar from "../assets/hero-image.png";

import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex  justify-between ">
      <div>
        <Image className="max-h-full w-auto" src={complexIcon} alt="Logo" />
      </div>
      <div className="flex gap-4 sm:gap-12">
        <Link href="#hero" className="py-2">
          Home
        </Link>
        <Link href="#projects" className="py-2">
          About
        </Link>
        <Link href="#projects" className="py-2">
          Projects
        </Link>
        <Link href="#projects" className="py-2">
          Skills
        </Link>
        <Link href="#projects" className="py-2">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
