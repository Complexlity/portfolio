// React hook for state management
import { useState } from "react";
import Slider from "./Slider";

// Project data containing all images, links and description. See Projects.ts for more information
import projects from "./projects";

// This components essentially loops through the projects data and outputs a card for it as well as the headings and button of the Projects section
const Projects = () => {
  // Limits the number of initial projects to 3
  const shownProjects = projects.slice(0, 3);

  // Initializing used state values
  const [showHide, setShowHide] = useState(false); // For when the project is shown or hidden
  const [buttonText, setButtonText] = useState("SEE ALL PROJECTS"); // Button text when all projects is hidden or shown
  const [displayProjects, setDisplayProjects] = useState(shownProjects); // Projects currently shown

  // Function that shows or hides all projects
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
    <>
      <section id="projects" className="grid px-3">
        <h2 className=" text-xl font-bold uppercase tracking-widest text-primary dark:text-orange-300">
          Projects
        </h2>
        <h3 className="py-2 font-raleway text-3xl font-semibold dark:text-gray-200">
          What I&apos;ve Built
        </h3>
        <Slider />
      </section>
    </>
  );
};

export default Projects;
