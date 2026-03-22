import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "motion/react";

const Playground = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-30px",
  });
  return (
    <div className="">
      <motion.div
        ref={ref}
        initial={{ scale: 0.85 }}
        animate={isInView ? { scale: 1 } : { scale: 0.85 }}
        transition={{ duration: 0.3, ease: "linear" }}
        className="mx-8 my-10 flex flex-col items-center justify-center gap-5 rounded-2xl bg-(--button) px-10 py-10 md:mx-16 md:px-16 lg:mx-24 lg:flex-row lg:px-20"
      >
        <div className="col-span-full flex w-full -rotate-2 flex-col items-center gap-2 md:col-span-3 lg:items-start">
          <h2 className="text-center text-5xl font-bold text-white lg:text-left">
            Try it in the Playground
          </h2>
          <p className="mt-3 block text-center text-white lg:text-left">
            Experience the full power of WebFormSimplified live in your browser.
            Test components, customize forms instantly, preview changes in real
            time, and export clean, production-ready code within seconds with
            ease today.
          </p>
          <div className="mt-4 flex items-center gap-4">
            <Button
              variant="default"
              className="h-12 w-40 cursor-pointer rounded-lg bg-white px-5 font-bold text-(--button) transition-all duration-300 ease-in-out hover:bg-white/80"
            >
              <Link href="/">Open Playground</Link>
            </Button>
            <Button
              variant="default"
              className="h-12 w-40 cursor-pointer rounded-lg border border-white px-5 font-bold text-white transition-all duration-300 ease-in-out hover:border-white/80 hover:text-white/80"
            >
              Watch Demo
            </Button>
          </div>
        </div>
        <div className="col-span-full rotate-3 md:col-span-2">
          <Image
            src="/assets/playground-code.png"
            width={1200}
            height={900}
            className="min-h-60 min-w-100"
            alt="Playground"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Playground;
