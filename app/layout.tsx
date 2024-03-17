import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Timer - Anjal Bam",
  description:
    "Introducing a minimalist timer app designed to keep you focused without the distractions. Whether you're working on a project, studying for an exam, or practicing mindfulness, this timer is here to help you stay on track without any unnecessary distractions.",
  keywords: "clock, timer, stopwatch",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
