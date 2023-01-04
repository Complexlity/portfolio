import projects from "./projects";
import Card from "./Card";
import Button from "../Button";
import { AnchorHTMLAttributes, DetailedHTMLProps, useState } from "react";

const Projects = () => {
  const shownProjects = projects.slice(0, 3);
  const [showHide, setShowHide] = useState(false);
  const [buttonText, setButtonText] = useState("SEE ALL PROJECTS");
  const [displayProjects, setDisplayProjects] = useState(shownProjects);
  function showProjects() {
    if (showHide) {
      setButtonText("SEE ALL PROJECTS");
      setDisplayProjects(shownProjects);
    } else {
      setButtonText("HIDE ALL PROJECTS");
      setDisplayProjects([...projects]);
    }
    setShowHide(!showHide);
  }

  return (
    <section id="projects" className="grid px-3">
      <h2 className=" text-xl font-bold uppercase tracking-widest text-primary dark:text-orange-300">
        Projects
      </h2>
      <h3 className="py-4 font-raleway text-3xl font-semibold dark:text-gray-200">
        What I've Built
      </h3>
      <div className="myGrid grid gap-4 md:grid-cols-2 lg:grid-cols-3 ">
        {displayProjects.map((project) => (
          <Card key={project.id} card={project} />
        ))}
      </div>
      <a onClick={showProjects} className="pointer grid">
        <Button
          text={buttonText}
          styles={
            "w-full mx-auto mt-8 max-w-[200px] py-[.8rem] hover:dark:bg-orange-500 uppercase"
          }
        />
      </a>
    </section>
  );
};

export default Projects;
