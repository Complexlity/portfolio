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
      links: ["https://www.bountycaster.xyz/fid/213144/completed-bounties"],
    },
    {
      title: "OpenReplay Blog",
      description: "My technical articles and blog posts published on the official open replay blog",
      links: ["https://blog.openreplay.com/authors/nwalozie-elijah/"],
    },
    {
      title: "Sololearn Profile",
      description: "My sololearn profile showing my learnings",
      links: ["https://www.sololearn.com/en/profile/7680940"],
    },
    {
      title: "GitHub Profile",
      description: "My personal github profile",
      links: ["https://github.com/Complexlity"],
    },
   {
      title: "Turnkey Challenge Twitter",
      description: "A bounty I won building on turnkey",
      links: ["https://x.com/turnkeyhq/status/1887592837346435585?s=20"],
    },
  {
    title: "Stackup Hackathon Win",
    description: "Hack challenges I won on stackup",
    links: [
      "https://x.com/StackUpHQ/status/1806243708402127293?s=20",
      "https://x.com/StackUpHQ/status/1734874613837123915?s=20",
    ],
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
                        <div className="mt-4 space-y-2">
                          {earning.links.map((link, linkIndex) => (
                            <>
                              <a
                                key={linkIndex}
                                href={link}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-block text-primary hover:underline dark:text-orange-300"
                              >
                                Link {linkIndex > 0 ? linkIndex + 1 : ""} →
                              </a>
                              <br />
                            </>
                          ))}
                        </div>
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
