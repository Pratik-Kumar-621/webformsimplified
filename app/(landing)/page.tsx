"use client";

import HeroSection from "@/components/landing/hero/HeroSection";
import FeatureBento from "@/components/landing/features/Features";
import Navbar from "@/components/landing/navbar/Navbar";
import { useEffect, useState } from "react";

export default function LandingPage() {
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(
    () =>
      (() => {
        setMounted(true);
      })(),
    [],
  );
  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-(--background) text-(--primary)">
      <Navbar />
      <HeroSection />
      <FeatureBento />
    </div>
  );
}
