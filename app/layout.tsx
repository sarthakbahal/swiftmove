import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "SwiftMove — Packers & Movers in Indore | House & Office Shifting",
  description:
    "SwiftMove offers professional packing, house shifting, office relocation, and vehicle transport in Indore and across India. Get a free quote today.",
  keywords:
    "packers and movers indore, house shifting indore, office relocation, vehicle transport, best movers indore",
  openGraph: {
    title: "SwiftMove — Packers & Movers",
    description: "Professional moving services in Indore.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
