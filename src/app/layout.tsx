import type { Metadata } from "next";
import { Orbitron, Rajdhani } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "APEX | Auto Detailing & Custom Builds",
  description:
    "Premium automotive detailing, custom modifications, and performance upgrades. Experience the pinnacle of automotive care.",
  keywords: [
    "auto detailing",
    "custom builds",
    "ceramic coating",
    "paint protection",
    "performance upgrades",
    "car customization",
  ],
  openGraph: {
    title: "APEX | Auto Detailing & Custom Builds",
    description:
      "Premium automotive detailing, custom modifications, and performance upgrades.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${orbitron.variable} ${rajdhani.variable} font-rajdhani antialiased bg-apex-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
