import { motion, useInView } from "motion/react";
import { useRef } from "react";
interface SectionHeadProps {
  title: string;
  description: string;
}
const SectionHead = ({ title, description }: SectionHeadProps) => {
  const ref = useRef(null);
  const inToView = useInView(ref, {
    margin: "-30px",
  });
  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-start gap-3 pb-6 md:pb-8 lg:items-center lg:pb-10"
      initial={{ opacity: 0, y: 40 }}
      animate={inToView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.35,
        ease: "easeOut",
      }}
    >
      <h3 className="text-left text-3xl font-medium text-(--foreground) lg:text-center">
        {title}
      </h3>
      <p className="text-left font-light text-balance text-(--muted-foreground) lg:max-w-2xl lg:text-center">
        {description}
      </p>
    </motion.div>
  );
};

export default SectionHead;
