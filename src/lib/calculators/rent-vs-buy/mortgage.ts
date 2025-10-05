/**
 * Calculates the monthly principal and interest payment for a fixed-rate mortgage.
 *
 * Uses the standard mortgage payment formula: M = P[r(1+r)^n]/[(1+r)^n-1]
 * where:
 * - M = monthly payment
 * - P = principal loan amount
 * - r = monthly interest rate
 * - n = total number of monthly payments
 *
 * @param loanAmount - The principal loan amount
 * @param annualRate - The annual interest rate (e.g., 0.05 for 5%)
 * @param termYears - The loan term in years
 * @returns The monthly principal and interest payment
 */
export function calculateMonthlyPayment(
  loanAmount: number,
  annualRate: number,
  termYears: number
): number {
  // Handle edge case where interest rate is 0
  if (annualRate === 0) {
    const totalMonths = termYears * 12;
    return loanAmount / totalMonths;
  }

  const monthlyRate = annualRate / 12;
  const totalPayments = termYears * 12;

  // Calculate using mortgage payment formula
  const numerator = monthlyRate * Math.pow(1 + monthlyRate, totalPayments);
  const denominator = Math.pow(1 + monthlyRate, totalPayments) - 1;

  return loanAmount * (numerator / denominator);
}

/**
 * Calculates the remaining mortgage balance after a specified number of payments.
 *
 * Uses the remaining balance formula based on the original loan terms and
 * the number of payments already made.
 *
 * @param loanAmount - The original principal loan amount
 * @param annualRate - The annual interest rate (e.g., 0.05 for 5%)
 * @param termYears - The original loan term in years
 * @param monthsPaid - The number of monthly payments already made
 * @returns The remaining balance on the loan (0 if fully paid)
 */
export function calculateRemainingBalance(
  loanAmount: number,
  annualRate: number,
  termYears: number,
  monthsPaid: number
): number {
  const totalMonths = termYears * 12;

  // Loan is paid off
  if (monthsPaid >= totalMonths) {
    return 0;
  }

  // Handle edge case where interest rate is 0
  if (annualRate === 0) {
    const monthlyPayment = loanAmount / totalMonths;
    return loanAmount - (monthlyPayment * monthsPaid);
  }

  const monthlyRate = annualRate / 12;
  const monthlyPayment = calculateMonthlyPayment(loanAmount, annualRate, termYears);

  // Remaining balance formula: B = P[(1+r)^n - (1+r)^p] / [(1+r)^n - 1]
  // where p = payments made, n = total payments
  const numerator =
    Math.pow(1 + monthlyRate, totalMonths) - Math.pow(1 + monthlyRate, monthsPaid);
  const denominator = Math.pow(1 + monthlyRate, totalMonths) - 1;

  return loanAmount * (numerator / denominator);
}

/**
 * Calculates the interest portion of a monthly mortgage payment.
 *
 * @param remainingBalance - The current outstanding loan balance
 * @param annualRate - The annual interest rate (e.g., 0.05 for 5%)
 * @returns The interest payment for the current month
 */
export function calculateInterestPayment(
  remainingBalance: number,
  annualRate: number
): number {
  const monthlyRate = annualRate / 12;
  return remainingBalance * monthlyRate;
}

/**
 * Calculates the principal portion of a monthly mortgage payment.
 *
 * @param monthlyPayment - The total monthly payment (principal + interest)
 * @param interestPayment - The interest portion of the payment
 * @returns The principal payment for the current month
 */
export function calculatePrincipalPayment(
  monthlyPayment: number,
  interestPayment: number
): number {
  return monthlyPayment - interestPayment;
}
