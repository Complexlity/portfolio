
import farcaster101 from "../../assets/farcaster101.png";

// Image component for the nextjs Image component. See Card.tsx for the <Image /> component in use
import { StaticImageData } from "next/image";

export interface FramesType {
  image: StaticImageData;
  title: string;
  description: string;
  link: string;
}

const frames: FramesType[] = [
  {
    title: "Farcaster 101",
    description:
      "A fully interactive frame that teaches people all they need to knkow about farcaster",
    link: "https://warpcast.com/complexlity/0x6fa23d12",
    image: farcaster101,
  },
];

export default frames;