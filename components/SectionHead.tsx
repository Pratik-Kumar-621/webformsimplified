import { motion } from "motion/react";
interface SectionHeadProps {
  title: string;
  description: string;
}
const SectionHead = ({ title, description }: SectionHeadProps) => {
  return (
    <motion.div
      className="flex flex-col items-start gap-3 pb-6 md:pb-8 lg:items-center lg:pb-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25, duration: 0.35, ease: "easeOut" }}
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
