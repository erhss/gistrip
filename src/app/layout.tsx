import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GisTrip · Plan the route. Live the trip.",
  description:
    "Group trip planning that lives on the map. Coming soon.",
  metadataBase: new URL("https://gistrip.com"),
  openGraph: {
    title: "GisTrip · Plan the route. Live the trip.",
    description:
      "Group trip planning that lives on the map. Coming soon.",
    url: "https://gistrip.com",
    siteName: "GisTrip",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GisTrip · Plan the route. Live the trip.",
    description:
      "Group trip planning that lives on the map. Coming soon.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body>{children}</body>
    </html>
  );
}
