import Link from "next/link";
import Frame from "./Frame";
import frames from "./data";

const Framepolio = () => {
  return (
    <section
      id="framesfolio"
      className="mt-2 flex w-full items-center px-2"
    >
      <div className="grid gap-8">

          <h2 className=" text-4xl font-bold  uppercase  text-primary dark:text-orange-300 lg:text-center">
            My Framesfolio
          </h2>


            <div>

          {frames.map((frame, index) => (
            <Frame frame={frame} key={index} index={index} />
          ))}
          </div>
                </div>

    </section>
  );
};

export default Framepolio;
