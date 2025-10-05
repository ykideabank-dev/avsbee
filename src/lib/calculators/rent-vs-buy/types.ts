/**
 * Input parameters for the Rent vs Buy calculator scenario
 */
export interface ScenarioInputs {
  // Home Purchase Parameters
  /** Purchase price of the home */
  homePrice: number;

  /** Down payment as a percentage (0-1 range, e.g., 0.20 = 20%) */
  downPaymentPct: number;

  /** Annual mortgage interest rate (0-1 range, e.g., 0.05 = 5%) */
  mortgageRate: number;

  /** Loan term in years (typically 15,20, or 30) */
  loanTermYears: number;

  /** Time horizon for the analysis in years */
  timeHorizonYears: number;

  // Property Costs
  /** Annual property tax rate as percentage of assessed value */
  propertyTaxRate: number;

  /** Annual growth rate of assessed value (Prop 13 in CA = 0.02) */
  assessedValueGrowthRate: number;

  /** Monthly HOA fees */
  hoaMonthly: number;

  /** Annual maintenance and insurance as percentage of home value */
  maintenanceInsuranceRate: number;

  // Transaction Costs
  /** Closing costs as percentage of home price (0-1 range) */
  closingCostsPct: number;

  /** Selling costs as percentage of home price (0-1 range, typically 0.06) */
  sellingCostsPct: number;

  // Appreciation
  /** Annual home appreciation rate */
  homeAppreciationRate: number;

  // Renting Parameters
  /** Current monthly rent */
  currentRent: number;

  /** Annual rent inflation rate */
  rentInflationRate: number;

  // Investment Parameters
  /** Annual investment return rate (total return) */
  investmentReturnRate: number;

  // Tax Parameters
  /** Marginal tax rate (0-1 range, e.g., 0.24 = 24%) */
  marginalTaxRate: number;

  /** Whether to include mortgage interest and property tax deductions */
  includeTaxBenefits: boolean;
}

/**
 * Output results from the Rent vs Buy calculator
 */
export interface ScenarioOutputs {
  // Buying Scenario Results
  /** Monthly principal and interest payment */
  monthlyPI: number;

  /** Total interest paid over the time horizon */
  totalInterestPaid: number;

  /** Total principal paid over the time horizon */
  totalPrincipalPaid: number;

  /** Total property taxes paid over the time horizon */
  totalPropertyTax: number;

  /** Total HOA fees paid over the time horizon */
  totalHOA: number;

  /** Total maintenance and insurance costs over the time horizon */
  totalMaintenance: number;

  /** Total tax savings from mortgage interest and property tax deductions */
  totalTaxSavings: number;

  /** Future value of the home after appreciation */
  homeFutureValue: number;

  /** Remaining mortgage balance at the end of time horizon */
  remainingMortgageBalance: number;

  /** Net home equity after selling costs */
  netHomeEquity: number;

  // Renting Scenario Results
  /** Total rent paid over the time horizon */
  totalRentPaid: number;

  /** Total amount invested (down payment + monthly savings difference) */
  totalInvested: number;

  /** Final investment portfolio value with returns */
  investmentPortfolioValue: number;

  /** Monthly rent at the end of the time horizon */
  finalMonthlyRent: number;

  // Comparison Results
  /** Net difference in wealth (positive = buying wins, negative = renting wins) */
  netDifference: number;

  /** Which scenario produces better financial outcome */
  winner: 'buy' | 'rent' | 'tie';

  /** Year at which buying breaks even with renting (null if never) */
  breakEvenYear: number | null;
}
