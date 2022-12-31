import Head from "next/head";
import About from "../components/About";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects/AllProjects";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-auto w-full max-w-[80rem] bg-gray-200 p-4">
        <Navbar />
        {/* Hero Section  */}
        <Hero />
        {/* About section  */}
        <About />
        {/* Projects Section */}
        <Projects />
      </div>
    </>
  );
}
