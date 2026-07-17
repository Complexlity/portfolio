import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useThemeContext } from "../Contexts/ThemeContext";

const Earnings = () => {
  const darkMode = useThemeContext().darkMode;
  const darkClass = darkMode ? "dark" : "";

  const earnings = [
    {
      title: "Bountycaster Profile",
      description: "My bountycaster profile showing some projects I worked and earned",
      link: "https://www.bountycaster.xyz/fid/213144/completed-bounties",
    },
    {
      title: "OpenReplay Blog",
      description: "My technical articles and blog posts published on the official open replay blog",
      link: "https://blog.openreplay.com/authors/nwalozie-elijah/",
    },
    {
      title: "Sololearn Profile",
      description: "My sololearn profile showing my learnings",
      link: "https://www.sololearn.com/en/profile/7680940",
    },
    {
      title: "GitHub Profile",
      description: "My personal github profile",
      link: "https://github.com/Complexlity",
    },
    {
      title: "Turnkey Challenge Twitter",
      description: "A bounty I won building on turnkey",
      link: "https://x.com/turnkeyhq/status/1887592837346435585?s=20",
    },
  ];
  return (
    <>
      <Head>
        <title>Complexlity | Earnings</title>
        <meta name="description" content="My earnings and achievements" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={darkClass}>
        <div className="dark:bg-darkBg min-h-screen">
          <div className="mx-auto w-full max-w-[80rem] px-4 pb-4 md:px-8">
            <Navbar />
            <div className="mx-auto grid">
              <section className="mt-8 flex w-full items-center px-2 md:min-h-screen">
                <div className="w-full">
                  <h2 className="text-xl font-bold uppercase tracking-widest text-primary dark:text-orange-300">
                    Earnings
                  </h2>
                  <h3 className="py-4 font-raleway text-3xl font-semibold dark:text-gray-200">
                    Support Links to Earnings and Platform Profiles
                  </h3>
                  <div className="mt-6 space-y-4">
                    {earnings.map((earning, index) => (
                      <div
                        key={index}
                        className="rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800"
                      >
                        <h4 className="font-raleway text-xl font-semibold text-gray-800 dark:text-gray-100">
                          {earning.title}
                        </h4>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">
                          {earning.description}
                        </p>
                        <a
                          href={earning.link}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-4 inline-block text-primary hover:underline dark:text-orange-300"
                        >
                          View Proof →
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Earnings;
