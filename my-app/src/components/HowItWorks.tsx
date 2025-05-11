// File: components/HowItWorks.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Set Your Goals",
      description: "Tell us what you're saving for and your timeframe.",
      color: "bg-green-400"
    },
    {
      number: "02",
      title: "Compare Options",
      description: "See how different investments stack up side by side.",
      color: "bg-blue-400"
    },
    {
      number: "03",
      title: "Make Informed Choices",
      description: "Choose the right investment strategy for your future.",
      color: "bg-purple-400"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
          How It Works
        </h2>
        <p className="text-xl text-center mb-12 text-gray-600 max-w-2xl mx-auto">
          Three simple steps to finding your perfect investment strategy
        </p>
        
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex-1 relative bg-white rounded-xl shadow-md overflow-hidden"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={`w-full h-2 ${step.color}`} />
              <div className="p-6">
                <div className={`inline-block ${step.color} rounded-full w-12 h-12 flex items-center justify-center font-bold text-white mb-4`}>
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-6 rounded-lg shadow-md hover:shadow-lg transition-all">
            Start Comparing Now
          </Button>
        </div>
      </div>
    </section>
  );
}