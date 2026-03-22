"use client";
import SectionHead from "@/components/SectionHead";
import "./features.css";
import { features } from "./featureData";
import { useRef } from "react";
import { motion, useInView } from "motion/react";

const featureGrid = ["a", "b", "c", "d", "e"];

const FeatureItem = ({ feature, idx }: { feature: any; idx: any }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    margin: "-30px",
  });

  const directions = [
    { x: -60, y: 0 },
    { x: 60, y: 0 },
    { x: 0, y: -60 },
    { x: 0, y: 60 },
    { x: 0, y: 60 },
  ];
  return (
    <motion.div
      ref={ref}
      style={{
        gridArea: `${featureGrid[idx]}`,
      }}
      initial={{
        opacity: 0,
        scale: 0.9,
        filter: "blur(8px)",
        x: directions[idx]?.x || 0,
        y: directions[idx]?.y || 0,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
              x: 0,
              y: 0,
            }
          : {
              opacity: 0,
              scale: 0.9,
              filter: "blur(8px)",
              x: directions[idx]?.x || 0,
              y: directions[idx]?.y || 0,
            }
      }
      transition={{ delay: 0.05, duration: 0.35, ease: "linear" }}
      className="flex flex-col items-start gap-4 rounded-xl border border-(--content-border) bg-(--box-background) p-6 shadow-md hover:scale-[1.02] dark:shadow-gray-500/50"
    >
      <div className="rounded-md bg-(--muted) p-4 text-(--button)">
        {feature.header}
      </div>

      <h3 className="text-lg font-semibold text-(--foreground)">
        {feature.title}
      </h3>

      <p className="text-sm text-red-600 dark:text-red-300">
        {feature.contentNeg}
      </p>

      <p className="-mt-3 text-sm text-green-600 dark:text-green-300">
        {feature.contentPos}
      </p>
    </motion.div>
  );
};

const Features = () => {
  const refs = useRef([]);

  // detect when section enters viewport

  return (
    <div
      id="features"
      className="relative z-20 px-8 pt-8 shadow-[10px_10px_30px_4px_rgba(45,78,255,0.15)] md:px-16 md:pt-10 lg:px-24 lg:pt-14 dark:shadow-[10px_10px_30px_4px_rgba(45,78,255,0.15)]"
    >
      <SectionHead
        title="What WebFormSimplified solved?"
        description="Building forms from scratch is error-prone and time-consuming. We've solved
the common pain points so you don't have to."
      />

      <div className="feature-grid grid gap-4 pb-10">
        {features.map((feature, idx: number) => (
          <FeatureItem {...{ feature, idx }} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Features;
