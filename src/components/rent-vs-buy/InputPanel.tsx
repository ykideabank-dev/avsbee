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
  const [advancedOpen, setAdvancedOpen] = useState(false);

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
              value={inputs.downPaymentPct === 0 ? '' : inputs.downPaymentPct * 100}
              onChange={(e) => {
                const value = e.target.value;
                if (value === '') {
                  onInputChange('downPaymentPct', 0);
                } else {
                  onInputChange('downPaymentPct', parseFloat(value) / 100);
                }
              }}
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
              value={inputs.mortgageRate === 0 ? '' : Math.round(inputs.mortgageRate * 100 * 1000) / 1000}
              onChange={(e) => {
                const value = e.target.value;
                if (value === '') {
                  onInputChange('mortgageRate', 0);
                } else {
                  onInputChange('mortgageRate', parseFloat(value) / 100);
                }
              }}
              min="0"
              max="20"
              step="0.001"
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
          onClick={() => setAdvancedOpen(!advancedOpen)}
          className="flex items-center justify-between w-full text-left hover:bg-gray-50 -mx-2 px-2 py-2 rounded transition-colors"
        >
          <div>
            <span className="text-sm font-medium text-gray-900">
              {advancedOpen ? '▲' : '▼'} Advanced Settings
            </span>
            <p className="text-xs text-gray-500 mt-1">
              Optional power-user settings for detailed analysis
            </p>
          </div>
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            advancedOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="mt-6 space-y-8">
            {/* Property Costs Group */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                Property Costs
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Property Tax Rate */}
                <div>
                  <label
                    htmlFor="propertyTaxRate"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Property Tax Rate (Annual %)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      id="propertyTaxRate"
                      value={Math.round(inputs.propertyTaxRate * 100 * 100) / 100}
                      onChange={(e) => {
                        const percentValue = parseFloat(e.target.value);
                        const decimalValue = percentValue / 100;
                        onInputChange('propertyTaxRate', decimalValue);
                      }}
                      step="0.01"
                      className="w-full pr-8 pl-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <span className="absolute right-3 top-2 text-gray-500">%</span>
                  </div>
                  <p className="mt-1 text-xs text-gray-500">
                    Preset default: {(inputs.propertyTaxRate * 100).toFixed(2)}%
                  </p>
                </div>

                {/* Assessed Value Growth Rate */}
                <div>
                  <label
                    htmlFor="assessedValueGrowthRate"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Assessed Value Growth Rate (Annual %)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      id="assessedValueGrowthRate"
                      value={Math.round(inputs.assessedValueGrowthRate * 100 * 100) / 100}
                      onChange={(e) => {
                        const percentValue = parseFloat(e.target.value);
                        const decimalValue = percentValue / 100;
                        onInputChange('assessedValueGrowthRate', decimalValue);
                      }}
                      step="0.01"
                      className="w-full pr-8 pl-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <span className="absolute right-3 top-2 text-gray-500">%</span>
                  </div>
                  <p className="mt-1 text-xs text-gray-500">
                    CA Prop 13 limits to 2% annually
                  </p>
                </div>

                {/* HOA Monthly Cost */}
                <div>
                  <label
                    htmlFor="hoaMonthly"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    HOA Monthly Cost
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-2 text-gray-500">$</span>
                    <input
                      type="number"
                      id="hoaMonthly"
                      value={inputs.hoaMonthly}
                      onChange={(e) =>
                        onInputChange('hoaMonthly', parseFloat(e.target.value) || 0)
                      }
                      className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <p className="mt-1 text-xs text-gray-500">
                    Preset default: ${inputs.hoaMonthly}
                  </p>
                </div>

                {/* Maintenance & Insurance Rate */}
                <div>
                  <label
                    htmlFor="maintenanceInsuranceRate"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Maintenance & Insurance Rate (Annual %)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      id="maintenanceInsuranceRate"
                      value={Math.round(inputs.maintenanceInsuranceRate * 100 * 100) / 100}
                      onChange={(e) => {
                        const percentValue = parseFloat(e.target.value);
                        const decimalValue = percentValue / 100;
                        onInputChange('maintenanceInsuranceRate', decimalValue);
                      }}
                      step="0.01"
                      className="w-full pr-8 pl-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <span className="absolute right-3 top-2 text-gray-500">%</span>
                  </div>
                  <p className="mt-1 text-xs text-gray-500">
                    Percentage of home value annually
                  </p>
                </div>
              </div>
            </div>

            {/* Transaction Costs Group */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                Transaction Costs
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Closing Costs */}
                <div>
                  <label
                    htmlFor="closingCostsPct"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Closing Costs (% of Purchase Price)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      id="closingCostsPct"
                      value={Math.round(inputs.closingCostsPct * 100 * 100) / 100}
                      onChange={(e) => {
                        const percentValue = parseFloat(e.target.value);
                        const decimalValue = percentValue / 100;
                        onInputChange('closingCostsPct', decimalValue);
                      }}
                      step="0.01"
                      className="w-full pr-8 pl-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <span className="absolute right-3 top-2 text-gray-500">%</span>
                  </div>
                  <p className="mt-1 text-xs text-gray-500">
                    Preset default: {(inputs.closingCostsPct * 100).toFixed(1)}%
                  </p>
                </div>

                {/* Selling Costs */}
                <div>
                  <label
                    htmlFor="sellingCostsPct"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Selling Costs (% of Sale Price)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      id="sellingCostsPct"
                      value={Math.round(inputs.sellingCostsPct * 100 * 100) / 100}
                      onChange={(e) => {
                        const percentValue = parseFloat(e.target.value);
                        const decimalValue = percentValue / 100;
                        onInputChange('sellingCostsPct', decimalValue);
                      }}
                      step="0.01"
                      className="w-full pr-8 pl-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <span className="absolute right-3 top-2 text-gray-500">%</span>
                  </div>
                  <p className="mt-1 text-xs text-gray-500">
                    Preset default: {(inputs.sellingCostsPct * 100).toFixed(1)}%
                  </p>
                </div>
              </div>
            </div>

            {/* Market Assumptions Group */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                Market Assumptions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Home Appreciation Rate */}
                <div>
                  <label
                    htmlFor="homeAppreciationRate"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Home Appreciation Rate (Annual %)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      id="homeAppreciationRate"
                      value={Math.round(inputs.homeAppreciationRate * 100 * 100) / 100}
                      onChange={(e) => {
                        const percentValue = parseFloat(e.target.value);
                        const decimalValue = percentValue / 100;
                        onInputChange('homeAppreciationRate', decimalValue);
                      }}
                      step="0.01"
                      className="w-full pr-8 pl-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <span className="absolute right-3 top-2 text-gray-500">%</span>
                  </div>
                  <p className="mt-1 text-xs text-gray-500">
                    Preset default: {(inputs.homeAppreciationRate * 100).toFixed(1)}%
                  </p>
                </div>

                {/* Rent Inflation Rate */}
                <div>
                  <label
                    htmlFor="rentInflationRate"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Rent Inflation Rate (Annual %)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      id="rentInflationRate"
                      value={Math.round(inputs.rentInflationRate * 100 * 100) / 100}
                      onChange={(e) => {
                        const percentValue = parseFloat(e.target.value);
                        const decimalValue = percentValue / 100;
                        onInputChange('rentInflationRate', decimalValue);
                      }}
                      step="0.01"
                      className="w-full pr-8 pl-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <span className="absolute right-3 top-2 text-gray-500">%</span>
                  </div>
                  <p className="mt-1 text-xs text-gray-500">
                    Preset default: {(inputs.rentInflationRate * 100).toFixed(1)}%
                  </p>
                </div>

                {/* Investment Return Rate */}
                <div>
                  <label
                    htmlFor="investmentReturnRate"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Investment Return Rate (Annual %)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      id="investmentReturnRate"
                      value={Math.round(inputs.investmentReturnRate * 100 * 100) / 100}
                      onChange={(e) => {
                        const percentValue = parseFloat(e.target.value);
                        const decimalValue = percentValue / 100;
                        onInputChange('investmentReturnRate', decimalValue);
                      }}
                      step="0.01"
                      className="w-full pr-8 pl-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <span className="absolute right-3 top-2 text-gray-500">%</span>
                  </div>
                  <p className="mt-1 text-xs text-gray-500">
                    Stock market average return
                  </p>
                </div>
              </div>
            </div>

            {/* Tax Calculations Group */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                Tax Calculations
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Marginal Tax Rate */}
                <div>
                  <label
                    htmlFor="marginalTaxRate"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Marginal Tax Rate (%)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      id="marginalTaxRate"
                      value={Math.round(inputs.marginalTaxRate * 100 * 100) / 100}
                      onChange={(e) => {
                        const percentValue = parseFloat(e.target.value);
                        const decimalValue = percentValue / 100;
                        onInputChange('marginalTaxRate', decimalValue);
                      }}
                      step="0.01"
                      className="w-full pr-8 pl-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <span className="absolute right-3 top-2 text-gray-500">%</span>
                  </div>
                  <p className="mt-1 text-xs text-gray-500">
                    Your tax bracket for deductions
                  </p>
                </div>

                {/* Mortgage Interest Deduction Checkbox */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tax Deductions
                  </label>
                  <div className="flex items-center h-10">
                    <input
                      type="checkbox"
                      id="includeTaxBenefits"
                      checked={inputs.includeTaxBenefits}
                      onChange={(e) =>
                        onInputChange(
                          'includeTaxBenefits',
                          e.target.checked
                        )
                      }
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="includeTaxBenefits"
                      className="ml-2 text-sm text-gray-700"
                    >
                      Include mortgage interest tax deduction
                    </label>
                  </div>
                  <p className="mt-1 text-xs text-gray-500">
                    Subject to standard deduction limits
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
