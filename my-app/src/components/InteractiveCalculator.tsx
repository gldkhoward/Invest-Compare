// File: components/InteractiveCalculator.tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function InteractiveCalculator() {
  const [age, setAge] = useState(25);
  const [monthly, setMonthly] = useState(100);
  const [chartData, setChartData] = useState<any[]>([]);
  
  useEffect(() => {
    // Calculate compound interest
    const calculateGrowth = () => {
      const interestRate = 0.07; // 7% annual return
      const years = 65 - age;
      const data = [];
      
      let totalContribution = 0;
      let balance = 0;
      
      for (let i = 0; i <= years; i++) {
        totalContribution = monthly * 12 * i;
        balance = calculateCompoundInterest(monthly, interestRate, i);
        
        data.push({
          year: i,
          age: age + i,
          balance: Math.round(balance),
          contribution: Math.round(totalContribution)
        });
      }
      
      return data;
    };
    
    setChartData(calculateGrowth());
  }, [age, monthly]);
  
  const calculateCompoundInterest = (monthlyDeposit: number, interestRate: number, years: number) => {
    let future = 0;
    for (let i = 0; i < years; i++) {
      future = (future + (monthlyDeposit * 12)) * (1 + interestRate);
    }
    return future;
  };

  const formatDollar = (value: number) => {
    return `$${value.toLocaleString()}`;
  };

  const endBalance = chartData.length > 0 ? chartData[chartData.length - 1].balance : 0;
  const totalContribution = chartData.length > 0 ? chartData[chartData.length - 1].contribution : 0;
  const interestEarned = endBalance - totalContribution;

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-teal-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="p-6 md:p-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 text-center">
              The Power of Starting Early
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-10">
              See how your investments could grow over time with regular contributions.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="space-y-8">
                <div className="space-y-4">
                  <label className="text-lg font-medium">Your Current Age: {age}</label>
                  <Slider
                    value={[age]}
                    min={18}
                    max={60}
                    step={1}
                    onValueChange={(value) => setAge(value[0])}
                    className="mt-2"
                  />
                </div>
                
                <div className="space-y-4">
                  <label className="text-lg font-medium">Monthly Investment: ${monthly}</label>
                  <Slider
                    value={[monthly]}
                    min={50}
                    max={1000}
                    step={50}
                    onValueChange={(value) => setMonthly(value[0])}
                    className="mt-2"
                  />
                </div>
                
                <div className="bg-blue-50 rounded-xl p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">At Age 65</h3>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Contribution:</span>
                    <span className="font-bold text-gray-800">{formatDollar(totalContribution)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Interest Earned:</span>
                    <span className="font-bold text-green-600">{formatDollar(interestEarned)}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-blue-100">
                    <span className="text-gray-800 font-semibold">Final Balance:</span>
                    <span className="font-bold text-2xl text-blue-600">{formatDollar(endBalance)}</span>
                  </div>
                </div>
              </div>
              
              <div className="h-80 md:h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={chartData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="age" 
                      label={{ value: 'Age', position: 'insideBottomRight', offset: -10 }} 
                    />
                    <YAxis 
                      tickFormatter={(value) => `$${value/1000}k`} 
                      label={{ value: 'Balance ($)', angle: -90, position: 'insideLeft' }} 
                    />
                    <Tooltip 
                      formatter={(value) => [`$${Number(value).toLocaleString()}`, undefined]}
                      labelFormatter={(value) => `Age: ${value}`}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="balance" 
                      stroke="#3b82f6" 
                      activeDot={{ r: 8 }} 
                      strokeWidth={2}
                      name="Balance"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="contribution" 
                      stroke="#10b981" 
                      strokeDasharray="5 5" 
                      strokeWidth={2}
                      name="Contribution"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500 italic">
                * Calculations assume a 7% average annual return and are for illustrative purposes only.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}