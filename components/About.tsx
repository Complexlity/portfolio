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
            className="max-w-[65
            ch] justify-start"
          >
            <p className="py-2 text-gray-600 dark:text-gray-100">
              I specialize in building mobile responsive front-end UI
              applications that connect with API's and other backend My primary
              skills involve using HTML, CSS, JavaScript (or TypeScript),
              ReactJs(as well as NextJs as needed) to build good and scalable
              applications and while also inculcating any necessary technology
              required to bring ideas to life technologies. I'm enthusiastic
              about learning new technology and I am a quick learner who can
              always pick new tech stacks as needed.
            </p>
            <p className="py-2 text-gray-600 dark:text-gray-100">
              I started web development in 2021, and have worked on building at{" "}
              <Link
                href="https://www.pulsar-technologies.com/public/"
                target={"_blank"}
                className="text-primary hover:underline dark:text-orange-300"
              >
                Pulsar Technologies
              </Link>{" "}
              using HTML and CSS. On the project completion I got more
              interested in creating more interactive, dynamic and beautiful web
              pages and this is when I learnt to build on the web using
              JavaScript and ReactJs. <br></br>I have experience working
              directly with clients and ensure that every assignment is carried
              out as specified. <br></br> In my spare time, I play some{" "}
              <Link
                href="https://lichess.org/Complexlity"
                target={"_blank"}
                className="text-primary hover:underline dark:text-orange-300"
              >
                chess
              </Link>{" "}
              as well as write technical articles
            </p>
            <p className="py-2 text-gray-600 dark:text-gray-100">
              I am open to working on Front-end projects and Job positions. Do{" "}
              <Link
                href="/#contact"
                target={"_blank"}
                className="text-primary hover:underline dark:text-orange-300"
              >
                send me a message
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
