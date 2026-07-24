import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Martins Construction | Los Angeles General Contractor",
  description:
    "Martins Construction is a licensed general contractor serving the greater Los Angeles area for 31 years, offering kitchen and bathroom remodeling, room additions, ADUs, and custom home building.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-espresso">
        <Nav />
        <main className="flex-1 pt-18">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
