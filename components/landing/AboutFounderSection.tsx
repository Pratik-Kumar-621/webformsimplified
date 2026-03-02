"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Twitter, Github } from "lucide-react";

export default function AboutFounderSection() {
  return (
    <section className="py-32 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-black dark:text-white mb-4">
            Built by Creators
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Meet the founder behind webformify
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center overflow-hidden relative group">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent dark:via-gray-800 opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-pulse"></div>

              {/* Avatar Placeholder */}
              <div className="relative z-10 w-48 h-48 bg-black dark:bg-white rounded-full flex items-center justify-center text-6xl font-bold text-white dark:text-black group-hover:scale-105 transition-transform duration-300">
                PK
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-8 right-8 w-16 h-16 bg-blue-500 opacity-10 rounded-full"
              ></motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-8 left-8 w-20 h-20 bg-purple-500 opacity-10 rounded-full"
              ></motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-black dark:text-white mb-4">
              Pratik Kumar
            </h3>
            <p className="text-sm text-blue-600 dark:text-blue-400 mb-6 font-semibold">
              Founder & Designer
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              With over 5 years of experience in product design and development,
              I created webformify to solve a problem I faced countless times:
              building beautiful, functional forms shouldn't be complicated.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              My mission is to empower creators and developers with tools that
              are simple, elegant, and powerful. Because great design is about
              removing friction, not adding it.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 bg-black dark:bg-white text-white dark:text-black hover:opacity-80 transition-opacity"
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 bg-black dark:bg-white text-white dark:text-black hover:opacity-80 transition-opacity"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 bg-black dark:bg-white text-white dark:text-black hover:opacity-80 transition-opacity"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="mailto:hello@webformify.com"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 bg-black dark:bg-white text-white dark:text-black hover:opacity-80 transition-opacity"
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
