"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, TrendingUp, Shield, Zap, BarChart3 } from "lucide-react"
import Link from "next/link"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white via-blue-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          className="text-center space-y-8"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
              Make Your Money Work
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400 mt-2 animate-gradient">
                Smarter, Not Harder
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Compare investment options side by side. No jargon, no confusion - just clear insights to help you make confident decisions.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="gradient" className="group">
              Compare Investment Options
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            <motion.div variants={fadeIn} className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6 hover-lift">
                <TrendingUp className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Smart Comparison</h3>
              <p className="text-gray-600 dark:text-gray-300">Compare different investment options side by side with our easy-to-use tool.</p>
            </motion.div>
            <motion.div variants={fadeIn} className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6 hover-lift">
                <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Risk Insights</h3>
              <p className="text-gray-600 dark:text-gray-300">Understand risk levels and potential returns for each investment option.</p>
            </motion.div>
            <motion.div variants={fadeIn} className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6 hover-lift">
                <Zap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Quick Results</h3>
              <p className="text-gray-600 dark:text-gray-300">Get instant comparisons and insights to make informed decisions.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Investment Options */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            Investment Options
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Property",
                description: "Long-term growth potential with rental income opportunities.",
                icon: <BarChart3 className="w-6 h-6" />
              },
              {
                title: "Shares",
                description: "Direct ownership in companies with potential for capital growth.",
                icon: <TrendingUp className="w-6 h-6" />
              },
              {
                title: "Superannuation",
                description: "Tax-effective retirement savings with professional management.",
                icon: <Shield className="w-6 h-6" />
              },
              {
                title: "Savings",
                description: "Low-risk options with guaranteed returns and easy access.",
                icon: <Zap className="w-6 h-6" />
              }
            ].map((option, index) => (
              <motion.div
                key={option.title}
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:scale-105 transition-transform duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                      {option.icon}
                    </div>
                    <CardTitle>{option.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{option.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white">Ready to Start Your Investment Journey?</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Compare different investment options and make informed decisions about your financial future.
              </p>
            </div>
            <div className="space-y-4">
              <Button 
                size="lg"
                variant="outline"
                className="bg-white text-blue-600 hover:bg-blue-50"
              >
                Compare Now - It's Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-sm text-blue-100">No sign-up required. Start comparing instantly.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Disclaimer</h3>
              <p className="text-sm">
                This information is general in nature and does not constitute financial advice. Consider your personal circumstances before making investment decisions.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact</h3>
              <p className="text-sm">
                Email: info@investcompare.com.au<br />
                Phone: 1300 123 456
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
            © {new Date().getFullYear()} InvestCompare. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
