import projects from "./projects";
import Card from "./Card";
import Button from "../Button";
import { useState } from "react";
import uniqid from "uniqid";

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
    <div className="space-y-4 px-3">
      <h2 className="mb-3 font-bold">Projects</h2>
      <div className="myGrid grid gap-4 md:grid-cols-3 ">
        {displayProjects.map((project) => (
          <Card key={project.id} card={project} />
        ))}
      </div>
      <div onClick={showProjects} className="pointer mx-auto grid w-[40%]">
        <Button key={uniqid()} text={buttonText} />
      </div>
    </div>
  );
};

export default Projects;
