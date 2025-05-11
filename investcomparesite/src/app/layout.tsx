import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata: Metadata = {
  title: "InvestCompare - Compare Investment Options in Australia",
  description: "Compare different investment options in Australia. Make informed decisions about property, shares, superannuation, and savings with our easy-to-use comparison tool.",
  keywords: "investment comparison, Australian investments, property investment, shares, superannuation, savings, investment calculator",
  authors: [{ name: "InvestCompare" }],
  openGraph: {
    title: "InvestCompare - Compare Investment Options in Australia",
    description: "Compare different investment options in Australia. Make informed decisions about property, shares, superannuation, and savings with our easy-to-use comparison tool.",
    url: "https://investcompare.com.au",
    siteName: "InvestCompare",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "InvestCompare - Compare Investment Options in Australia",
    description: "Compare different investment options in Australia. Make informed decisions about property, shares, superannuation, and savings with our easy-to-use comparison tool.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background font-sans`}
      >
        <div className="relative flex min-h-screen flex-col">
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
