import React from "react";
import Image from "next/image";
import AboutImg from "../assets/hero-image.png";

const About = () => {
  return (
    <section id="about" className="flex w-full items-center px-2 md:h-screen">
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
              applications that connect with API's and other backend
              technologies. I'm passionate about learning new technologies and
              understand there is more than one way to accomplish a task. Though
              I am most proficient in building front-end applications using
              HTML, CSS, Javascript, and React, I am a quick learner and can
              pick up new tech stacks as needed. I believe that being a great
              developer is not using one specific language, but choosing the
              best tool for the job.
            </p>
            <p className="py-2 text-gray-600 dark:text-gray-100">
              I started web developement in 2013 managing multiple e-commerce
              websites on CMS platforms such as WordPress, BigCommerce, and
              Shopify. I have experience working directly with clients and
              taking mock wireframes all the way to deployed applications. In my
              spare time I run Code Commerce, a Youtube channel where I teach
              web developement and various front-end technologies.
            </p>
          </div>
        </div>
        {/* <div className="m-auto flex h-auto w-full items-center justify-center rounded-xl p-4 shadow-xl shadow-gray-400 duration-300 ease-in hover:scale-105">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div> */}
      </div>
    </section>
  );
};

export default About;
