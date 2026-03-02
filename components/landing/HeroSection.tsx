"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-black pt-20 overflow-hidden">
      {/* Animated Shader Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute w-96 h-96 bg-blue-300 dark:bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 right-0 top-20"></div>
        <div className="absolute w-96 h-96 bg-purple-400 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 -bottom-8 left-20"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl lg:text-7xl font-bold text-black dark:text-white mb-6 leading-tight">
              Create forms{" "}
              <span className="text-blue-600 dark:text-blue-400">your way</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Build stunning, multi-step forms with our drag-and-drop
              playground. Design once, export anywhere. No code required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/signup"
                className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-semibold hover:opacity-80 transition-opacity flex items-center justify-center gap-2"
              >
                Get Early Access
                <ArrowRight size={20} />
              </Link>
              <button className="px-8 py-4 border-2 border-black dark:border-white text-black dark:text-white font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-12">
              <div>
                <div className="text-3xl font-bold text-black dark:text-white">
                  50K+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Forms Created
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-black dark:text-white">
                  1M+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Submissions
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Component Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-96 lg:h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center overflow-hidden">
              {/* Component Showcase */}
              <div className="space-y-4 w-80">
                {/* Input */}
                <div className="space-y-1">
                  <label className="text-xs font-medium text-gray-600 dark:text-gray-300">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-600"
                    disabled
                  />
                </div>

                {/* Select */}
                <div className="space-y-1">
                  <label className="text-xs font-medium text-gray-600 dark:text-gray-300">
                    Department
                  </label>
                  <select
                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-black dark:text-white"
                    disabled
                  >
                    <option>Select an option</option>
                  </select>
                </div>

                {/* Checkbox */}
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="check"
                    className="w-5 h-5"
                    disabled
                  />
                  <label
                    htmlFor="check"
                    className="text-sm text-gray-600 dark:text-gray-300"
                  >
                    I agree to terms
                  </label>
                </div>

                {/* Radio */}
                <div className="space-y-2">
                  <label className="text-xs font-medium text-gray-600 dark:text-gray-300">
                    Select one
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <input type="radio" name="option" disabled />
                      Option 1
                    </label>
                    <label className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <input type="radio" name="option" disabled />
                      Option 2
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
