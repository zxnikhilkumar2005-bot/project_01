
import Navbar from "@/components/Navbar";
import "./globals.css";
import SmoothScroller from "@/components/SmoothScroller";

import { Inter, JetBrains_Mono } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata = {
  title: "Portfolio",
  description: "my portfolio project",
};

export default function RootLayout({ children }) {

  return (
    <html
      lang="en"
      className={` ${inter.variable}
          ${jetBrainsMono.variable} 
          h-full antialiased`
      }
    >
      <body className="min-h-full flex flex-col">
        <Navbar/>
        <SmoothScroller>
          
          {children}</SmoothScroller>

      </body>
    </html>
  );
}
