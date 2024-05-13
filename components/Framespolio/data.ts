
import farcaster101 from "../../assets/farcaster101.png";
import framesGallery from "../../assets/framesGallery.png";
import work from "../../assets/work.png";
import sudoku from "../../assets/sudoku.png";
import learnAirstack from "../../assets/learnAirstack.png";
import buyMeACoffee from "../../assets/buyMeACoffee.png";


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
  {
    title: "Frames Gallery",
    description: "A no code tool to create a gallery in a frame",
    link: "https://frames-gallery.vercel.app/",
    image: framesGallery,
  },
  {
    title: "Learn Airstack In a Frame",
    description:
      "A quiz in three difficulty stages and a leaderboard for peopel to lear",
    link: "",
    image: learnAirstack,
  },
  {
    title: "Sudoku",
    description:
      "Play sudoku right in a frame. The game also has levels easy, medium and hard",
    link: "https://warpcast.com/complexlity/0x7ab489a6",
    image: sudoku,
  },
  {
    title: "Work",
    description:
      "A airdrop in a frame. It gifts farcaster users every hour which they can claim from the frame and gets rewarded in their wallet",
    link: "https://warpcast.com/complexlity/0xa9d5f7d3",
    image: work,
  },

  {
    title: "Buy Me A Coffee",
    description:
      "A monetisation frame that let's user gift their favorite creators for casting or sharing information. ",
    link: "https://warpcast.com/complexlity/0xd6347c18",
    image: framesGallery,
  },
];


export default frames;