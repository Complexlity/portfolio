import { skills } from "./skills";
import uniqid from "uniqid";
import Card from "./Card";

const Skills = () => {
  return (
    <section id="skills" className="mt-8 px-3">
      <h2 className="mb-2 text-xl font-bold uppercase tracking-widest text-primary dark:text-orange-300">
        Skills
      </h2>
      <h2 className="mb-2 py-4 font-raleway text-3xl font-semibold dark:text-gray-200">
        What I Can Do
      </h2>

      <div className="my-flex grid grid-cols-3 gap-8 md:grid-cols-5 md:gap-12">
        {skills.map((skill) => (
          <Card key={uniqid()} item={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
