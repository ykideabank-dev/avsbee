'use client';

import { useState } from 'react';
import { ScenarioOutputs, ScenarioInputs } from '@/lib/calculators/rent-vs-buy/types';

interface ResultsDisplayProps {
  results: ScenarioOutputs;
  inputs: ScenarioInputs;
}

export default function ResultsDisplay({ results, inputs }: ResultsDisplayProps) {
  const [buyingDetailsOpen, setBuyingDetailsOpen] = useState(false);
  const [rentingDetailsOpen, setRentingDetailsOpen] = useState(false);

  const formatCurrency = (value: number): string => {
    return `$${Math.round(value).toLocaleString()}`;
  };

  const isBuyWinner = results.winner === 'buy';
  const isRentWinner = results.winner === 'rent';

  // Calculate derived values for detailed breakdowns
  const downPayment = inputs.homePrice * inputs.downPaymentPct;
  const closingCosts = inputs.homePrice * inputs.closingCostsPct;
  const totalUpfront = downPayment + closingCosts;
  const sellingCosts = results.homeFutureValue * inputs.sellingCostsPct;

  // Pure expenses (money that's gone forever) for buying
  const pureExpensesBuying = results.totalInterestPaid + results.totalPropertyTax +
                             results.totalHOA + results.totalMaintenance + sellingCosts - results.totalTaxSavings;

  // Get net results from calculator (already correctly calculated)
  const netResultBuying = results.netResultBuying;
  const netResultRenting = results.netResultRenting;

  // Investment return calculation
  const investmentReturn = results.investmentPortfolioValue - results.totalInvested - results.totalMonthlyContributions;

  // Net result comparison (positive means buying is better, negative means renting is better)
  const netResultDifference = netResultBuying - netResultRenting;

  // Determine winner based on net results (higher is better, even if negative)
  const isNetResultBuyWinner = netResultDifference > 1000;
  const isNetResultRentWinner = netResultDifference < -1000;
  const isNetResultTie = Math.abs(netResultDifference) <= 1000;

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        Results
      </h2>

      {/* Equal Monthly Budget Assumption Callout */}
      <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r">
        <div className="flex items-start">
          <span className="text-2xl mr-3">💡</span>
          <div>
            <h3 className="font-semibold text-blue-900 mb-1">Equal Monthly Budget Assumption</h3>
            <p className="text-sm text-blue-800">
              This comparison assumes you have the same monthly budget for both scenarios. When buying costs more per month, the renter invests the difference in the stock market.
            </p>
          </div>
        </div>
      </div>

      {/* Two Cards Side by Side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* BUYING Card */}
        <div
          className={`rounded-lg p-6 ${
            isBuyWinner
              ? 'border-2 border-green-500 shadow-lg bg-green-50'
              : 'border border-gray-200 bg-white'
          }`}
        >
          {/* Icon and Winner Badge */}
          <div className="flex items-start justify-between mb-4">
            <span className="text-5xl">🏠</span>
            {isBuyWinner && (
              <span className="px-3 py-1 bg-green-500 text-white text-sm font-semibold rounded-full">
                Winner
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            BUYING
          </h3>

          {/* Big Number */}
          <div className="mb-1">
            <p className="text-3xl font-bold text-gray-900">
              {formatCurrency(results.netHomeEquity)}
            </p>
          </div>
          <p className="text-sm text-gray-600 mb-4">Net Equity After Selling</p>

          {/* Details */}
          <div className="space-y-2 text-sm text-gray-600 pt-4 border-t border-gray-200">
            <div className="flex justify-between">
              <span>Monthly P&I:</span>
              <span className="font-medium">{formatCurrency(results.monthlyPI)}</span>
            </div>
            <div className="flex justify-between">
              <span>Total Interest:</span>
              <span className="font-medium">{formatCurrency(results.totalInterestPaid)}</span>
            </div>
            <div className="flex justify-between">
              <span>Total Property Tax:</span>
              <span className="font-medium">{formatCurrency(results.totalPropertyTax)}</span>
            </div>
          </div>

          {/* Show Details Button */}
          <button
            onClick={() => setBuyingDetailsOpen(!buyingDetailsOpen)}
            className="mt-4 w-full text-sm text-indigo-600 hover:text-indigo-800 font-medium flex items-center justify-center gap-2 py-2 hover:bg-indigo-50 rounded transition-colors"
          >
            {buyingDetailsOpen ? 'Hide Details ▲' : 'Show Details ▼'}
          </button>

          {/* Detailed Breakdown */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              buyingDetailsOpen ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="mt-4 pt-4 border-t border-gray-200 bg-gray-50 -mx-6 -mb-6 px-6 pb-6 rounded-b-lg">
              {/* Helper Note */}
              <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded text-sm text-blue-900">
                <strong>Net Result</strong> = What you get back minus expenses that are GONE forever (interest, taxes, HOA, maintenance, selling costs)
              </div>

              {/* Section 1: Initial Investment */}
              <div className="mb-4 pb-4 border-b-2 border-gray-300 bg-gray-50 p-4 rounded">
                <h4 className="font-semibold text-gray-900 mb-2">Total Invested</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Down payment:</span>
                    <span className="font-medium text-gray-900">{formatCurrency(downPayment)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Closing costs:</span>
                    <span className="font-medium text-gray-900">{formatCurrency(closingCosts)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Principal payments:</span>
                    <span className="font-medium text-gray-900">{formatCurrency(results.totalPrincipalPaid)}</span>
                  </div>
                  <div className="flex justify-between pt-1 mt-1 border-t border-gray-400">
                    <span className="font-semibold text-gray-900">Total invested (in equity):</span>
                    <span className="font-bold text-gray-900">{formatCurrency(totalUpfront + results.totalPrincipalPaid)}</span>
                  </div>
                </div>
              </div>

              {/* Section 2: Pure Expenses (Gone Forever) */}
              <div className="mb-4 pb-4 border-b-2 border-gray-300 bg-gray-50 p-4 rounded">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Total Costs Over Time
                </h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total interest paid:</span>
                    <span className="font-medium text-red-600">{formatCurrency(results.totalInterestPaid)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total property tax:</span>
                    <span className="font-medium text-red-600">{formatCurrency(results.totalPropertyTax)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total HOA fees:</span>
                    <span className="font-medium text-red-600">{formatCurrency(results.totalHOA)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total maintenance & insurance:</span>
                    <span className="font-medium text-red-600">{formatCurrency(results.totalMaintenance)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Selling costs:</span>
                    <span className="font-medium text-red-600">{formatCurrency(sellingCosts)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Less: Tax savings:</span>
                    <span className="font-medium text-green-600">({formatCurrency(results.totalTaxSavings)})</span>
                  </div>
                  <div className="flex justify-between pt-1 mt-1 border-t border-gray-400">
                    <span className="font-semibold text-gray-900">Total pure expenses:</span>
                    <span className="font-bold text-red-600">{formatCurrency(pureExpensesBuying)}</span>
                  </div>
                </div>
              </div>

              {/* Section 3: Final Position */}
              <div className="mb-4 pb-4 border-b-2 border-gray-300 bg-gray-50 p-4 rounded">
                <h4 className="font-semibold text-gray-900 mb-2">Home&apos;s Value After {inputs.timeHorizonYears} Yrs</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Home market value:</span>
                    <span className="font-medium text-gray-900">{formatCurrency(results.homeFutureValue)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Remaining mortgage:</span>
                    <span className="font-medium text-red-600">({formatCurrency(results.remainingMortgageBalance)})</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Selling costs:</span>
                    <span className="font-medium text-red-600">({formatCurrency(sellingCosts)})</span>
                  </div>
                  <div className="flex justify-between pt-1 mt-1 border-t border-gray-400">
                    <span className="font-semibold text-gray-900">Final home equity:</span>
                    <span className="font-bold text-gray-900">{formatCurrency(results.netHomeEquity)}</span>
                  </div>
                </div>
              </div>

              {/* Section 4: Net Result Calculation */}
              <div className="bg-white rounded p-5 border-2 border-indigo-200">
                <h4 className="font-semibold text-gray-900 mb-3">Net Result Calculation</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Final equity:</span>
                    <span className="font-medium text-gray-900">{formatCurrency(results.netHomeEquity)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Minus pure expenses:</span>
                    <span className="font-medium text-red-600">({formatCurrency(pureExpensesBuying)})</span>
                  </div>
                  <div className="flex justify-between pt-2 mt-2 border-t-2 border-indigo-400">
                    <span className="font-bold text-gray-900">= Net Wealth (After {inputs.timeHorizonYears} Yrs):</span>
                    <span className={`font-bold text-lg ${netResultBuying >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {netResultBuying >= 0 ? '+' : ''}{formatCurrency(netResultBuying)}
                    </span>
                  </div>
                  <div className="mt-3 p-2 bg-gray-50 rounded text-xs text-gray-600 italic">
                    Note: Down payment and principal payments are not subtracted because they&apos;re already part of your equity
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RENTING + INVESTING Card */}
        <div
          className={`rounded-lg p-6 ${
            isRentWinner
              ? 'border-2 border-green-500 shadow-lg bg-green-50'
              : 'border border-gray-200 bg-white'
          }`}
        >
          {/* Icon and Winner Badge */}
          <div className="flex items-start justify-between mb-4">
            <span className="text-5xl">🏢</span>
            {isRentWinner && (
              <span className="px-3 py-1 bg-green-500 text-white text-sm font-semibold rounded-full">
                Winner
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            RENTING + INVESTING
          </h3>

          {/* Big Number */}
          <div className="mb-1">
            <p className="text-3xl font-bold text-gray-900">
              {formatCurrency(results.investmentPortfolioValue)}
            </p>
          </div>
          <p className="text-sm text-gray-600 mb-4">Investment Portfolio Value</p>

          {/* Details */}
          <div className="space-y-2 text-sm text-gray-600 pt-4 border-t border-gray-200">
            <div className="flex justify-between">
              <span>Starting Rent:</span>
              <span className="font-medium">{formatCurrency(inputs.currentRent)}/mo</span>
            </div>
            <div className="flex justify-between">
              <span>Final Rent:</span>
              <span className="font-medium">{formatCurrency(results.finalMonthlyRent)}/mo</span>
            </div>
            <div className="flex justify-between">
              <span>Total Invested:</span>
              <span className="font-medium">{formatCurrency(results.totalInvested)}</span>
            </div>
          </div>

          {/* Show Details Button */}
          <button
            onClick={() => setRentingDetailsOpen(!rentingDetailsOpen)}
            className="mt-4 w-full text-sm text-indigo-600 hover:text-indigo-800 font-medium flex items-center justify-center gap-2 py-2 hover:bg-indigo-50 rounded transition-colors"
          >
            {rentingDetailsOpen ? 'Hide Details ▲' : 'Show Details ▼'}
          </button>

          {/* Detailed Breakdown */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              rentingDetailsOpen ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="mt-4 pt-4 border-t border-gray-200 bg-gray-50 -mx-6 -mb-6 px-6 pb-6 rounded-b-lg">
              {/* Helper Note */}
              <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded text-sm text-blue-900">
                <strong>Net Result</strong> = What you get back minus pure expenses (rent paid - money that&apos;s gone forever)
              </div>

              {/* Section 1: What You Invested */}
              <div className="mb-4 pb-4 border-b-2 border-gray-300 bg-gray-50 p-4 rounded">
                <h4 className="font-semibold text-gray-900 mb-2">Total Invested</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Initial investment:</span>
                    <span className="font-medium text-gray-900">{formatCurrency(results.totalInvested)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monthly contributions:</span>
                    <span className="font-medium text-gray-900">{formatCurrency(results.totalMonthlyContributions)}</span>
                  </div>
                  <div className="flex justify-between pt-1 mt-1 border-t border-gray-400">
                    <span className="font-semibold text-gray-900">Total invested (in portfolio):</span>
                    <span className="font-bold text-gray-900">{formatCurrency(results.totalInvested + results.totalMonthlyContributions)}</span>
                  </div>
                </div>
              </div>

              {/* Section 2: Pure Expenses (Gone Forever) */}
              <div className="mb-4 pb-4 border-b-2 border-gray-300 bg-gray-50 p-4 rounded">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Total Costs Over Time
                </h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total rent paid:</span>
                    <span className="font-medium text-red-600">{formatCurrency(results.totalRentPaid)}</span>
                  </div>
                  <div className="flex justify-between pt-1 mt-1 border-t border-gray-400">
                    <span className="font-semibold text-gray-900">Total pure expenses:</span>
                    <span className="font-bold text-red-600">{formatCurrency(results.totalRentPaid)}</span>
                  </div>
                </div>
              </div>

              {/* Section 3: Investment Growth */}
              <div className="mb-4 pb-4 border-b-2 border-gray-300 bg-gray-50 p-4 rounded">
                <h4 className="font-semibold text-gray-900 mb-2">Portfolio&apos;s Value After {inputs.timeHorizonYears} Yrs</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Initial investment:</span>
                    <span className="font-medium text-gray-900">{formatCurrency(results.totalInvested)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monthly contributions:</span>
                    <span className="font-medium text-gray-900">{formatCurrency(results.totalMonthlyContributions)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Investment returns:</span>
                    <span className="font-medium text-green-600">+{formatCurrency(investmentReturn)}</span>
                  </div>
                  <div className="flex justify-between pt-1 mt-1 border-t border-gray-400">
                    <span className="font-semibold text-gray-900">Final portfolio value:</span>
                    <span className="font-bold text-gray-900">{formatCurrency(results.investmentPortfolioValue)}</span>
                  </div>
                </div>
              </div>

              {/* Section 4: Net Result Calculation */}
              <div className="bg-white rounded p-5 border-2 border-indigo-200">
                <h4 className="font-semibold text-gray-900 mb-3">Net Result Calculation</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Final portfolio:</span>
                    <span className="font-medium text-gray-900">{formatCurrency(results.investmentPortfolioValue)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Minus rent paid:</span>
                    <span className="font-medium text-red-600">({formatCurrency(results.totalRentPaid)})</span>
                  </div>
                  <div className="flex justify-between pt-2 mt-2 border-t-2 border-indigo-400">
                    <span className="font-bold text-gray-900">= Net Wealth (After {inputs.timeHorizonYears} Yrs):</span>
                    <span className={`font-bold text-lg ${netResultRenting >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {netResultRenting >= 0 ? '+' : ''}{formatCurrency(netResultRenting)}
                    </span>
                  </div>
                  <div className="mt-3 p-2 bg-gray-50 rounded text-xs text-gray-600 italic">
                    Note: Initial investment and monthly contributions are not subtracted because they&apos;re already part of your portfolio
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Section */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <div className="text-center">
          {isNetResultBuyWinner && (
            <p className="text-base text-gray-900">
              <strong>Buying</strong> has a better net result by {formatCurrency(Math.abs(netResultDifference))}
            </p>
          )}

          {isNetResultRentWinner && (
            <p className="text-base text-gray-900">
              <strong>Renting + Investing</strong> has a better net result by {formatCurrency(Math.abs(netResultDifference))}
            </p>
          )}

          {isNetResultTie && (
            <p className="text-base text-gray-900">
              It&apos;s essentially a tie (within $1,000)
            </p>
          )}
        </div>

        {/* Explanation */}
        <div className="mt-3 pt-3 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            <strong>Net Result</strong> = What you get back minus what you put in over {inputs.timeHorizonYears} years
          </p>
        </div>
      </div>
    </div>
  );
}
