
import blogPlatform from "./assets/blog-platform.png";

// Image component for the nextjs Image component. See Card.tsx for the <Image /> component in use
import { StaticImageData } from "next/image";

export interface ProjectsType {
  image: StaticImageData;
  title: string;
  description: string;
  link: string;
}

const projects: ProjectsType[] = [
  {
    title: "Blog Platform",
    description:
      "A place to write and share content with rich text editor offering smooth experience",
    link: "",
    image: blogPlatform,
  },


];

export default projects;