import { ScenarioInputs, ScenarioOutputs } from './types';
import {
  calculateMonthlyPayment,
  calculateRemainingBalance,
  calculateInterestPayment,
  calculatePrincipalPayment,
} from './mortgage';

/**
 * Calculates and compares the financial outcomes of buying vs renting over a time horizon.
 *
 * BUYING SCENARIO:
 * - Use down payment to buy home, take out mortgage for remainder
 * - Each month: pay P&I, property tax, HOA, maintenance (minus tax savings)
 * - Track: mortgage balance decreasing, equity building
 * - Final wealth: Home market value - remaining mortgage - selling costs
 *
 * RENTING SCENARIO:
 * - Invest the down payment amount immediately in the market
 * - Each month: pay rent (expense only, like HOA for buyers)
 * - Investment portfolio compounds at investmentReturnRate
 * - Final wealth: Investment portfolio value
 *
 * These are independent scenarios - buying costs do not affect renter's portfolio.
 *
 * @param inputs - The scenario parameters
 * @returns Complete financial analysis results for both buying and renting
 */
export function calculateScenario(inputs: ScenarioInputs): ScenarioOutputs {
  // Calculate initial values
  const downPayment = inputs.homePrice * inputs.downPaymentPct;
  const loanAmount = inputs.homePrice - downPayment;
  const closingCosts = inputs.homePrice * inputs.closingCostsPct;
  const monthlyPI = calculateMonthlyPayment(
    loanAmount,
    inputs.mortgageRate,
    inputs.loanTermYears
  );

  // Initialize accumulators for buying scenario
  let totalInterestPaid = 0;
  let totalPrincipalPaid = 0;
  let totalPropertyTax = 0;
  let totalHOA = 0;
  let totalMaintenance = 0;
  let totalTaxSavings = 0;

  // Initialize accumulators for renting scenario
  let totalRentPaid = 0;
  const initialInvestment = downPayment + closingCosts; // Initial investment (money not spent on buying)
  let investmentPortfolio = initialInvestment;
  let totalMonthlyContributions = 0; // Track monthly investments from the difference

  // Current values that change over time
  let currentHomeValue = inputs.homePrice;
  let currentAssessedValue = inputs.homePrice; // Prop 13: assessed value starts at purchase price
  let currentRent = inputs.currentRent;
  let currentMortgageBalance = loanAmount;

  // Monthly rates for calculations
  const monthlyInvestmentRate = Math.pow(1 + inputs.investmentReturnRate, 1 / 12) - 1;
  const monthlyHomeAppreciation = Math.pow(1 + inputs.homeAppreciationRate, 1 / 12) - 1;

  // Loop through each month
  const totalMonths = inputs.timeHorizonYears * 12;

  for (let month = 1; month <= totalMonths; month++) {
    // === BUYING SCENARIO ===

    // Update home market value (appreciates monthly)
    if (month > 1) {
      currentHomeValue *= (1 + monthlyHomeAppreciation);
    }

    // Update assessed value (Prop 13: grows at fixed rate annually)
    if (month > 1 && month % 12 === 1) {
      currentAssessedValue *= (1 + inputs.assessedValueGrowthRate);
    }

    // Calculate mortgage payment breakdown
    const interestPayment = calculateInterestPayment(
      currentMortgageBalance,
      inputs.mortgageRate
    );
    const principalPayment = calculatePrincipalPayment(monthlyPI, interestPayment);

    // Update mortgage balance
    currentMortgageBalance -= principalPayment;
    if (currentMortgageBalance < 0) currentMortgageBalance = 0;

    // Calculate monthly ownership costs
    const monthlyPropertyTax = (currentAssessedValue * inputs.propertyTaxRate) / 12;
    const monthlyMaintenance = (currentHomeValue * inputs.maintenanceInsuranceRate) / 12;
    const monthlyHOA = inputs.hoaMonthly;

    // Calculate tax savings (if applicable)
    let monthlyTaxSavings = 0;
    if (inputs.includeTaxBenefits) {
      // Deductible amount: mortgage interest + property tax
      const monthlyDeductible = interestPayment + monthlyPropertyTax;
      monthlyTaxSavings = monthlyDeductible * inputs.marginalTaxRate;
    }

    // Accumulate buying costs
    totalInterestPaid += interestPayment;
    totalPrincipalPaid += principalPayment;
    totalPropertyTax += monthlyPropertyTax;
    totalHOA += monthlyHOA;
    totalMaintenance += monthlyMaintenance;
    totalTaxSavings += monthlyTaxSavings;

    // === RENTING SCENARIO ===

    // Update rent annually
    if (month > 1 && month % 12 === 1) {
      currentRent *= (1 + inputs.rentInflationRate);
    }

    // Accumulate rent paid
    totalRentPaid += currentRent;

    // Calculate total owner cost for this month
    const totalOwnerCost = monthlyPI + monthlyPropertyTax + monthlyHOA + monthlyMaintenance - monthlyTaxSavings;

    // Calculate monthly difference (equal monthly budget assumption)
    const monthlyDifference = totalOwnerCost - currentRent;

    // If buying costs more, renter invests the difference
    let monthlyInvestment = 0;
    if (monthlyDifference > 0) {
      monthlyInvestment = monthlyDifference;
      totalMonthlyContributions += monthlyInvestment;
    }

    // Compound investment portfolio
    investmentPortfolio *= (1 + monthlyInvestmentRate);

    // Add monthly investment to portfolio
    investmentPortfolio += monthlyInvestment;
  }

  // === FINAL CALCULATIONS ===

  // Final home value
  const homeFutureValue = currentHomeValue;

  // Remaining mortgage balance
  const remainingMortgageBalance = calculateRemainingBalance(
    loanAmount,
    inputs.mortgageRate,
    inputs.loanTermYears,
    totalMonths
  );

  // Selling costs
  const sellingCosts = homeFutureValue * inputs.sellingCostsPct;

  // Net home equity after selling
  const netHomeEquity = homeFutureValue - remainingMortgageBalance - sellingCosts;

  // Final monthly rent
  const finalMonthlyRent = currentRent;

  // Investment portfolio value
  const investmentPortfolioValue = investmentPortfolio;

  // Calculate average monthly contribution
  const averageMonthlyContribution = totalMonthlyContributions / totalMonths;

  // === NET RESULT CALCULATIONS ===

  // BUYING: Final equity minus pure expenses (money that's gone forever)
  // Pure expenses = interest + property tax + HOA + maintenance + selling costs - tax savings
  const pureExpensesBuying = totalInterestPaid + totalPropertyTax + totalHOA + totalMaintenance + sellingCosts - totalTaxSavings;
  const netResultBuying = netHomeEquity - pureExpensesBuying;

  // RENTING: Final portfolio minus pure expenses (money that's gone forever)
  // Pure expenses = rent paid (initial investment and monthly contributions are already in the portfolio)
  const netResultRenting = investmentPortfolioValue - totalRentPaid;

  // === COMPARISON ===

  // Net difference (positive = buying wins, negative = renting wins)
  const netDifference = netResultBuying - netResultRenting;

  // Determine winner
  let winner: 'buy' | 'rent' | 'tie';
  if (Math.abs(netDifference) < 1000) {
    winner = 'tie';
  } else if (netDifference > 0) {
    winner = 'buy';
  } else {
    winner = 'rent';
  }

  // Break-even year calculation (simplified: null for now)
  // TODO: Implement year-by-year tracking to find break-even point
  const breakEvenYear = null;

  return {
    // Buying results
    monthlyPI,
    totalInterestPaid,
    totalPrincipalPaid,
    totalPropertyTax,
    totalHOA,
    totalMaintenance,
    totalTaxSavings,
    homeFutureValue,
    remainingMortgageBalance,
    netHomeEquity,
    netResultBuying,

    // Renting results
    totalRentPaid,
    totalInvested: initialInvestment,
    investmentPortfolioValue,
    finalMonthlyRent,
    totalMonthlyContributions,
    averageMonthlyContribution,
    netResultRenting,

    // Comparison
    netDifference,
    winner,
    breakEvenYear,
  };
}
