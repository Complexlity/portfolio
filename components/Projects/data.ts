import blogPlatform from "./assets/blog-platform.png";
import creativeArtMarketplace from "./assets/creative-art-marketplace.png";
import onlineStore from "./assets/e-commerce-site.png";
import sketchApp from "./assets/etch-a-sketch.png";
import memoryGame from "./assets/memory-game.png";
import portfolio from "./assets/portfolio.png";
import stackdocs from "./assets/stackdocs.png";
import theNetworkState from "./assets/the-network-state.png";
import weatherApp from "./assets/weather-app.png";
import uniFarcasterSDK from "./assets/uni-farcaster-sdk.png";
import fcBlockBot from "./assets/fc-block-bot.png";
import bountychain from "./assets/bountychain.png";
import framesGallery from "./assets/frames-gallery.png";

// Image component for the nextjs Image component. See Card.tsx for the <Image /> component in use
import { StaticImageData } from "next/image";

export interface ProjectsType {
  image: StaticImageData | string;
  title: string;
  technologies: string[];
  description: string;
  links: { live: string; code?: string };
}

const projects: ProjectsType[] = [
  {
    title: "Bountychain",
    technologies: [
      "Nextjs",
      "Tailwindcss",
      "drizzle",
      "wagmi",
      "viem",
      "rainbowkit",
    ],
    description:
      "An fully decentralized p2p platform that lets you create bounties and manage them on the blockchain. Deployed on the arbitrum chain",
    links: {
      live: "https://www.bountychain.xyz",
    },
    image: bountychain,
  },
  {
    title: "Farcaster Block Bot",
    technologies: [
      "uni-farcaster-sdk",
      "Typescript",
      "farcaster",
      "redis",
      "viem",
      "cron",
      
    ],
    description:
      "This bot broadcasts on the Farcaster network each time a user is blocked by another user",
    links: {
      code: "https://github.com/Complexlity/fc-block-bot",
      live: "https://warpcast.com/blockbot",
    },
    image: fcBlockBot,
  },
  {
    title: "Uni Farcaster SDK",
    technologies: ["Typescript", "Nodejs", "npm", "Farcaster"],
    description:
      "An sdk the combines the services of Neynar and Airstack with top features and a single API for data retrieval from the farcaster protocol",
    links: {
      code: "https://github.com/Complexlity/uni-farcaster-sdk",
      live: "https://uni-farcaster-sdk.vercel.app/",
    },
    image: uniFarcasterSDK,
  },

  {
    title: "The Network State",
    technologies: ["Nextjs", "TailwindCSS", "Airtable", "CDN", "Canny"],
    description:
      'The fully online version of The "Network State" book built for the author of the book to aid the digital distribution.',
    links: {
      live: "https://thenetworkstate.com/",
    },
    image: theNetworkState,
  },
  {
    title: "Farcaster Frames Gallery",
    technologies: ["Nextjs", "React", "TailwindCSS", "Redis", "Farcaster"],
    description: "Convert images into farcaster frames in just a few seconds that could be viewed directly on warpcast",
    links: {
      live: "https://frames-gallery.vercel.app/",
      code: "https://github.com/Complexlity/image-gallery-frame"
    },
    image: framesGallery
    
},
  {
    title: "Blog Platform",
    technologies: [
      "Nextjs",
      "express",
      "Nodejs",
      "MongoDB",
      "AWS",
      "TailwindCSS",
    ],
    description:
      "A place to write and share content with rich text editor offering smooth experience and markdown upload support",
    links: {
      live: "https://blog.complexlity.dev",
      code: "https://github.com/Complexlity/blog-client",
    },
    image: blogPlatform,
  },
  
  {
    title: "Creative Arts Marketplace",
    technologies: ["Nextjs", "RainbowKit", "Formik/Yup", "TailwindCSS"],
    description:
      "A place to mint, showcase and sell your creative NFTs and beautiful Arts",
    links: {
      live: "https://www.creativearts.app/",
      // code: "https://github.com/Complexlity/creative-art-marketplace"
    },
    image: creativeArtMarketplace,
  },

  {
    title: "Stack Docs",
    technologies: ["ReactJs", "Docusaurus"],
    description: "Fully functioning documentation page for stackup",
    links: {
      live: "https://stackdocs.app/",
      // code: "https://github.com/Complexlity/stackdocs",
    },
    image: stackdocs,
  },
  {
    title: "Personal Portfolio",
    technologies: [
      "NextJs",
      "Typescript",
      "Context API",
      "nodemailer",
      "TailwindCSS",
    ],
    description: "This portfolio showing some projects I built and contact",
    links: {
      live: "/",
      code: "https://github.com/Complexlity/portfolio",
    },
    image: portfolio,
  },
  // {
  //   title: "Online Store",
  //   technologies: ["ReactJs", "Typescript", "Redux", "TailwindCSS"],
  //   description: "An e commerce application with routing and cart function",
  //   links: {
  //     live: "https://complexlity-ecommerce-site.vercel.app/",
  //     code: "https://github.com/Complexlity/eCommerce-site",
  //   },
  //   image: onlineStore,
  // },
  {
    title: "Memory Game",
    technologies: ["ReactJs", "firebase", "Framer Motion", "TailwindCSS"],
    description:
      "Memory game is a application that tends to test retentive memory. It also saves the users score on the cloud",
    links: {
      live: "https://complexlity-beta-memory-game.netlify.app/",
      code: "https://github.com/Complexlity/memory-game",
    },
    image: memoryGame,
  },
  {
    title: "Etch-A-Sketch",
    technologies: ["Javascript", "TailwindCSS"],
    description:
      "This an application that simulates the real etch-a-sketch. It contains black, random, erase, reset, lighten and darken brushes",
    links: {
      live: "https://complexlity-etch-a-sketch.netlify.app/",
      code: "https://github.com/Complexlity/Etch-A-Sketch",
    },
    image: sketchApp,
  },
  // {
  //     title: "Resume Builder",
  //     technologies: ["ReactJs", "API", "TailwindCSS"],
  //     description: "Resume Builder takes user information and creates a CV template with it. It also has the feature to generate dummy information",
  //     links: {
  //         live: "https://complexlity-resume-builder.netlify.app/",
  //         code: "https://github.com/Complexlity/resume-builder.git"
  //     },
  //     image: resumeBuilder,

  // },
  // {
  //   title: "Weather App",
  //   technologies: ["Javascript", "TailwindCSS", "API"],
  //   description:
  //     "An application to get the weather of any location. It uses the user's location as default",
  //   links: {
  //     live: "https://complexlity-weather-app.netlify.app/",
  //     code: "https://github.com/Complexlity/weather-app",
  //   },
  //   image: weatherApp,
  // },

  // {
  //     title: "Calculator",
  //     technologies: ["Javascript"],
  //     description: "Digital Calculator with all the basic arithmetic functions (addition, subtraction, division, multiplication, clear, delete, and zero-division error) ",
  //     links: {
  //         live: "https://complexlity-calculator.netlify.app/",
  //         code: "https://github.com/Complexlity/Calculator"
  //     },
  //     image: calculator,

  // },
  // {
  //     title: "Task List",
  //     technologies: ["Javascript"],
  //     description: "Todo application with functions to add, edit and delete items",
  //     links: {
  //         live: "https://complexlity-task-list.netlify.app/",
  //         code: "https://github.com/Complexlity/Task-List"
  //     },
  //     image: taskList,

  // },
  // {
  //     title: "Form Validation",
  //     technologies: ["Javascript"],
  //     description: "Client-side from validation program for texts, email, phone number and password",
  //     links: {
  //         live: "https://complexlity-form-validation.netlify.app/",
  //         code: "https://github.com/Complexlity/Form-Validation"
  //     },
  //     image: formValidation,

  // },
  // {
  //     title: "Tic Tac Toe",
  //     technologies: ["Javascript"],
  //     description: "An application similar to the real tic-tac-toe game and could be played by two players",
  //     links: {
  //         live: "https://complexlity-tic-tac-toe.netlify.app/",
  //         code: "https://github.com/Complexlity/tic-tac-toe"
  //     },
  //     image: ticTacToe,

  // }
];

export default projects;
