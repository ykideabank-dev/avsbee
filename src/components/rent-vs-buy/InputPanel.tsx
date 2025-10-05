'use client';

import { useState } from 'react';
import { ScenarioInputs } from '@/lib/calculators/rent-vs-buy/types';
import { regionalPresets } from '@/lib/calculators/rent-vs-buy/presets';

interface InputPanelProps {
  inputs: ScenarioInputs;
  onInputChange: (field: keyof ScenarioInputs, value: number | boolean) => void;
  onPresetSelect: (presetId: string) => void;
}

export default function InputPanel({
  inputs,
  onInputChange,
  onPresetSelect,
}: InputPanelProps) {
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        Calculator Inputs
      </h2>

      {/* Regional Preset Selector */}
      <div className="mb-6">
        <label
          htmlFor="preset"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Regional Preset
        </label>
        <select
          id="preset"
          onChange={(e) => onPresetSelect(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="">Custom</option>
          {regionalPresets.map((preset) => (
            <option key={preset.id} value={preset.id}>
              {preset.name}
            </option>
          ))}
        </select>
        <p className="mt-1 text-sm text-gray-500">
          Load typical values for your area
        </p>
      </div>

      {/* Input Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Home Price */}
        <div>
          <label
            htmlFor="homePrice"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Home Price
          </label>
          <div className="relative">
            <span className="absolute left-3 top-2 text-gray-500">$</span>
            <input
              type="number"
              id="homePrice"
              value={inputs.homePrice}
              onChange={(e) =>
                onInputChange('homePrice', parseFloat(e.target.value) || 0)
              }
              className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="500000"
            />
          </div>
        </div>

        {/* Down Payment % */}
        <div>
          <label
            htmlFor="downPaymentPct"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Down Payment %
          </label>
          <div className="relative">
            <input
              type="number"
              id="downPaymentPct"
              value={inputs.downPaymentPct * 100}
              onChange={(e) =>
                onInputChange(
                  'downPaymentPct',
                  (parseFloat(e.target.value) || 0) / 100
                )
              }
              min="0"
              max="100"
              step="1"
              className="w-full pr-8 pl-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="20"
            />
            <span className="absolute right-3 top-2 text-gray-500">%</span>
          </div>
        </div>

        {/* Mortgage Rate % */}
        <div>
          <label
            htmlFor="mortgageRate"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Mortgage Rate %
          </label>
          <div className="relative">
            <input
              type="number"
              id="mortgageRate"
              value={inputs.mortgageRate * 100}
              onChange={(e) =>
                onInputChange(
                  'mortgageRate',
                  (parseFloat(e.target.value) || 0) / 100
                )
              }
              min="0"
              max="20"
              step="0.1"
              className="w-full pr-8 pl-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="6.5"
            />
            <span className="absolute right-3 top-2 text-gray-500">%</span>
          </div>
        </div>

        {/* Loan Term */}
        <div>
          <label
            htmlFor="loanTermYears"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Loan Term
          </label>
          <select
            id="loanTermYears"
            value={inputs.loanTermYears}
            onChange={(e) =>
              onInputChange('loanTermYears', parseInt(e.target.value))
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="15">15 years</option>
            <option value="20">20 years</option>
            <option value="30">30 years</option>
          </select>
        </div>

        {/* Time Horizon */}
        <div>
          <label
            htmlFor="timeHorizonYears"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Time Horizon
          </label>
          <select
            id="timeHorizonYears"
            value={inputs.timeHorizonYears}
            onChange={(e) =>
              onInputChange('timeHorizonYears', parseInt(e.target.value))
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="10">10 years</option>
            <option value="15">15 years</option>
            <option value="20">20 years</option>
            <option value="30">30 years</option>
          </select>
          <p className="mt-1 text-sm text-gray-500">
            How long do you plan to stay?
          </p>
        </div>

        {/* Current Monthly Rent */}
        <div>
          <label
            htmlFor="currentRent"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Current Monthly Rent
          </label>
          <div className="relative">
            <span className="absolute left-3 top-2 text-gray-500">$</span>
            <input
              type="number"
              id="currentRent"
              value={inputs.currentRent}
              onChange={(e) =>
                onInputChange('currentRent', parseFloat(e.target.value) || 0)
              }
              className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="2500"
            />
          </div>
        </div>
      </div>

      {/* Advanced Settings (Collapsible) */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="flex items-center justify-between w-full text-left"
        >
          <span className="text-sm font-medium text-gray-700">
            Advanced Settings
          </span>
          <svg
            className={`w-5 h-5 text-gray-500 transition-transform ${
              showAdvanced ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {showAdvanced && (
          <div className="mt-4 text-sm text-gray-500">
            {/* Placeholder for advanced settings */}
            <p>Advanced settings coming soon...</p>
          </div>
        )}
      </div>
    </div>
  );
}
