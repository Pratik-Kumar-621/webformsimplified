"use client";

import HeroSection from "@/components/landing/hero/HeroSection";
import FeatureBento from "@/components/landing/features/Features";
import Navbar from "@/components/navbar/Navbar";
import { useEffect, useState } from "react";
import MajorComponents from "@/components/landing/majorComponents/MajorComponents";
import Usp from "@/components/landing/usp/Usp";
import Playground from "@/components/landing/Playground";
import Footer from "@/components/Footer";

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
      <MajorComponents />
      <FeatureBento />
      <Usp />
      <Playground />
      <Footer />
    </div>
  );
}
