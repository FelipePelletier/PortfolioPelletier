import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Header from "@/components/header";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const urbanist = Urbanist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio Pelletier",
  description: "Portfolio made by Felipe Pelletier",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.className} antialiased`}>
        <Navbar /> {/* se pone en el layout asi aparece en todas las paginas */}
        <Header />
        {children}
      </body>
    </html>
  );
}
