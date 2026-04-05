import type { Metadata } from "next";
import { Bree_Serif, Nunito } from "next/font/google";
import "./globals.css";

const bodyFont = Nunito({
  subsets: ["latin"],
  variable: "--font-body"
});

const displayFont = Bree_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display"
});

export const metadata: Metadata = {
  title: "Otto's Code Camp",
  description: "Georgia Milestones 5th Grade Prep MVP"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bodyFont.variable} ${displayFont.variable} font-[var(--font-body)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
