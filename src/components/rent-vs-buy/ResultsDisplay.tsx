'use client';

import { ScenarioOutputs, ScenarioInputs } from '@/lib/calculators/rent-vs-buy/types';

interface ResultsDisplayProps {
  results: ScenarioOutputs;
  inputs: ScenarioInputs;
}

export default function ResultsDisplay({ results, inputs }: ResultsDisplayProps) {
  const formatCurrency = (value: number): string => {
    return `$${Math.round(value).toLocaleString()}`;
  };

  const isBuyWinner = results.winner === 'buy';
  const isRentWinner = results.winner === 'rent';
  const isTie = results.winner === 'tie';

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        Results
      </h2>

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
        </div>
      </div>

      {/* Summary Section */}
      <div className="bg-indigo-50 rounded-lg p-6 text-center">
        {isBuyWinner && (
          <>
            <p className="text-2xl font-bold text-indigo-900 mb-2">
              🏠 Buying wins by {formatCurrency(Math.abs(results.netDifference))}
            </p>
            <p className="text-gray-700">
              After {inputs.timeHorizonYears} years
            </p>
          </>
        )}

        {isRentWinner && (
          <>
            <p className="text-2xl font-bold text-indigo-900 mb-2">
              🏢 Renting + Investing wins by {formatCurrency(Math.abs(results.netDifference))}
            </p>
            <p className="text-gray-700">
              After {inputs.timeHorizonYears} years
            </p>
          </>
        )}

        {isTie && (
          <>
            <p className="text-2xl font-bold text-indigo-900 mb-2">
              📊 It's essentially a tie (within $1,000)
            </p>
            <p className="text-gray-700">
              After {inputs.timeHorizonYears} years
            </p>
          </>
        )}
      </div>
    </div>
  );
}
