import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Croma Starts | Premier R&D Platform",
  description: "Professional Embedded, IoT, Robotics, Electronics, and Electrical R&D Platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        <div className="grid-bg" />
        <div className="spotlight" style={{ top: '-15%', left: '-15%', opacity: 0.6 }} />
        <div className="spotlight" style={{ bottom: '-15%', right: '-15%', background: 'radial-gradient(circle, var(--secondary-glow) 0%, transparent 70%)', opacity: 0.6 }} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
