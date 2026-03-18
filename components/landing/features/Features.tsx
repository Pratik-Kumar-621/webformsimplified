"use client";
import SectionHead from "@/components/SectionHead";
import "./features.css";
import { features } from "./featureData";

const featureGrid = ["a", "b", "c", "d", "e"];
const Features = () => {
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
          <div
            key={idx}
            style={{
              gridArea: `${featureGrid[idx]}`,
            }}
            className={`dark:shadow-white-50 flex flex-col items-start gap-4 rounded-xl border border-(--content-border) bg-(--box-background) p-6 shadow-md transition duration-300 ease-in-out hover:scale-[1.02] dark:shadow-gray-500/50`}
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
