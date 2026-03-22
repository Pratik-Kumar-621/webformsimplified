import SectionHead from "@/components/SectionHead";
import { uspData } from "./uspData";
import { useRef } from "react";
import { useInView, motion } from "motion/react";

const Usp = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    margin: "-30px",
  });
  return (
    <div className="relative z-30 flex flex-col items-start bg-[#F5F7F8] px-8 py-6 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),10px_10px_30px_4px_rgba(45,78,255,0.15)] sm:items-center md:px-16 md:py-8 lg:px-24 lg:py-10 dark:bg-[#020617] dark:shadow-[-10px_-10px_30px_4px_rgba(255,255,255,0.1),10px_10px_30px_4px_rgba(45,78,255,0.15)]">
      <SectionHead
        title="Why WebFormSimplified stands out"
        description="A quick look at the features and capabilities of WebFormSimplified."
      />
      <motion.div
        ref={ref}
        className="w-full max-w-4xl overflow-hidden rounded-lg border-(--muted-foreground) shadow-md dark:shadow-gray-500/50"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.1, duration: 0.55, ease: "linear" }}
      >
        <motion.table
          initial={{ rotateY: 90, rotateX: 90, opacity: 0.3 }}
          animate={
            isInView
              ? { rotateY: 0, rotateX: 0, opacity: 1 }
              : { rotateY: 90, rotateX: 90, opacity: 0.3 }
          }
          transition={{ delay: 0.1, duration: 0.45, ease: "linear" }}
          className="w-full text-left align-middle"
        >
          <thead className="w-full border-b-0 bg-(--light-bg)">
            <tr className="h-12 w-full border-0">
              <th className="w-[40%] pl-8 text-left font-semibold">Feature</th>
              <th className="w-[40%] text-center font-semibold">
                Exists today?
              </th>
              <th className="hidden w-[20%] pr-8 text-center font-semibold sm:table-cell">
                WebFormSimplified
              </th>
            </tr>
          </thead>
          <tbody className="divide-y border-0 bg-(--background)">
            {uspData.map((item, idx) => (
              <tr
                key={idx}
                className="min-h-15 border-0 even:bg-[#f7f7f7] dark:even:bg-[#111111]"
              >
                <td className="pl-8 text-sm">{item.title}</td>
                <td
                  className={`justify-center text-sm ${item.existsToday === "Yes" ? "text-green-500" : (item.existsToday.includes("Some") || item.existsToday.includes("Partial")) === true ? "text-yellow-500" : "text-red-500"} flex min-h-15 items-center gap-2`}
                >
                  {item.existingIcon} {item.existsToday}
                </td>
                <td className="hidden w-[20%] pr-8 text-center text-sm text-green-700 sm:table-cell">
                  ✅&nbsp; Yes
                </td>
              </tr>
            ))}
          </tbody>
        </motion.table>
      </motion.div>
    </div>
  );
};

export default Usp;
