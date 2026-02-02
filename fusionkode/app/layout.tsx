import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import SmoothScroll from "./components/SmoothScroll";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "FusionKode | Premium AI-Dev Agency",
  description: "AI-Powered Web, App & Automation Systems Built to Solve Real Business Problems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased selection:bg-white selection:text-black">
        <SmoothScroll>
          <div className="noise-overlay" />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
