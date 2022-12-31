import Image from "next/image";
import avatar from "../assets/hero-image.png";
import Button from "./Button";
const Hero = () => {
  return (
    <div className="grid items-center space-y-8 pt-8 md:grid-cols-2">
      <div className="space-y-8 px-4 md:hidden">
        <Image
          className="mx-auto w-full "
          src={avatar}
          width={200}
          height={400}
          alt="Picture of Me"
        />
      </div>
      <div className="grid gap-3 px-1 text-center md:text-start">
        <p className="text-lg">DEVELOPER</p>
        <p className="text-4xl font-semibold text-primary">Complexlity</p>
        <p className="mx-auto w-full max-w-[45ch] md:m-0 md:max-w-[65ch]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          dignissimos libero qui porro esse molestiae!
        </p>
        <div className="grid justify-center md:justify-start">
          <Button text="Contact Me" />
        </div>
      </div>
      <div className="hidden space-y-8 px-4 md:block md:px-0">
        <Image
          className="mx-auto w-full "
          src={avatar}
          width={200}
          height={400}
          alt="Picture of Me"
        />
      </div>
    </div>
  );
};

export default Hero;
