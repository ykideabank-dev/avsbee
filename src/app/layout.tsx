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
  title: "AvsBee - Smart Financial Comparison Tools",
  description: "Free calculators for life's financial choices. Compare rent vs buy, job offers, and more to make informed decisions.",
  icons: {
    icon: '/logo.svg',
    apple: '/logo.svg',
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
