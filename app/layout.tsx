import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next"

const googleSans = localFont({
  src: [
    {
      path: "../public/fonts/GoogleSans-VariableFont.ttf",
      style: "normal",
      weight: "100 700",
    },
    {
      path: "../public/fonts/GoogleSans-Italic.ttf",
      style: "italic",
      weight: "100 700",
    },
  ],
  variable: "--font-google-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hubani.org"),
  title: {
    default: "Hubani Limited | Sovereign Parent Holding Corporation",
    template: "%s | Hubani Limited",
  },
  description:
    "Hubani Limited is an agile parent holding corporation operating across cinematic music publishing, advanced data telemetry systems, and global tournament leagues (BOTYA).",
  keywords: [
    "Hubani",
    "Hubani Limited",
    "BOTYA",
    "Best of the Year Awards",
    "Cinematic Music Publishing",
    "Data Telemetry Software",
    "Mombasa Kenya Holding Company",
  ],
  authors: [{ name: "Hubani Limited", url: "https://hubani.org" }],
  creator: "Hubani Limited",
  publisher: "Hubani Limited",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hubani.org",
    title: "Hubani Limited | Sovereign Parent Holding Corporation",
    description:
      "Agile cross-disciplinary holding corporation operating across high-velocity sectors.",
    siteName: "Hubani Limited",
  },
  twitter: {
    card: "summary",
    title: "Hubani Limited",
    description:
      "Agile cross-disciplinary holding corporation operating across high-velocity sectors.",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${googleSans.variable} font-sans`}>
      <body className="min-h-screen flex flex-col bg-white text-neutral-900 selection:bg-neutral-100 selection:text-black">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
