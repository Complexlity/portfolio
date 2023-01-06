import onlineStore from "./gifs/e-commerce-site.gif"
import memoryGame from './gifs/memory-game.gif'
import sketchApp from './gifs/etch-a-sketch.gif'
import weatherApp from './gifs/weather-app.gif'
import resumeBuilder from './gifs/resume-builder.gif'
import { StaticImageData } from "next/image"
import portfolio from "./gifs/portfolio.gif"

export interface ProjectsType {
    id: number
    image: StaticImageData
    title: string
    techologies: string[]
    description: string
    links: { live: string, code: string }
}

const projects: ProjectsType[] = [
    {
        id: 1,
        title: "Personal Portfolio",
        techologies: ["Typescript", "React", "Redux", "TailwindCSS"],
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta voluptate numquam possimus eaque explicabo omnis velit, nesciunt aliquid beatae dolores",
        links: {
            live: "/",
            code: "https://github.com/Complexlity/portfolio"
        },
        image: portfolio,

    }, {
        id: 2,
        title: "Online Store",
        techologies: ["Typescript", "React", "Redux", "TailwindCSS"],
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta voluptate numquam possimus eaque explicabo omnis velit, nesciunt aliquid beatae dolores",
        links: {
            live: "https://e-commerce-site-alpha.vercel.app/",
            code: "https://github.com/Complexlity/eCommerce-site"
        },
        image: onlineStore,

    }, {
        id: 2,
        title: "Memory Game",
        techologies: ["React", "Framer Motion", "TailwindCSS"],
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta voluptate numquam possimus eaque explicabo omnis velit, nesciunt aliquid beatae dolores",
        links: {
            live: "https://complexlity-memory-game.netlify.app/",
            code: "https://github.com/Complexlity/memory-game"
        },
        image: memoryGame,

    }, {
        id: 4,
        title: "Resume Builder",
        techologies: ["ReactJs", "TailwindCSS"],
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta voluptate numquam possimus eaque explicabo omnis velit, nesciunt aliquid beatae dolores",
        links: {
            live: "https://complexlity-resume-builder.netlify.app/",
            code: "https://github.com/Complexlity/resume-builder.git"
        },
        image: resumeBuilder,

    }, {
        id: 5,
        title: "Sketch Application",
        techologies: ["Javascript", "TailwindCSS"],
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta voluptate numquam possimus eaque explicabo omnis velit, nesciunt aliquid beatae dolores",
        links: {
            live: "https://complexlity-etch-a-sketch.netlify.app/",
            code: "https://github.com/Complexlity/Etch-A-Sketch"
        },
        image: sketchApp,

    }, {
        id: 6,
        title: "Weather App",
        techologies: ["Javascript", "TailwindCSS", "API"],
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta voluptate numquam possimus eaque explicabo omnis velit, nesciunt aliquid beatae dolores",
        links: {
            live: "https://complexlity-weather-app.netlify.app/",
            code: "https://github.com/Complexlity/weather-app"
        },
        image: weatherApp,

    },
]

export default projects