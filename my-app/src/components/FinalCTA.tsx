// File: components/FinalCTA.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function FinalCTA() {
  const benefits = [
    "No sign-up required",
    "Easy to understand comparisons",
    "Personalized to your situation",
    "Regularly updated data"
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Take Control of Your Financial Future
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            The best time to start investing was 10 years ago. The second best time is now.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Check className="text-green-400 mr-2 h-5 w-5" />
                <span className="text-sm md:text-base">{benefit}</span>
              </motion.div>
            ))}
          </div>
          
          <Button className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-semibold text-lg px-10 py-7 rounded-full shadow-lg hover:shadow-xl transition-all">
            Compare Investment Options
          </Button>
          
          <p className="mt-6 text-sm text-blue-200">
            InvestCompare provides educational information only. 
            Always consult a financial advisor before making investment decisions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
