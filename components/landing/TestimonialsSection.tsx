"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Designer",
    content:
      "This tool transformed how we create forms. What used to take hours now takes minutes.",
    avatar: "SJ",
    color: "bg-blue-500",
  },
  {
    name: "Alex Chen",
    role: "Startup Founder",
    content: "The drag-and-drop interface is so intuitive. Our team loves it!",
    avatar: "AC",
    color: "bg-purple-500",
  },
  {
    name: "Maria Garcia",
    role: "Marketing Manager",
    content:
      "Best form builder we've used. Clean, modern, and incredibly powerful.",
    avatar: "MG",
    color: "bg-green-500",
  },
  {
    name: "James Wilson",
    role: "Developer",
    content:
      "The code export feature is a game-changer. Perfect integration with our stack.",
    avatar: "JW",
    color: "bg-orange-500",
  },
];

export default function TestimonialsSection() {
  const [draggedCard, setDraggedCard] = useState<number | null>(null);

  return (
    <section className="py-32 bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-black dark:text-white mb-4">
            Loved by Creators
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            See what people are saying about WebFormSimplified
          </p>
        </motion.div>

        {/* Draggable Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-max">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              drag
              dragElastic={0.2}
              whileDrag={{ scale: 1.05 }}
              onHoverStart={() => setDraggedCard(idx)}
              onHoverEnd={() => setDraggedCard(null)}
              className={`p-8 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 cursor-grab active:cursor-grabbing transition-all ${
                draggedCard === idx ? "shadow-2xl" : "shadow-sm"
              } ${idx % 2 === 1 ? "md:mt-8" : ""}`}
            >
              {/* Header with Avatar */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-lg`}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-black dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Quote */}
              <p className="text-gray-700 dark:text-gray-300 italic">
                "{testimonial.content}"
              </p>

              {/* Drag Indicator */}
              <div className="mt-6 flex justify-center">
                <div className="text-xs text-gray-400 dark:text-gray-600">
                  ⋮ ⋮
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
