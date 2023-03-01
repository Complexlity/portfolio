import portfolio from "./assets/portfolio.png"
import onlineStore from "./assets/e-commerce-site.png"
import memoryGame from './assets/memory-game.png'
import sketchApp from './assets/etch-a-sketch.png'
import weatherApp from './assets/weather-app.png'
import resumeBuilder from './assets/resume-builder.png'
import taskList from './assets/task-list.png'
import formValidation from './assets/form-validation.png'
import calculator from './assets/calculator.png'
import ticTacToe from './assets/tic-tac-toe.png'
import { StaticImageData } from "next/image"

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
        description: "This portfolio showing my skill, projects and contact",
        links: {
            live: "/",
            code: "https://github.com/Complexlity/portfolio"
        },
        image: portfolio,

    }, {
        id: 2,
        title: "Online Store",
        techologies: ["ReactJs", "Typescript", "Redux", "TailwindCSS"],
        description: "An e commerce application with routing and cart function",
        links: {
            live: "https://complexlity-ecommerce-site.vercel.app/",
            code: "https://github.com/Complexlity/eCommerce-site"
        },
        image: onlineStore,

    }, {
        id: 3,
        title: "Memory Game",
        techologies: ["ReactJs", "firebase", "Framer Motion", "TailwindCSS"],
        description: "Memory game is a application that tends to test retentive memory. It also saves the users score on the cloud",
        links: {
            live: "https://complexlity-memory-game.netlify.app/",
            code: "https://github.com/Complexlity/memory-game"
        },
        image: memoryGame,

    }, {
        id: 4,
        title: "Resume Builder",
        techologies: ["ReactJs", "API", "TailwindCSS"],
        description: "Resume Builder takes user information and creates a CV template with it. It also has the feature to generate dummy information",
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
        description: "An application to get the weather of any location. It uses the user's location as default",
        links: {
            live: "https://complexlity-weather-app.netlify.app/",
            code: "https://github.com/Complexlity/weather-app"
        },
        image: weatherApp,

    },
    {
        id: 6,
        title: "Etch-A-Sketch",
        techologies: ["Javascript", "TailwindCSS"],
        description: "This an application that simulates the real etch-a-sketch. It contains black, random, erase, reset, lighten and darken brushes",
        links: {
            live: "https://complexlity-etch-a-sketch.netlify.app/",
            code: "https://github.com/Complexlity/Etch-A-Sketch"
        },
        image: sketchApp,

    },
    {
        id: 7,
        title: "Calculator",
        techologies: ["Javascript"],
        description: "Digital Calculator with all the basic arithmetic functions (addition, subtraction, division, multiplication, clear, delete, and zero-division error) ",
        links: {
            live: "https://complexlity-calculator.netlify.app/",
            code: "https://github.com/Complexlity/Calculator"
        },
        image: calculator,

    },
    {
        id: 8,
        title: "Task List",
        techologies: ["Javascript"],
        description: "Todo application with functions to add, edit and delete items",
        links: {
            live: "https://complexlity-task-list.netlify.app/",
            code: "https://github.com/Complexlity/Task-List"
        },
        image: taskList,

    },
    {
        id: 9,
        title: "Form Validation",
        techologies: ["Javascript"],
        description: "Client-side from validation program for texts, email, phone number and password",
        links: {
            live: "https://complexlity-form-validation.netlify.app/",
            code: "https://github.com/Complexlity/Form-Validation"
        },
        image: formValidation,

    },
    {
        id: 10,
        title: "Tic Tac Toe",
        techologies: ["Javascript"],
        description: "An application similar to the real tic-tac-toe game and could be played by two players",
        links: {
            live: "https://complexlity-tic-tac-toe.netlify.app/",
            code: "https://github.com/Complexlity/tic-tac-toe"
        },
        image: ticTacToe,

    }
]

export default projects