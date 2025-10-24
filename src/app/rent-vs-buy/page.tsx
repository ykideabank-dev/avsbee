'use client';

import { useState } from 'react';
import { ChevronDown, Building2, Home, TrendingUp, CreditCard } from 'lucide-react';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import InputPanel from '@/components/rent-vs-buy/InputPanel';
import ResultsDisplay from '@/components/rent-vs-buy/ResultsDisplay';
import { ScenarioInputs } from '@/lib/calculators/rent-vs-buy/types';
import { calculateScenario } from '@/lib/calculators/rent-vs-buy/calculator';
import { getPresetById } from '@/lib/calculators/rent-vs-buy/presets';

export default function RentVsBuyPage() {
  // Get Orange County preset as default
  const orangeCountyPreset = getPresetById('orange-county-ca')!;

  // State for collapsible "How This Works" section
  const [howItWorksOpen, setHowItWorksOpen] = useState(false);

  // Initialize state with Orange County preset + additional defaults
  const [inputs, setInputs] = useState<ScenarioInputs>({
    // From Orange County preset
    homePrice: orangeCountyPreset.homePrice,
    propertyTaxRate: orangeCountyPreset.propertyTaxRate,
    assessedValueGrowthRate: orangeCountyPreset.assessedValueGrowthRate,
    hoaMonthly: orangeCountyPreset.hoaMonthly,
    homeAppreciationRate: orangeCountyPreset.homeAppreciationRate,
    currentRent: orangeCountyPreset.currentRent,
    rentInflationRate: orangeCountyPreset.rentInflationRate,

    // Additional defaults not in preset
    downPaymentPct: 0.20,
    mortgageRate: 0.065,
    loanTermYears: 30,
    timeHorizonYears: 20,
    maintenanceInsuranceRate: 0.01,
    closingCostsPct: 0.03,
    sellingCostsPct: 0.07,
    investmentReturnRate: 0.10,
    marginalTaxRate: 0.24,
    includeTaxBenefits: true,
  });

  // Handler to update a single input field
  const handleInputChange = (field: keyof ScenarioInputs, value: number | boolean) => {
    setInputs((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Handler to load a regional preset
  const handlePresetSelect = (presetId: string) => {
    if (!presetId) return; // User selected "Custom"

    const preset = getPresetById(presetId);
    if (!preset) return;

    setInputs((prev) => ({
      ...prev,
      homePrice: preset.homePrice,
      propertyTaxRate: preset.propertyTaxRate,
      assessedValueGrowthRate: preset.assessedValueGrowthRate,
      hoaMonthly: preset.hoaMonthly,
      homeAppreciationRate: preset.homeAppreciationRate,
      currentRent: preset.currentRent,
      rentInflationRate: preset.rentInflationRate,
    }));
  };

  // Calculate results automatically when inputs change
  const results = calculateScenario(inputs);

  // Determine which option wins for dynamic CTA
  const isBuyingWinner = results.winner === 'buy';
  const isRentingWinner = results.winner === 'rent';

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-indigo-600 to-indigo-700 text-white py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Rent vs Buy Calculator
            </h1>
            <p className="text-xl text-indigo-100 max-w-3xl">
              Make an informed decision about one of life&apos;s biggest financial choices.
              Compare the true costs of renting versus buying a home.
            </p>
          </div>
        </section>

        {/* How This Calculator Works - Collapsible */}
        <section className="py-6">
          <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '90rem' }}>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <button
                onClick={() => setHowItWorksOpen(!howItWorksOpen)}
                className="flex items-center justify-between w-full text-left hover:bg-blue-100 -mx-2 px-2 py-2 rounded transition-colors cursor-pointer"
              >
                <h2 className="text-base font-semibold text-gray-900 flex items-center gap-2">
                  <span>ℹ️</span>
                  <span>How This Calculator Works</span>
                </h2>
                <ChevronDown
                  className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${
                    howItWorksOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  howItWorksOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-700 text-sm pt-3">
                  This calculator compares buying a home versus renting and investing the difference.
                  It accounts for mortgage payments, property taxes, maintenance, home appreciation,
                  investment returns, and tax benefits. The results show your net wealth after your
                  chosen time horizon, helping you make the best financial decision for your situation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-6">
          <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '90rem' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Input Panel */}
              <div>
                <InputPanel
                  inputs={inputs}
                  onInputChange={handleInputChange}
                  onPresetSelect={handlePresetSelect}
                />
              </div>

              {/* Results Display */}
              <div>
                <ResultsDisplay results={results} inputs={inputs} />
              </div>
            </div>
          </div>
        </section>

        {/* Affiliate Disclosure - On-Page */}
        <section className="py-2">
          <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '90rem' }}>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 mb-4 text-center">
              <p className="text-xs text-gray-500">
                📋 <strong>Affiliate Disclosure:</strong> This page contains affiliate links. If you click through and make a purchase or open an account, we may earn a commission at no additional cost to you. This helps us maintain this free calculator tool.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: Dynamic CTA based on winner */}
        <section className="py-6">
          <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '90rem' }}>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-8 my-8 text-center">
              {isBuyingWinner && (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    Ready to Start Your Home Buying Journey?
                  </h2>
                  <p className="text-gray-700 mb-6">
                    Based on your analysis, <strong>buying</strong> appears to be the better financial choice for you.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
                    <a
                      href="https://track.flexlinkspro.com/g.ashx?foid=24.242107.6666419&trid=1524557.242107&foc=16&fot=9999&fos=6"
                      target="_blank"
                      rel="nofollow sponsored"
                      data-affiliate="mortgage-rates"
                      className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-md text-center"
                    >
                      Compare Mortgage Rates
                    </a>
                    <button
                      onClick={() => console.log('Affiliate link placeholder - real estate search')}
                      data-affiliate="real-estate-search"
                      className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-md"
                    >
                      Find Homes in Your Area
                    </button>
                  </div>
                  <p className="text-sm text-gray-600">
                    Get pre-qualified in minutes and explore properties that fit your budget.
                  </p>
                </>
              )}

              {isRentingWinner && (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    Maximize Your Investment Strategy While Renting
                  </h2>
                  <p className="text-gray-700 mb-6">
                    Based on your analysis, <strong>renting and investing</strong> appears to be the better financial choice for you.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
                    {/* TODO: Replace with real affiliate links */}
                    <button
                      onClick={() => console.log('Affiliate link placeholder - investing platform')}
                      data-affiliate="investing-platform"
                      className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-md"
                    >
                      Start Investing Today
                    </button>
                    <button
                      onClick={() => console.log('Affiliate link placeholder - rental search')}
                      data-affiliate="rental-search"
                      className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-md"
                    >
                      Find Rental Properties
                    </button>
                  </div>
                  <p className="text-sm text-gray-600">
                    Open an investment account and start building your portfolio while you rent.
                  </p>
                </>
              )}

              {!isBuyingWinner && !isRentingWinner && (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    Renting vs Buying: Explore Your Options
                  </h2>
                  <p className="text-gray-700 mb-6">
                    The financial outcome is similar for both scenarios. Consider your lifestyle preferences and goals.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
                    <a
                      href="https://track.flexlinkspro.com/g.ashx?foid=24.242107.6666419&trid=1524557.242107&foc=16&fot=9999&fos=6"
                      target="_blank"
                      rel="nofollow sponsored"
                      data-affiliate="mortgage-rates"
                      className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-md text-center"
                    >
                      Compare Mortgage Rates
                    </a>
                    <button
                      onClick={() => console.log('Affiliate link placeholder - investing platform')}
                      data-affiliate="investing-platform"
                      className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-md"
                    >
                      Start Investing
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Section 2: Helpful Resources Cards */}
        <section className="py-6">
          <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '90rem' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Helpful Resources to Get Started
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1: Check Credit Score */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-blue-300 transition-all">
                <div className="flex justify-center mb-4">
                  <CreditCard className="w-12 h-12 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2 text-center">
                  Check Your Credit Score
                </h3>
                <p className="text-gray-600 text-sm mb-4 text-center">
                  See your credit score and get tips to improve it before applying for a mortgage. A higher score means better rates.
                </p>
                {/* TODO: Replace with affiliate links when approved */}
                <button
                  onClick={() => console.log('Affiliate link placeholder - credit score check')}
                  data-affiliate="credit-score"
                  className="w-full text-blue-600 hover:text-blue-800 font-medium transition-colors text-center"
                >
                  Check Score →
                </button>
              </div>

              {/* Card 2: Mortgage Options */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-blue-300 transition-all">
                <div className="flex justify-center mb-4">
                  <Building2 className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2 text-center">
                  Compare Mortgage Rates
                </h3>
                <p className="text-gray-600 text-sm mb-4 text-center">
                  See current rates from top lenders and get pre-qualified in minutes.
                </p>
                <a
                  href="https://track.flexlinkspro.com/g.ashx?foid=24.242107.6666419&trid=1524557.242107&foc=16&fot=9999&fos=6"
                  target="_blank"
                  rel="nofollow sponsored"
                  data-affiliate="mortgage-comparison"
                  className="block w-full text-blue-600 hover:text-blue-800 font-medium transition-colors text-center"
                >
                  View Rates →
                </a>
              </div>

              {/* Card 3: Real Estate Search */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-blue-300 transition-all">
                <div className="flex justify-center mb-4">
                  <Home className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2 text-center">
                  Browse Properties
                </h3>
                <p className="text-gray-600 text-sm mb-4 text-center">
                  Explore homes in your area that match your budget and preferences.
                </p>
                {/* TODO: Replace with affiliate links when approved */}
                <button
                  onClick={() => console.log('Affiliate link placeholder - real estate search')}
                  data-affiliate="property-search"
                  className="w-full text-blue-600 hover:text-blue-800 font-medium transition-colors text-center"
                >
                  Search Homes →
                </button>
              </div>

              {/* Card 4: Investment Platforms */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-blue-300 transition-all">
                <div className="flex justify-center mb-4">
                  <TrendingUp className="w-12 h-12 text-indigo-600" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2 text-center">
                  Start Investing
                </h3>
                <p className="text-gray-600 text-sm mb-4 text-center">
                  Open an investment account and start building wealth for your future.
                </p>
                {/* TODO: Replace with affiliate links when approved */}
                <button
                  onClick={() => console.log('Affiliate link placeholder - investment platform')}
                  data-affiliate="investment-platform"
                  className="w-full text-blue-600 hover:text-blue-800 font-medium transition-colors text-center"
                >
                  Get Started →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Educational SEO Content Section */}
        <section className="py-6 bg-gray-50">
          <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '90rem' }}>
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm mt-8 mb-8" style={{ padding: '48px 40px' }}>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Should You Rent or Buy a Home?
              </h2>

              <p className="text-base text-gray-700 mb-6" style={{ lineHeight: '1.7' }}>
                The decision to rent or buy a home is one of the most significant financial choices you&apos;ll make. Our free rent vs buy calculator helps you compare the true costs of renting versus buying, including factors like mortgage payments, property taxes, maintenance costs, and investment returns.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-10">
                When Buying a Home Makes Financial Sense
              </h3>
              <p className="text-base text-gray-700 mb-4" style={{ lineHeight: '1.7' }}>
                Buying typically makes sense when:
              </p>
              <ul className="list-disc pl-6 mb-8 text-gray-700" style={{ lineHeight: '1.7' }}>
                <li className="mb-3"><strong className="text-gray-900">Long-term stability:</strong> You plan to stay in the area for at least 5-7 years</li>
                <li className="mb-3"><strong className="text-gray-900">Financial readiness:</strong> You have a stable income, good credit score (ideally 620+), and an emergency fund</li>
                <li className="mb-3"><strong className="text-gray-900">Building equity:</strong> Home prices are appreciating in your market</li>
                <li className="mb-3"><strong className="text-gray-900">Tax benefits:</strong> You can take advantage of mortgage interest deductions</li>
                <li className="mb-3"><strong className="text-gray-900">Fixed housing costs:</strong> You prefer predictable monthly payments with a fixed-rate mortgage</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-10">
                When Renting Makes More Financial Sense
              </h3>
              <p className="text-base text-gray-700 mb-4" style={{ lineHeight: '1.7' }}>
                Renting may be the better choice when:
              </p>
              <ul className="list-disc pl-6 mb-8 text-gray-700" style={{ lineHeight: '1.7' }}>
                <li className="mb-3"><strong className="text-gray-900">Flexibility needed:</strong> Your career or life situation may require relocation</li>
                <li className="mb-3"><strong className="text-gray-900">High housing costs:</strong> The local market has inflated home prices or high property taxes</li>
                <li className="mb-3"><strong className="text-gray-900">Investment opportunities:</strong> You can earn better returns investing the difference in the stock market</li>
                <li className="mb-3"><strong className="text-gray-900">Credit building:</strong> You&apos;re working on improving your credit score or saving for a larger down payment</li>
                <li className="mb-3"><strong className="text-gray-900">No maintenance burden:</strong> You prefer your landlord handle repairs and upkeep</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-10">
                Next Steps After Using the Calculator
              </h3>
              <p className="text-base text-gray-700 mb-4" style={{ lineHeight: '1.7' }}>
                Once you&apos;ve compared renting vs buying, consider these next steps:
              </p>
              <ul className="list-disc pl-6 mb-8 text-gray-700" style={{ lineHeight: '1.7' }}>
                <li className="mb-3"><strong className="text-gray-900">Check your credit score:</strong> A higher score means better mortgage rates and lower monthly payments</li>
                <li className="mb-3"><strong className="text-gray-900">Get pre-approved:</strong> Know exactly how much you can borrow before house hunting</li>
                <li className="mb-3"><strong className="text-gray-900">Compare mortgage rates:</strong> Shop around from multiple lenders for the best terms</li>
                <li className="mb-3"><strong className="text-gray-900">Calculate true affordability:</strong> Include all costs beyond just the mortgage payment</li>
              </ul>

              <p className="text-base text-gray-700" style={{ lineHeight: '1.7' }}>
                Ready to take the next step? Use the resources above to check your credit score or compare mortgage rates from top lenders.
              </p>

            </div>
          </div>
        </section>

        {/* Disclaimer Section */}
        <section className="py-8 bg-white">
          <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '90rem' }}>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">
                Important Disclaimer
              </h2>
              <div className="text-sm text-gray-600 space-y-3">
                <p>
                  This calculator provides general estimates for comparison purposes only. Default values and assumptions may be outdated or may not reflect your specific situation. Actual costs, returns, and outcomes will vary based on numerous factors including but not limited to: local market conditions, individual financial circumstances, tax laws, interest rate changes, and property-specific details.
                </p>
                <p>
                  This tool does not constitute financial, tax, legal, or investment advice. For personalized guidance on your specific situation, including tax savings calculations and deduction eligibility, please consult with qualified professionals such as a financial advisor, tax specialist, accountant, or real estate attorney.
                </p>
                <p>
                  Past performance and historical averages do not guarantee future results.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
