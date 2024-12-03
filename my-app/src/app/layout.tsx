import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dinesh Korukonda | Full Stack Developer & DevOps Engineer",
  description: "Full Stack Developer, Mobile App Developer, and DevOps Engineer. Expertise in web development, mobile applications, and cloud solutions.",
  keywords: [
    "Full Stack Developer",
    "Mobile App Developer",
    "DevOps Engineer",
    "Web Development",
    "Cloud Solutions",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
  ],
  authors: [{ name: "Dinesh Korukonda" }],
  openGraph: {
    title: "Dinesh Korukonda | Full Stack Developer & DevOps Engineer",
    description: "Full Stack Developer, Mobile App Developer, and DevOps Engineer specializing in modern web applications and DevOps practices.",
    type: "website",
    locale: "en_US",
    siteName: "Dinesh Korukonda Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dinesh Korukonda | Full Stack Developer & DevOps Engineer",
    description: "Full Stack Developer, Mobile App Developer, and DevOps Engineer",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
