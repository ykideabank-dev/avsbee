export interface Calculator {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  status: 'live' | 'coming-soon';
  category: 'housing' | 'automotive' | 'career' | 'education' | 'energy' | 'finance';
}

export const calculators: Calculator[] = [
  {
    id: 'rent-vs-buy',
    title: 'Rent vs Buy',
    description: 'Compare the true costs of renting versus buying a home. Factor in mortgage rates, property taxes, maintenance, and opportunity costs to make the smartest housing decision for your financial future.',
    icon: '🏠',
    href: '/rent-vs-buy',
    status: 'live',
    category: 'housing',
  },
  {
    id: 'buy-vs-lease-car',
    title: 'Buy vs Lease Car',
    description: 'Discover whether buying or leasing a vehicle saves you more money. Analyze monthly payments, depreciation, mileage limits, and long-term ownership costs to drive away with the best deal.',
    icon: '🚗',
    href: '/buy-vs-lease-car',
    status: 'coming-soon',
    category: 'automotive',
  },
  {
    id: 'job-offer-comparison',
    title: 'Job Offer Comparison',
    description: 'Compare job offers side-by-side including salary, benefits, commute costs, work-life balance, and long-term growth potential to make the best career decision.',
    icon: '💼',
    href: '/tools/job-offer-comparison',
    status: 'coming-soon',
    category: 'career',
  },
  {
    id: 'college-vs-trade',
    title: 'College vs Trade School',
    description: 'Weigh the return on investment of a four-year college degree against trade school education. Calculate tuition costs, earning potential, student debt, and time to financial independence.',
    icon: '🎓',
    href: '/college-vs-trade',
    status: 'coming-soon',
    category: 'education',
  },
  {
    id: 'solar-vs-grid',
    title: 'Solar vs Grid',
    description: 'Determine if solar panels are worth the investment for your home. Compare upfront costs, energy savings, tax incentives, and payback periods against traditional grid electricity.',
    icon: '☀️',
    href: '/solar-vs-grid',
    status: 'coming-soon',
    category: 'energy',
  },
  {
    id: 'debt-vs-invest',
    title: 'Pay Debt vs Invest',
    description: 'Make the optimal choice between paying off debt and investing your money. Compare interest rates, potential returns, tax advantages, and risk tolerance to accelerate your path to wealth.',
    icon: '💰',
    href: '/debt-vs-invest',
    status: 'coming-soon',
    category: 'finance',
  },
];
