import type { Metadata, Viewport } from "next";
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

const title = "Stacked \u2014 AI-operated apps for specific trades";
const description =
  "Software that runs the boring half of your small business, on its own. Join the waitlist and get invited the week your vertical is ready.";

export const metadata: Metadata = {
  metadataBase: new URL("https://stackedmedia.co"),
  title: {
    default: title,
    template: "%s \u00b7 Stacked",
  },
  description,
  applicationName: "Stacked",
  authors: [{ name: "Stacked" }],
  keywords: [
    "vertical SaaS",
    "AI-operated software",
    "small business software",
    "home services software",
    "trade software",
    "waitlist",
  ],
  openGraph: {
    type: "website",
    siteName: "Stacked",
    title,
    description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-neutral-950 text-neutral-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
