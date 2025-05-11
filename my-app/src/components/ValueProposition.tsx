// File: components/ValueProposition.tsx
"use client";

import { motion } from "framer-motion";
import { LineChart, Clock, Search, BookOpen } from "lucide-react";

export default function ValueProposition() {
  const features = [
    {
      icon: <Search className="h-10 w-10 text-teal-500" />,
      title: "Simple Comparison",
      description: "Compare different investment options side by side without the complex jargon."
    },
    {
      icon: <LineChart className="h-10 w-10 text-teal-500" />,
      title: "Data-Driven Insights",
      description: "Make confident decisions based on historical performance and projected growth."
    },
    {
      icon: <BookOpen className="h-10 w-10 text-teal-500" />,
      title: "Jargon-Free Education",
      description: "Learn investment basics through simple, straightforward explanations."
    },
    {
      icon: <Clock className="h-10 w-10 text-teal-500" />,
      title: "Future Projections",
      description: "See how your investments could grow over time with our interactive tools."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Why Compare with Us?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 p-3 bg-blue-50 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}