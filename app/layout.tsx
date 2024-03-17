import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Timer - Anjal Bam",
  description:
    "Introducing a minimalist timer app designed to keep you focused without the distractions. Whether you're working on a project, studying for an exam, or practicing mindfulness, this timer is here to help you stay on track without any unnecessary distractions.",
  keywords:
    "clock, timer, stopwatch, minimalist, aesthetic, productivity,minimalist timer, productivity tool, focus app, distraction-free timer, time management, minimalist design, productivity app, work timer, study timer, mindfulness timer, productivity tool, time tracking, minimalist productivity, simple timer, browser timer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
      <Analytics />
    </html>
  );
}
