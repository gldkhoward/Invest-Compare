// File: components/InvestmentOptions.tsx
"use client";

import { motion } from "framer-motion";
import { Home, TrendingUp, PiggyBank, Shield } from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function InvestmentOptions() {
  const options = [
    {
      icon: <Home className="h-8 w-8" />,
      title: "Property",
      description: "Real estate investments in Australia's growing markets.",
      risk: "Medium",
      returnRange: "3-8%",
      liquidityScore: 1
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Shares",
      description: "Australian and international stock market investments.",
      risk: "Medium-High",
      returnRange: "6-12%",
      liquidityScore: 4
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Superannuation",
      description: "Long-term retirement savings with tax benefits.",
      risk: "Varies",
      returnRange: "5-9%",
      liquidityScore: 1
    },
    {
      icon: <PiggyBank className="h-8 w-8" />,
      title: "Savings",
      description: "High-interest savings accounts and term deposits.",
      risk: "Low",
      returnRange: "1-5%",
      liquidityScore: 5
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Explore Investment Options
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Different investments suit different goals. Compare your options to find what works for you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {options.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-2 hover:border-blue-400 transition-all">
                <CardHeader>
                  <div className="mb-2">
                    {option.icon}
                  </div>
                  <CardTitle>{option.title}</CardTitle>
                  <CardDescription>{option.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Risk Level:</span>
                      <Badge variant="outline" className="bg-gray-100">{option.risk}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Typical Returns:</span>
                      <span className="font-semibold text-blue-600">{option.returnRange}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Liquidity:</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <div 
                            key={i} 
                            className={`w-2 h-2 rounded-full mx-0.5 ${i < option.liquidityScore ? 'bg-blue-500' : 'bg-gray-200'}`} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <button className="text-blue-600 text-sm font-medium hover:underline w-full text-center">
                    Learn more →
                  </button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
