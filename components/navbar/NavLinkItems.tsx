"use client";

import { navItems } from "./navLinks";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const NavLinkItems = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const router = useRouter();
  const handleClick = (to: string) => {
    const offset = 20;

    if (to.startsWith("#")) {
      const element = document.querySelector(to);

      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      router.push(to);
    }
  };

  return (
    <motion.div layout className="flex items-center">
      {navItems.map((item) => (
        <div
          onClick={() => handleClick(item.to)}
          key={item.to}
          onMouseEnter={() => setHoveredItem(item.to)}
          onMouseLeave={() => setHoveredItem(null)}
          className="relative flex h-8 cursor-pointer items-center rounded-md px-3 text-sm text-[14px] font-medium text-(--foreground)"
        >
          {hoveredItem === item.to && (
            <motion.div
              layoutId="navbar-item-hover"
              className="absolute inset-0 z-0 h-full w-full rounded-md bg-gray-300 dark:bg-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "tween", duration: 0.2, ease: "easeOut" }}
            />
          )}
          <span className="relative z-10">{item.name}</span>
        </div>
      ))}
    </motion.div>
  );
};

export default NavLinkItems;
