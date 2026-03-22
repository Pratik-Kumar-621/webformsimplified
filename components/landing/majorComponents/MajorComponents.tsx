import { componentsData } from "./componentsData";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SectionHead from "@/components/SectionHead";
import { useRef } from "react";
import { motion, useInView } from "motion/react";

const MajorComponents = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-30px",
  });
  return (
    <div className="relative z-30 bg-[#F5F7F8] px-8 py-6 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),10px_10px_30px_4px_rgba(45,78,255,0.15)] md:px-16 md:py-8 lg:px-24 lg:py-10 dark:bg-[#020617] dark:shadow-[-10px_-10px_30px_4px_rgba(255,255,255,0.1),10px_10px_30px_4px_rgba(45,78,255,0.15)]">
      <SectionHead
        title="Explore Production-Ready Components"
        description="Every component is meticulously crafted for the best developer and user experience, so you can focus on building amazing forms without worrying about the details."
      />
      <div ref={ref} className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {componentsData.map((component, idx) => (
          <motion.div
            key={idx}
            className="rounded-lg bg-(--background) p-6 shadow-md transition-shadow duration-300 ease-linear hover:shadow-lg dark:shadow-gray-500/50"
            initial={{ scale: 1.25, opacity: 0 }}
            animate={
              isInView ? { scale: 1, opacity: 1 } : { scale: 1.25, opacity: 0 }
            }
            transition={{ delay: 0.05, duration: 0.35, ease: "linear" }}
          >
            <Link href={component.link}>
              <div className="flex h-40 items-center justify-center rounded-md bg-(--light-bg) p-4">
                <Image
                  src={`/${component.image}`}
                  alt={`${component.name} icon`}
                  width={100}
                  height={100}
                />
              </div>
              <h3 className="mt-3 text-lg font-bold text-(--foreground)">
                {component.name}
              </h3>
              <p className="mt-1 text-sm text-(--muted-foreground) dark:text-gray-300">
                {component.description}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="flex items-center justify-end">
        <Link href="/">
          <Button
            variant="outline"
            className="mt-6 scale-100 cursor-pointer border-(--button) text-(--button) transition-all duration-300 ease-in-out hover:border-(--button-hover) hover:text-(--button-hover)"
          >
            View All Components
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MajorComponents;
