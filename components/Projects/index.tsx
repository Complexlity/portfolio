import projects from "./projects";
import Card from "./Card";
import Button from "../Button";
import { useState } from "react";

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
      <h2 className=" text-xl font-bold uppercase tracking-widest text-primary">
        Projects
      </h2>
      <h2 className=" py-4 font-raleway text-3xl font-semibold">
        What I've Built
      </h2>
      <div className="myGrid grid gap-4 md:grid-cols-2 lg:grid-cols-3 ">
        {displayProjects.map((project) => (
          <Card key={project.id} card={project} />
        ))}
      </div>
      <div onClick={showProjects} className="pointer grid">
        <Button text={buttonText} styles={"mt-4 w-1/2 mx-auto"} />
      </div>
    </section>
  );
};

export default Projects;
