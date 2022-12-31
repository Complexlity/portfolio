import projects from "./projects";
import Card from "./Card";

const Projects = () => {
  return (
    <div className="px-3">
      <h2 className="mb-3 font-bold">Projects</h2>
      <div className="grid gap-4 md:grid-cols-2 ">
        {projects.map((project) => (
          <Card key={project.id} card={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
