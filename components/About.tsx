import Link from "next/link";

const About = () => {
  return (
    <section
      id="about"
      className="mt-2 flex w-full items-center px-2 md:h-screen"
    >
      <div className="  gap-8 md:grid">
        <div className="">
          <h2 className=" text-xl font-bold  uppercase tracking-widest text-primary dark:text-orange-300">
            About
          </h2>
          <h3 className="py-2 font-raleway text-3xl  font-semibold dark:text-gray-200">
            Who I Am
          </h3>
          <div
            className="description max-w-[70ch] justify-start"
          >
            <p className="py-2 text-gray-600 dark:text-gray-100">
              My primary
              skills involve using Typescript,
              ReactJs and Nodejs to build good and scalable applications and
              while also adding any necessary technology required to bring
              ideas to life. I'm enthusiastic about learning new
              technology and I am a quick learner who can always pick new tech
              stacks as needed.
            </p>
            <p className="py-2 text-gray-600 dark:text-gray-100">
              Currently breaking things
              at{" "}
              <Link
                href="https://www.pulsar-technologies.com/public/"
                target={"_blank"}
                rel="noreferrer"
                className="text-primary hover:underline dark:text-orange-300"
              >
                Pulsar Technologies.
              </Link>{" "}
              <br></br> In my spare time, I play some{" "}
              <Link
                href="https://lichess.org/Complexlity"
                target={"_blank"}
                rel="noreferrer"
                className="text-primary hover:underline dark:text-orange-300"
              >
                chess
              </Link>{" "}
              as well as write{" "}
              <Link
                href="https://blog.openreplay.com/authors/nwalozie-elijah/"
                target={"_blank"}
                rel="noreferrer"
                className="text-primary hover:underline dark:text-orange-300"
              >
                technical articles.
              </Link>{" "}
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
