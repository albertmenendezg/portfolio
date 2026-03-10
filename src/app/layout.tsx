import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Albert Menendez Gonzalez | Senior Backend & DevOps Engineer",
  description:
    "Senior Backend & DevOps Engineer with 4+ years experience in Java, Go, TypeScript, SpringBoot, Node.js, Docker, Kubernetes, and cloud infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-gray-950 text-gray-100`}>
        {children}
      </body>
    </html>
  );
}
