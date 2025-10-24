import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "AvsBee - Free Financial Calculators | Rent vs Buy, Car Lease, Solar & More",
  description: "Make smarter financial decisions with free calculators. Compare rent vs buy, car leasing, college costs, solar savings, and investment options. Instant results, no signup required.",
  keywords: "financial calculator, rent vs buy calculator, car lease calculator, college cost calculator, solar calculator, investment calculator, financial decisions",
  icons: {
    icon: '/logo.svg',
    apple: '/logo.svg',
  },
  alternates: {
    canonical: "https://avsbee.com",
  },
  openGraph: {
    title: "AvsBee - Free Financial Calculators",
    description: "Make smarter financial decisions with free comparison calculators.",
    type: "website",
    url: "https://avsbee.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "AvsBee - Free Financial Calculators",
    description: "Compare rent vs buy, car leasing, and more with free calculators",
  },
  verification: {
    other: {
      'impact-site-verification': '9da8987c-9e80-4205-9a4f-038bb1300622'
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="fo-verify" content="bb1ef97b-6b19-442a-92a2-95bcb240eba7" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
