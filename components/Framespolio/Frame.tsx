import Link from "next/link";
import Image from "next/image";
import darkImage from "../../assets/darkImage.png"
export default function Frame() {
  return (
    <section className="w-full">
      <div className="container grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Title
          </h2>
          <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui eaque id laudantium harum adipisci atque facere ut ipsum nisi recusandae.
          </p>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="#"
          >
            See Preview
          </Link>
        </div>
        <Image
          alt="Project Screenshot"
          className="mx-auto aspect-[4/3] w-full overflow-hidden rounded-xl object-cover object-center"
          height="600"
          src={darkImage}
          width="800"
        />
      </div>
    </section>
  );
}
