"use client";

import { useTheme } from "next-themes";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function LandingPage() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="container mx-auto flex h-16 items-center justify-between px-6">
      <div className="text-lg font-semibold tracking-tight">
        WebFormSimplified
      </div>
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="rounded-xl"
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>
        <Button className="rounded-2xl">Get Started</Button>
      </div>
    </div>
  );
}
