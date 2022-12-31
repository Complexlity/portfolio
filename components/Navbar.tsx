import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flex justify-between ">
      <Link href="/" className="py-2">
        Home
      </Link>
      <div className="flex gap-6 sm:gap-12">
        <Link href="#projects" className="py-2">
          Projects
        </Link>
        <Button text="Contact" />
      </div>
    </nav>
  );
};

export default Navbar;
