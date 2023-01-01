export interface ProjectsType {
    id: number
    image?: string
    title: string
    techologies: string[]
    description: string
    links: { live: string, code: string }
}

const projects: ProjectsType[] = [
    {
        id: 1,
        title: "Hello",
        techologies: ["Javascript", "React", "Vite"],
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta voluptate numquam possimus eaque explicabo omnis velit, nesciunt aliquid beatae dolores",
        links: {
            live: "https://nigeriascrabble.com/tournaments/",
            code: "https://nigeriascrabble.com/tournaments/"
        }

    }, {
        id: 2,
        title: "Hello",
        techologies: ["Javascript", "React", "Vite"],
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta voluptate numquam possimus eaque explicabo omnis velit, nesciunt aliquid beatae dolores",
        links: {
            live: "https://nigeriascrabble.com/tournaments/",
            code: "https://nigeriascrabble.com/tournaments/"
        }

    }, {
        id: 3,
        title: "Hello",
        techologies: ["Javascript", "React", "Vite"],
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta voluptate numquam possimus eaque explicabo omnis velit, nesciunt aliquid beatae dolores",
        links: {
            live: "https://nigeriascrabble.com/tournaments/",
            code: "https://nigeriascrabble.com/tournaments/"
        }

    }, {
        id: 4,
        title: "Hello",
        techologies: ["Javascript", "React", "Vite"],
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta voluptate numquam possimus eaque explicabo omnis velit, nesciunt aliquid beatae dolores",
        links: {
            live: "https://nigeriascrabble.com/tournaments/",
            code: "https://nigeriascrabble.com/tournaments/"
        }

    },
]

export default projects