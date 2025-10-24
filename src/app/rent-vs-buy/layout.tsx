import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rent vs Buy Calculator - Should You Rent or Buy a Home in 2025? | AvsBee",
  description: "Free rent vs buy calculator helps you decide if renting or buying a home is better financially. Compare costs, see 20-year projections, and make the right decision in 30 seconds. No signup required.",
  keywords: "rent vs buy calculator, should i rent or buy, rent or buy home, homebuying calculator, rent vs own calculator",
  robots: "index, follow",
  alternates: {
    canonical: "https://avsbee.com/rent-vs-buy",
  },
  openGraph: {
    title: "Rent vs Buy Calculator - Make the Right Housing Decision",
    description: "Compare renting vs buying with our free calculator. Get personalized results in 30 seconds.",
    type: "website",
    url: "https://avsbee.com/rent-vs-buy",
  },
};

export default function RentVsBuyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
