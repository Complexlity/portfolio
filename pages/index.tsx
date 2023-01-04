import Head from "next/head";
import About from "../components/About";
import About2 from "../components/About2";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { useThemeContext } from "./Contexts/ThemeContext";

export default function Home() {
  const darkMode = useThemeContext().darkMode;
  const darkClass = darkMode ? "dark" : "";
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={darkClass}>
        <div className="dark:bg-darkBg">
          <div className={" mx-auto w-full max-w-[80rem] px-8  pb-4  "}>
            <Navbar />
            <div className=" mx-auto grid">
              {/* Hero Section  */}
              <Hero />
              {/* About section  */}
              <About2 />
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
