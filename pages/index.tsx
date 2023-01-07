import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { useThemeContext } from "../Contexts/ThemeContext";

export default function Home() {
  const darkMode = useThemeContext().darkMode;
  const darkClass = darkMode ? "dark" : "";
  return (
    <>
      <Head>
        <title>Complexlity | Front-End Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={darkClass}>
        <div className="dark:bg-darkBg">
          <div className={" mx-auto w-full max-w-[80rem] px-4 pb-4  md:px-8  "}>
            <Navbar />
            <div className=" mx-auto grid">
              {/* Hero Section  */}
              <Hero />
              {/* About section  */}
              <About />
              {/* <About /> */}
              {/* Projects Section */}
              <Projects />
              {/* Skills Section */}
              <Skills />
              {/* Contact Section */}
              <Contact />
              {/* Footer Section */}
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
