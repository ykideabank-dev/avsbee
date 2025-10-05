'use client';

import { useState } from 'react';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import InputPanel from '@/components/rent-vs-buy/InputPanel';
import ResultsDisplay from '@/components/rent-vs-buy/ResultsDisplay';
import { ScenarioInputs } from '@/lib/calculators/rent-vs-buy/types';
import { calculateScenario } from '@/lib/calculators/rent-vs-buy/calculator';
import { regionalPresets, getPresetById } from '@/lib/calculators/rent-vs-buy/presets';

export default function RentVsBuyPage() {
  // Get Orange County preset as default
  const orangeCountyPreset = getPresetById('orange-county-ca')!;

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
              Make an informed decision about one of life's biggest financial choices.
              Compare the true costs of renting versus buying a home.
            </p>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

        {/* Educational Note */}
        <section className="py-8 bg-white border-t border-gray-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                📚 How This Calculator Works
              </h3>
              <p className="text-gray-700 text-sm">
                This calculator compares buying a home versus renting and investing the difference.
                It accounts for mortgage payments, property taxes, maintenance, home appreciation,
                investment returns, and tax benefits. The results show your net wealth after your
                chosen time horizon, helping you make the best financial decision for your situation.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
