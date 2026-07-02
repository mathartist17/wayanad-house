import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Girish for Wayanad House Secretary | IITM Online Degree Campaign",
  description: "Official campaign website for Girish, candidate for Secretary of Wayanad House in the IIT Madras Online Degree program. Vision, manifesto, and community feedback.",
  keywords: ["Girish", "Wayanad House", "Secretary", "IITM Online Degree", "IIT Madras", "BS Data Science", "Election Campaign", "Student Council"],
  authors: [{ name: "Girish" }],
  openGraph: {
    title: "Girish for Wayanad House Secretary",
    description: "Empowering students, fostering collaboration, and driving transparency. Together for a better Wayanad House.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
