import { motion } from "motion/react";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative flex h-[calc(100vh-100px)] w-full flex-col overflow-hidden bg-(--background)">
      <div className="relative z-10 flex flex-1 flex-col items-start justify-center px-8 md:items-center md:px-16 lg:px-24">
        <div className="absolute top-4 left-10">
          <motion.div
            className="relative flex items-center"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.3 }}
          >
            <span className="relative z-2 h-8 w-34 rounded-full bg-gray-300 bg-linear-to-r from-pink-400 to-purple-400 text-center text-xs text-[10px] tracking-widest text-white dark:bg-gray-600 dark:from-pink-600 dark:to-purple-600"></span>
            <div className="absolute top-0.5 left-0.5 z-3 flex h-7 w-33 items-center justify-center rounded-full bg-(--background) text-center text-[10px] text-pink-600 dark:text-pink-400">
              v1.0 launching soon
            </div>
          </motion.div>
        </div>

        <motion.h1
          className="font-display text-foreground z-1 text-left text-5xl leading-[1.05] font-bold tracking-tight sm:text-5xl md:text-center md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.3, ease: "easeOut" }}
        >
          The Modern Way to <br />
          Build Forms
        </motion.h1>

        <motion.p
          className="align-left mt-6 max-w-xl text-left text-base leading-relaxed text-(--muted-foreground) md:text-center md:text-sm"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5, ease: "easeOut" }}
        >
          A production-grade{" "}
          <strong>
            {'"'}Forms focused{'" '}
          </strong>
          UI library for high-performance dev teams. Build powerful forms faster
          with prebuilt components, editable templates, and a drag-and-drop
          playground.
        </motion.p>

        <div className="mt-10 flex flex-col items-start justify-start md:items-center md:justify-center">
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.45, duration: 0.5, ease: "easeOut" }}
          >
            <Link href="/">
              <PrimaryButton
                value="Start Building"
                cn="w-auto"
                handleClick={() => {}}
              />
            </Link>
            <Link href="/">
              <SecondaryButton
                value="View Docs"
                cn="w-auto"
                handleClick={() => {}}
              />
            </Link>
          </motion.div>

          <motion.p
            className="font-body mt-5 text-[10px] tracking-widest text-(--muted-foreground) uppercase"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.45, duration: 0.5, ease: "easeOut" }}
          >
            Trusted by 100+ developers worldwide
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
