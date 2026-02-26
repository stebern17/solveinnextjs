import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Noise from "@/components/ui/noise/Noise";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import SmoothScroll from "@/components/effects/SmoothScroll";
import IntroLoader from "@/components/layouts/introLoader";

const DmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Solvein Digital Agency",
  description:
    "Solve What Matters. We are a digital agency that helps businesses solve their problems with innovative solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${DmSans.variable} antialiased`}>
        <Header />
        <IntroLoader />
        <Noise />
        <main className="relative z-10 min-h-screen">
          <SmoothScroll />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
