"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function Hero() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % 2);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  const images =
    resolvedTheme === "dark"
      ? ["/assets/playground-dark.png", "/assets/themes-dark.png"]
      : ["/assets/playground-light.png", "/assets/theme-light.png"];

  return (
    <section className="py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-primary mb-4 text-sm font-medium">
            V2.0 IS NOW LIVE
          </p>

          <h1 className="text-5xl leading-tight font-bold tracking-tight md:text-6xl">
            The Modern Way to <span className="text-primary">Build Forms</span>
          </h1>

          <p className="text-muted-foreground mt-6 max-w-xl text-lg">
            A production-grade UI library for high-performance teams. Build
            accessible, type-safe, and customizable forms in minutes.
          </p>

          <div className="mt-10 flex gap-4">
            <Button size="lg">Start Building</Button>
            <Button size="lg" variant="outline">
              View Docs
            </Button>
          </div>
        </div>

        {/* RIGHT STACKED IMAGES */}
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
      </div>
    </section>
  );
}
