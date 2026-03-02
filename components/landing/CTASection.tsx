"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="py-32 bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 p-12 sm:p-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 text-xs font-bold mb-6"
          >
            LIMITED SLOTS AVAILABLE • EARLY ACCESS
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-4">
            Join the Beta
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Only 500 slots available. Be among the first to experience the
            future of form building.
          </p>

          {/* Slots Counter */}
          <div className="mb-10 p-4 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-black dark:text-white">
                Slots Claimed
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                347 / 500
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-800 h-2">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "69.4%" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full bg-black dark:bg-white"
              ></motion.div>
            </div>
          </div>

          {/* Email Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 mb-6"
          >
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-6 py-4 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-500"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-semibold hover:opacity-80 transition-opacity flex items-center justify-center gap-2"
            >
              Get Access
              <ArrowRight size={20} />
            </button>
          </form>

          {/* Success Message */}
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-sm font-medium"
            >
              ✓ Check your email to confirm your spot!
            </motion.div>
          )}

          {/* OR Divider */}
          <div className="my-8 flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-200 dark:bg-gray-800"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">OR</span>
            <div className="flex-1 h-px bg-gray-200 dark:bg-gray-800"></div>
          </div>

          {/* Alternative CTA */}
          <Link
            href="/signup"
            className="block text-center px-8 py-4 border-2 border-black dark:border-white text-black dark:text-white font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
          >
            Sign Up Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
