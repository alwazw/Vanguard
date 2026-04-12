import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FF6B35",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  title: "The Vanguard Protocol | Multi-Domain Security Validation",
  description: "Advanced penetration testing of cyber and physical security. AI-driven remediation deployment. Elite security training. The traditional perimeter is obsolete.",
  keywords: ["cybersecurity", "penetration testing", "red team", "physical security", "AI security", "security assessment"],
  authors: [{ name: "The Vanguard Protocol" }],
  robots: "index, follow",
  openGraph: {
    title: "The Vanguard Protocol | Multi-Domain Security Validation",
    description: "Advanced penetration testing of cyber and physical security. AI-driven remediation deployment.",
    type: "website",
    locale: "en_US",
    siteName: "The Vanguard Protocol",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Vanguard Protocol",
    description: "Multi-Domain Security Validation Framework",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-deep-black text-white`}
      >
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
