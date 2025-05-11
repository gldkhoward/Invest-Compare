// File: components/Hero.tsx
"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div 
          className="md:w-1/2 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Compare, Choose, <span className="text-yellow-300">Grow</span>
          </h1>
          <p className="text-xl md:text-2xl font-light">
            Find the perfect investment strategy for your future. Starting early is your superpower.
          </p>
          <Button 
            className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-semibold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
            onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Compare Investment Options
          </Button>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 relative h-[300px] md:h-[400px] w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-full h-full">
            <Image
              src="/images/hero-investment-growth.svg"
              alt="Investment growth chart with Australian landmarks"
              fill
              className="object-contain"
              priority
            />
          </div>
          <motion.div 
            className="absolute -bottom-4 -right-4 bg-white text-blue-900 rounded-full p-3 shadow-xl"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, type: "spring" }}
          >
            <span className="text-2xl font-bold">+187%</span>
            <span className="text-xs block">5yr Growth*</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}