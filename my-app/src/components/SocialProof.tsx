// File: components/SocialProof.tsx
"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

export default function SocialProof() {
  const testimonials = [
    {
      quote: "I finally understand the difference between ETFs and index funds. The comparison tool made it so easy to see which was right for me.",
      name: "Sarah J.",
      location: "Sydney",
      avatar: "/avatars/avatar-1.png",
      initials: "SJ"
    },
    {
      quote: "Started investing with just $100 a month after using InvestCompare. Three years later and I'm on track for a house deposit!",
      name: "Michael T.",
      location: "Melbourne",
      avatar: "/avatars/avatar-2.png",
      initials: "MT"
    },
    {
      quote: "The calculator showed me how much I was missing out by keeping my money in a savings account. Now my money works harder for me.",
      name: "Amy K.",
      location: "Brisbane",
      avatar: "/avatars/avatar-3.png",
      initials: "AK"
    }
  ];

  const stats = [
    { value: "78%", label: "of users make their first investment within 30 days" },
    { value: "5.2x", label: "average portfolio growth after 5 years" },
    { value: "91%", label: "of users recommend us to friends" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Join Thousands of Smart Investors
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-blue-50 border-none hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback className="bg-blue-200 text-blue-700 text-lg">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                      <p className="font-medium text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                  <p className="italic text-gray-700">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg p-8 text-center text-white shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</p>
              <p className="text-lg text-blue-50">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}