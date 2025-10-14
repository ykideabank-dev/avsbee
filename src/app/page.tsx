'use client';

import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import CalculatorCard from '@/components/shared/CalculatorCard';
import { calculators } from '@/data/calculators';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-indigo-50 to-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Make Smarter Money Decisions
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Free calculators for life&apos;s financial choices
            </p>
          </div>
        </section>

        {/* Calculators Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">
              Choose Your Decision
            </h2>

            {/* Calculator Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {calculators.map((calculator) => (
                <CalculatorCard
                  key={calculator.id}
                  title={calculator.title}
                  description={calculator.description}
                  icon={calculator.icon}
                  href={calculator.href}
                  status={calculator.status}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
