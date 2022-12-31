import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between ">
      <Link href="/" className="py-[.4rem]">
        Home
      </Link>
      <div className="flex gap-6 sm:gap-12">
        <Link href="#projects" className="py-[.4rem]">
          Projects
        </Link>
        <Link
          href="#contact"
          className="rounded-[.35rem] bg-primary px-[.75rem] py-[.4rem] text-white"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
