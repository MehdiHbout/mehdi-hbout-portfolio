import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mehdi HBOUT | IT Tech Lead & Automation Consultant",
  description:
    "Workflow automation, BPMN, Camunda, Python, REST APIs and AI-assisted automation.",
  keywords: [
    "Workflow Automation",
    "BPMN",
    "Camunda",
    "Python",
    "REST APIs",
    "IT Tech Lead",
    "Automation Consultant",
  ],
  openGraph: {
    title: "Mehdi HBOUT | IT Tech Lead & Automation Consultant",
    description:
      "Workflow automation, BPMN, Camunda, Python, REST APIs and AI-assisted automation.",
    type: "website",
    locale: "en_US",
    images: ["/opengraph-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/twitter-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="min-w-0 max-w-full overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
