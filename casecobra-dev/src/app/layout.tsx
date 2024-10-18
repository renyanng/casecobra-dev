import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Inter } from 'next/font/google';
import Navbar from "../components/navbar";
import Footer from "../components/ui/Footer";
import { Toaster } from "@/components/ui/toaster";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Case Cobra ",
  description: "Generated by create next app",
};

const inter = Inter({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}>
          <Navbar />

          <main className='flex-1 flex flex-col min-h-[calc(100vh-3.5rem-8px)]'>
            <div className='flex-1 flex flex-col h-full'>
            {children}
            </div>

          <Footer />
          </main>
          <Toaster />

      </body>
    </html>
  );
}
