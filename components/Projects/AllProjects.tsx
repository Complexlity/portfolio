import projects from "./projects";
import Card from "./Card";
import Button from "../Button";

const Projects = () => {
  return (
    <div className="space-y-4 px-3">
      <h2 className="mb-3 font-bold">Projects</h2>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 ">
        {projects.map((project) => (
          <Card key={project.id} card={project} />
        ))}
      </div>
      <div className="mx-auto grid w-[40%]">
        <Button text="SEE ALL PROJECTS" />
      </div>
    </div>
  );
};

export default Projects;
