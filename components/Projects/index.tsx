import Slider from "./Slider";

const Projects = () => {
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
