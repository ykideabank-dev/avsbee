/**
 * Regional preset data for the Rent vs Buy calculator.
 * These values represent typical market conditions for major US metropolitan areas.
 */
export interface RegionalPreset {
  /** Unique identifier for the preset */
  id: string;

  /** Display name of the region */
  name: string;

  /** Typical median home price in the region */
  homePrice: number;

  /** Annual property tax rate as percentage of assessed value */
  propertyTaxRate: number;

  /** Annual growth rate of assessed value (Prop 13 in CA = 0.02) */
  assessedValueGrowthRate: number;

  /** Typical monthly HOA fees */
  hoaMonthly: number;

  /** Historical annual home appreciation rate */
  homeAppreciationRate: number;

  /** Typical monthly rent for comparable housing */
  currentRent: number;

  /** Annual rent inflation rate */
  rentInflationRate: number;
}

/**
 * Pre-configured regional presets for major US metropolitan areas.
 * Data based on recent market conditions and historical trends.
 */
export const regionalPresets: RegionalPreset[] = [
  {
    id: 'orange-county-ca',
    name: 'Orange County, CA',
    homePrice: 950000,
    propertyTaxRate: 0.0073,
    assessedValueGrowthRate: 0.02,
    hoaMonthly: 470,
    homeAppreciationRate: 0.045,
    currentRent: 3800,
    rentInflationRate: 0.03,
  },
  {
    id: 'los-angeles-ca',
    name: 'Los Angeles, CA',
    homePrice: 850000,
    propertyTaxRate: 0.0072,
    assessedValueGrowthRate: 0.02,
    hoaMonthly: 420,
    homeAppreciationRate: 0.044,
    currentRent: 3400,
    rentInflationRate: 0.03,
  },
  {
    id: 'san-diego-ca',
    name: 'San Diego, CA',
    homePrice: 880000,
    propertyTaxRate: 0.0069,
    assessedValueGrowthRate: 0.02,
    hoaMonthly: 380,
    homeAppreciationRate: 0.046,
    currentRent: 3200,
    rentInflationRate: 0.03,
  },
  {
    id: 'san-francisco-bay-area-ca',
    name: 'San Francisco Bay Area, CA',
    homePrice: 1400000,
    propertyTaxRate: 0.0074,
    assessedValueGrowthRate: 0.02,
    hoaMonthly: 550,
    homeAppreciationRate: 0.048,
    currentRent: 4500,
    rentInflationRate: 0.035,
  },
  {
    id: 'austin-tx',
    name: 'Austin, TX',
    homePrice: 600000,
    propertyTaxRate: 0.0181,
    assessedValueGrowthRate: 0.055,
    hoaMonthly: 200,
    homeAppreciationRate: 0.055,
    currentRent: 2400,
    rentInflationRate: 0.04,
  },
  {
    id: 'seattle-wa',
    name: 'Seattle, WA',
    homePrice: 780000,
    propertyTaxRate: 0.0092,
    assessedValueGrowthRate: 0.04,
    hoaMonthly: 350,
    homeAppreciationRate: 0.05,
    currentRent: 2800,
    rentInflationRate: 0.035,
  },
  {
    id: 'phoenix-az',
    name: 'Phoenix, AZ',
    homePrice: 480000,
    propertyTaxRate: 0.0062,
    assessedValueGrowthRate: 0.04,
    hoaMonthly: 180,
    homeAppreciationRate: 0.048,
    currentRent: 1900,
    rentInflationRate: 0.035,
  },
  {
    id: 'denver-co',
    name: 'Denver, CO',
    homePrice: 620000,
    propertyTaxRate: 0.0051,
    assessedValueGrowthRate: 0.04,
    hoaMonthly: 280,
    homeAppreciationRate: 0.052,
    currentRent: 2500,
    rentInflationRate: 0.04,
  },
  {
    id: 'miami-fl',
    name: 'Miami, FL',
    homePrice: 550000,
    propertyTaxRate: 0.0097,
    assessedValueGrowthRate: 0.04,
    hoaMonthly: 320,
    homeAppreciationRate: 0.05,
    currentRent: 2600,
    rentInflationRate: 0.04,
  },
  {
    id: 'atlanta-ga',
    name: 'Atlanta, GA',
    homePrice: 420000,
    propertyTaxRate: 0.0087,
    assessedValueGrowthRate: 0.04,
    hoaMonthly: 220,
    homeAppreciationRate: 0.046,
    currentRent: 1800,
    rentInflationRate: 0.035,
  },
  {
    id: 'nashville-tn',
    name: 'Nashville, TN',
    homePrice: 520000,
    propertyTaxRate: 0.0068,
    assessedValueGrowthRate: 0.04,
    hoaMonthly: 200,
    homeAppreciationRate: 0.05,
    currentRent: 2100,
    rentInflationRate: 0.04,
  },
  {
    id: 'charlotte-nc',
    name: 'Charlotte, NC',
    homePrice: 450000,
    propertyTaxRate: 0.0084,
    assessedValueGrowthRate: 0.04,
    hoaMonthly: 190,
    homeAppreciationRate: 0.048,
    currentRent: 1850,
    rentInflationRate: 0.035,
  },
  {
    id: 'raleigh-nc',
    name: 'Raleigh, NC',
    homePrice: 480000,
    propertyTaxRate: 0.0078,
    assessedValueGrowthRate: 0.04,
    hoaMonthly: 180,
    homeAppreciationRate: 0.047,
    currentRent: 1950,
    rentInflationRate: 0.035,
  },
  {
    id: 'national-average',
    name: 'National Average',
    homePrice: 430000,
    propertyTaxRate: 0.011,
    assessedValueGrowthRate: 0.04,
    hoaMonthly: 250,
    homeAppreciationRate: 0.04,
    currentRent: 2000,
    rentInflationRate: 0.03,
  },
];

/**
 * Retrieves a regional preset by its ID.
 *
 * @param id - The unique identifier of the preset
 * @returns The matching RegionalPreset, or undefined if not found
 */
export function getPresetById(id: string): RegionalPreset | undefined {
  return regionalPresets.find((preset) => preset.id === id);
}
