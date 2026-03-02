"use client";

import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import AboutFounderSection from "@/components/landing/AboutFounderSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <AboutFounderSection />
      <CTASection />
      <Footer />
    </div>
  );
}
