import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import I18nProvider from "@/i18n/I18nProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Albert Menendez Gonzalez | Senior Backend & DevOps Engineer",
  description:
    "Senior Backend & DevOps Engineer with 4+ years experience in Java, Go, TypeScript, SpringBoot, Node.js, Docker, Kubernetes, and cloud infrastructure.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100`}>
        <ThemeProvider>
          <I18nProvider>
            {children}
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
