import { motion } from "motion/react";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

const HeroSection = () => {
  const { resolvedTheme } = useTheme();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % 2);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const images =
    resolvedTheme === "dark"
      ? ["/assets/playground-dark.png", "/assets/themes-dark.png"]
      : ["/assets/playground-light.png", "/assets/theme-light.png"];
  return (
    <section className="relative z-10 grid min-h-[calc(100vh-150px)] w-full grid-cols-1 overflow-hidden bg-(--background) md:grid-cols-5">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.35, ease: "easeOut" }}
        className="pointer-events-none absolute inset-0 -top-[50%] z-0 rotate-30"
        style={{
          backgroundImage:
            "radial-gradient(var(--dotted-bg) 0.5px, transparent .5px)",
          backgroundSize: "5px 5px",
          scale: "2",
        }}
      />

      <div className="relative z-10 col-span-full flex flex-1 flex-col items-start justify-center px-8 md:px-16 lg:col-span-3 lg:px-24">
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
          className="z-1 text-left text-5xl leading-[1.05] font-bold tracking-tight text-balance text-(--foreground) sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.3, ease: "easeOut" }}
        >
          The Modern Way to Build Forms
        </motion.h1>

        <motion.p
          className="align-left mt-6 max-w-3xl text-justify text-base leading-relaxed text-(--muted-foreground)"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5, ease: "easeOut" }}
        >
          A production-grade{" "}
          <strong>
            {'"'}forms-focused{'"'}
          </strong>{" "}
          UI library designed for building complex form workflows. Accelerate
          development with prebuilt components, customizable templates, and a
          visual drag-and-drop playground with powerful validation and full
          React Hook Form + Zod integration.
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
      <motion.div
        className="jus z-10 hidden w-full content-center justify-center p-10 lg:col-span-2 lg:block"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.45, duration: 0.5, ease: "easeOut" }}
      >
        <div className="relative flex h-[420px] w-full items-center justify-center">
          {images.map((src, i) => {
            const position = (i - index + images.length) % images.length;

            return (
              <motion.div
                key={src}
                animate={{
                  scale: position === 0 ? 1 : 0.9,
                  y: position === 0 ? 0 : 40,
                  rotate: position === 0 ? -3 : -8,
                  opacity: position === 0 ? 1 : 0.6,
                  zIndex: images.length - position,
                }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="absolute"
              >
                <div className="overflow-hidden rounded-xl shadow-[0_30px_90px_-20px_rgba(0,0,0,0.35)]">
                  <Image
                    src={src}
                    alt="preview"
                    width={1100}
                    height={700}
                    className="object-contain"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
