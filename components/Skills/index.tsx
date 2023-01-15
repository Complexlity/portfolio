// Skills data containing all images and titles. See skills.ts for more information
import { skills } from "./skills";

// This package creates a unique string which I used as key in react map. See https://www.npmjs.com/package/uniqid
import uniqid from "uniqid";

// Gets the card component which takes the skills data and outputs a card for it
import Card from "./Card";

// This components essentially loops through the skills data and outputs a card for it as well as the headings of the skills section
const Skills = () => {
  return (
    <section id="skills" className="mt-8 px-3">
      <h2 className="mb-2 text-xl font-bold uppercase tracking-widest text-primary dark:text-orange-300">
        Skills
      </h2>
      <h3 className="mb-4  font-raleway text-3xl font-semibold dark:text-gray-200">
        What I Can Do
      </h3>

      <div className="grid grid-cols-3 gap-8 md:grid-cols-4 md:gap-12 lg:grid-cols-5">
        {skills.map((skill) => (
          <Card key={uniqid()} item={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
