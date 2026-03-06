"use client";

import { useTheme } from "next-themes";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavActionItems from "./NavActionItems";

export default function LandingPage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.nav className="flex h-17 w-full items-center justify-between bg-(--background) px-20 shadow-[0px_-1px_6px_-2px_#171717] dark:shadow-[0px_-1px_6px_-2px_#e5e5e5]">
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center gap-3.5 transition-all duration-300 ease-in-out active:scale-95"
      >
        <Image
          src="/assets/wfs_logo.png"
          width={25}
          height={25}
          alt="Logo"
          className="rounded"
        />
        <div className="text-xl font-bold">WebformSimplified</div>
      </Link>

      {/* Navigation Links */}
      <div className="nav-items flex items-center gap-5">
        {/* Theme Toggle */}
        {mounted && (
          <Button
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="cursor-pointer rounded-xl border-none bg-slate-100 shadow-none transition-all duration-300 ease-in-out hover:opacity-80 dark:bg-slate-700"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        )}
        {/* Auth Buttons */}
        <NavActionItems />
      </div>
    </motion.nav>
  );
}
