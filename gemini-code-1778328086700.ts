import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Oasi Merano | Gelato Artigianale Premium",
  description: "L'eccellenza del gelato artigianale italiano a Merano. Ingredienti locali, freschezza quotidiana e un'atmosfera indimenticabile.",
  keywords: ["gelato merano", "gelateria artigianale", "merano food", "dolci merano"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-brand-vanilla text-brand-espresso`}>
        {children}
      </body>
    </html>
  );
}