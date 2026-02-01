import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Je Edustore | Bahan Ajar Berkualitas",
  description:
    "Dapatkan modul pembelajaran interaktif dan aset kreatif berkualitas. Solusi tepat untuk meningkatkan efektivitas belajar siswa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${inter.className} min-h-screen flex flex-col text-slate-900 overflow-x-hidden`}
      >
        <Navbar />
        <main className="flex-1 w-full relative">{children}</main>
      </body>
    </html>
  );
}
