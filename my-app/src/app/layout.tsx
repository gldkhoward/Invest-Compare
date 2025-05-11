import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InvestCompare - Compare Investment Options for Australians",
  description: "Compare different investment options and find the perfect strategy for your financial future. Start investing smarter today.",
  keywords: "investment comparison, financial planning, Australian investments, investment calculator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white`}
      >
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="pt-16"> {/* Add padding to account for fixed navbar */}
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
