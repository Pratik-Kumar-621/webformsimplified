"use client";

import { useTheme } from "next-themes";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "motion/react";
import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavActionItems from "./NavActionItems";
import NavLinkItems from "./NavLinkItems";
import { navItems } from "./navLinks";
import { Skeleton } from "@/components/ui/skeleton";

export default function LandingPage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const width = useTransform(scrollY, [0, 100], ["100%", "90%"]);
  const y = useTransform(scrollY, [0, 100], [0, 12]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 10);
  });

  useEffect(() => {
    const timeout = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <motion.nav
        style={{ width, y }}
        className={`backdrop-blur-0 sticky top-0 z-50 mx-auto flex h-15 items-center justify-between px-4 shadow-[0px_-1px_6px_-2px_#171717] sm:px-6 md:px-10 dark:shadow-[0px_-1px_6px_-2px_#e5e5e5] ${
          isScrolled
            ? "bg-background/70 dark:bg-background/60 rounded-2xl border border-(--muted-foreground) backdrop-blur-xl"
            : "bg-background/0"
        }`}
      >
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
          <div className="text-xl font-bold lg:hidden">WebformSimplified</div>
          {!isScrolled ? (
            <div className="hidden text-xl font-bold lg:block">
              WebformSimplified
            </div>
          ) : (
            <div className="hidden text-xl font-bold lg:block">WFS</div>
          )}
        </Link>

        {/* Desktop navigation (lg and up) */}
        <div className="hidden items-center gap-5 lg:flex">
          <NavLinkItems />
          {mounted ? (
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
          ) : (
            <Skeleton className="h-9 w-9" />
          )}
          <NavActionItems />
        </div>

        {/* Mobile: theme + hamburger. Tablet: theme + NavActionItems + hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
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
          <div className="hidden items-center md:flex">
            <NavActionItems />
          </div>
          <Button
            size="icon"
            variant="ghost"
            className="cursor-pointer rounded-xl border-none shadow-none hover:bg-slate-100 dark:hover:bg-slate-800"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay: backdrop + fixed panel */}
      {isMenuOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          />
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="bg-background/95 fixed top-15 right-4 z-50 w-[70%] max-w-[320px] min-w-50 rounded-xl border border-(--muted-foreground) p-4 shadow-lg backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  href={item.to}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-(--foreground) hover:bg-slate-100 dark:hover:bg-slate-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            {/* NavActionItems only on mobile; tablet has them in navbar */}
            <div className="mt-4 border-t border-(--muted-foreground) pt-3 md:hidden">
              <NavActionItems />
            </div>
          </motion.div>
        </>
      )}
    </>
  );
}
