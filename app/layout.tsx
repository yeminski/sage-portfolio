import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sage | Product Manager",
  description:
    "Sage — Product Manager with a background in hardware/service PM at Epson America, pivoting to Fintech. CFA. Fintech Enthusiast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased bg-paper text-ink">{children}</body>
    </html>
  );
}
