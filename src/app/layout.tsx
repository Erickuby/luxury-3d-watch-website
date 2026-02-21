import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "CHRONO AI — Virtual Try-On | Luxury Smartwatch",
  description:
    "Experience the future of luxury horology. AI-powered virtual try-on for the world's most advanced smartwatch. Precision engineering meets intelligent design.",
  openGraph: {
    title: "CHRONO AI — Virtual Try-On",
    description:
      "AI-powered virtual try-on for the world's most advanced smartwatch.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
