"use client";

import HeroSection from "@/components/landing/hero/HeroSection";
import FeatureBento from "@/components/landing/features/Features";
import Navbar from "@/components/landing/navbar/Navbar";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-(--background) text-(--primary)">
      <Navbar />
      <HeroSection />
      <FeatureBento />
    </div>
  );
}
