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
        techologies: ["NextJs", "Typescript", "Context API", "nodemailer", "TailwindCSS"],
        description: "I built ths app to connect with other developers easily as well as show my capabilities of learning new technologies (nodemailer, ContextAPI and NextJs) and steady continous growth as a developer.",
        links: {
            live: "/",
            code: "https://github.com/Complexlity/portfolio"
        },
        image: portfolio,

    }, {
        id: 2,
        title: "Online Store",
        techologies: ["ReactJs", "Typescript", "Redux", "TailwindCSS"],
        description: "This application exhibits the core features of e-commerce applications. I built this to solidify the concepts of React routing and State Manageement also to learn the importance of typescript in reducing user errors and how it is used in an actually application. It also helped me understand the importance theme in web accessibility and how I should always consider having them in my applications",
        links: {
            live: "https://complexlity-ecommerce-site.vercel.app/",
            code: "https://github.com/Complexlity/eCommerce-site"
        },
        image: onlineStore,

    }, {
        id: 3,
        title: "Memory Game",
        techologies: ["ReactJs", "firebase", "Framer Motion", "TailwindCSS"],
        description: "This application tends to test retentive abilities. I built this to solidify my knowledge of key react concepts like lifecycle of components and state. It was also built using framer motion to add animations when the card components mount",
        links: {
            live: "https://complexlity-memory-game.netlify.app/",
            code: "https://github.com/Complexlity/memory-game"
        },
        image: memoryGame,

    }, {
        id: 4,
        title: "Resume Builder",
        techologies: ["ReactJs", "API", "TailwindCSS"],
        description: "This application involves live transfer of information between components. It was built to understand the concepts of state and props in React as well as how to communicate with external API. Two random user generators as well as a random quote generator APIs were used to create generated profile information",
        links: {
            live: "https://complexlity-resume-builder.netlify.app/",
            code: "https://github.com/Complexlity/resume-builder.git"
        },
        image: resumeBuilder,

    },
    {
        id: 5,
        title: "Weather App",
        techologies: ["Javascript", "TailwindCSS", "API"],
        description: "This is the first application I built which involved fetching data externally. It used the openweather current weather data to populate the page. It also has the feature of using the browser navigation geolocation to make the user's location the default",
        links: {
            live: "https://complexlity-weather-app.netlify.app/",
            code: "https://github.com/Complexlity/weather-app"
        },
        image: weatherApp,

    },
    {
        id: 6,
        title: "Sketch Application",
        techologies: ["Javascript", "TailwindCSS"],
        description: "This application taught me how to use and the benefits of TailwindCSS as well as application development using Javascript. It also employed the use of some sort of 'state' which would go on to be the core features of Javascript frameworks",
        links: {
            live: "https://complexlity-etch-a-sketch.netlify.app/",
            code: "https://github.com/Complexlity/Etch-A-Sketch"
        },
        image: sketchApp,

    },
]

export default projects