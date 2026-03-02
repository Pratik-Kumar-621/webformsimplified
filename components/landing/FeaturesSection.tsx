"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Grid3x3,
  GitBranch,
  Palette,
  Lock,
  BarChart3,
} from "lucide-react";

const features = [
  {
    title: "Drag & Drop Builder",
    description: "Intuitive interface to create forms without writing code",
    icon: Grid3x3,
    large: true,
  },
  {
    title: "Lightning Fast",
    description: "Optimized performance for thousands of submissions",
    icon: Zap,
  },
  {
    title: "Multi-Step Forms",
    description: "Create complex form flows with ease",
    icon: GitBranch,
  },
  {
    title: "Customizable Design",
    description: "Tailor every aspect to match your brand",
    icon: Palette,
  },
  {
    title: "Secure & Reliable",
    description: "Enterprise-grade security for your data",
    icon: Lock,
  },
  {
    title: "Analytics",
    description: "Detailed insights into form performance",
    icon: BarChart3,
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-32 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-black dark:text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Everything you need to create, manage, and optimize forms
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`p-8 bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 hover:border-blue-400 dark:hover:border-blue-600 transition-all cursor-pointer group ${
                  feature.large ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <Icon
                  size={feature.large ? 40 : 28}
                  className="text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform"
                />
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
