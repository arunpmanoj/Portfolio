import type { Metadata } from "next";
import { Cedarville_Cursive, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

/* ── Cedarville Cursive — signature accent only ── */
const cedarville = Cedarville_Cursive({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-cursive",
  display: "swap"
});

/* ── Cormorant Garamond — hero heading only ── */
const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-hero",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Arun P Manoj | Frontend Developer",
  description:
    "Premium futuristic developer portfolio for Arun P Manoj, a React and creative web developer building modern responsive web experiences.",
  metadataBase: new URL("https://arunpmanoj.dev"),
  openGraph: {
    title: "Arun P Manoj | Frontend Developer",
    description:
      "React developer portfolio with immersive 3D interactions, modern UI, and real-world projects.",
    url: "https://arunpmanoj.dev",
    siteName: "Arun P Manoj Portfolio",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Arun P Manoj | Frontend Developer",
    description:
      "Building modern, responsive, and intelligent web experiences."
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`dark scroll-smooth ${cedarville.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
