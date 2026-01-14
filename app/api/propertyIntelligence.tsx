import { PropertyIntelligence } from "@/types/propertyIntelligence";

export const propertyIntelligenceData: PropertyIntelligence[] = [
  {
    slug: "serenity-height-villas",
    confidenceScore: 87,
    lastUpdated: "2 days ago",
    dataSources: 12,
    titleStatus: "clear",
    marketTrend: 4.2,
    dataCategories: [
      {
        name: "Property Details",
        percentage: 95,
        items: [
          { name: "Address", available: true },
          { name: "Square Footage", available: true },
          { name: "Bedrooms", available: true },
          { name: "Bathrooms", available: true },
          { name: "Year Built", available: true },
          { name: "Lot Size", available: false },
        ],
      },
      {
        name: "Legal & Title",
        percentage: 80,
        items: [
          { name: "Deed", available: true },
          { name: "Title Insurance", available: true },
          { name: "Liens", available: true },
          { name: "Easements", available: false },
          { name: "Zoning", available: true },
        ],
      },
      {
        name: "Financial",
        percentage: 75,
        items: [
          { name: "Tax History", available: true },
          { name: "Assessment", available: true },
          { name: "HOA Fees", available: false },
          { name: "Insurance Est.", available: true },
        ],
      },
      {
        name: "Environmental",
        percentage: 60,
        items: [
          { name: "Flood Zone", available: true },
          { name: "Fire Risk", available: true },
          { name: "Soil Report", available: false },
          { name: "Environmental Hazards", available: false },
        ],
      },
    ],
    alerts: [
      {
        type: "warning",
        title: "Flood Zone Proximity",
        description:
          "Property is within 0.5 miles of a FEMA-designated flood zone. Flood insurance may be required.",
        icon: "ph:drop-fill",
      },
      {
        type: "danger",
        title: "Missing HOA Documentation",
        description:
          "HOA fees and regulations documentation is unavailable. Request from seller before closing.",
        icon: "ph:file-x-fill",
      },
      {
        type: "info",
        title: "Recent Price Change",
        description:
          "Property price was reduced by 3.5% on Jan 10, 2026. Previously listed at $605,000.",
        icon: "ph:tag-fill",
      },
    ],
  },
  {
    slug: "mountain-retreat-villa",
    confidenceScore: 92,
    lastUpdated: "1 day ago",
    dataSources: 15,
    titleStatus: "clear",
    marketTrend: 6.8,
    dataCategories: [
      {
        name: "Property Details",
        percentage: 100,
        items: [
          { name: "Address", available: true },
          { name: "Square Footage", available: true },
          { name: "Bedrooms", available: true },
          { name: "Bathrooms", available: true },
          { name: "Year Built", available: true },
          { name: "Lot Size", available: true },
        ],
      },
      {
        name: "Legal & Title",
        percentage: 90,
        items: [
          { name: "Deed", available: true },
          { name: "Title Insurance", available: true },
          { name: "Liens", available: true },
          { name: "Easements", available: true },
          { name: "Zoning", available: false },
        ],
      },
      {
        name: "Financial",
        percentage: 85,
        items: [
          { name: "Tax History", available: true },
          { name: "Assessment", available: true },
          { name: "HOA Fees", available: true },
          { name: "Insurance Est.", available: false },
        ],
      },
      {
        name: "Environmental",
        percentage: 80,
        items: [
          { name: "Flood Zone", available: true },
          { name: "Fire Risk", available: true },
          { name: "Soil Report", available: true },
          { name: "Environmental Hazards", available: false },
        ],
      },
    ],
    alerts: [
      {
        type: "info",
        title: "High Demand Area",
        description:
          "This property is in a high-demand neighborhood. Average time on market is 14 days.",
        icon: "ph:trend-up-fill",
      },
    ],
  },
  {
    slug: "modern-luxe-villa",
    confidenceScore: 78,
    lastUpdated: "3 days ago",
    dataSources: 9,
    titleStatus: "pending",
    marketTrend: 2.1,
    dataCategories: [
      {
        name: "Property Details",
        percentage: 85,
        items: [
          { name: "Address", available: true },
          { name: "Square Footage", available: true },
          { name: "Bedrooms", available: true },
          { name: "Bathrooms", available: true },
          { name: "Year Built", available: false },
          { name: "Lot Size", available: false },
        ],
      },
      {
        name: "Legal & Title",
        percentage: 70,
        items: [
          { name: "Deed", available: true },
          { name: "Title Insurance", available: false },
          { name: "Liens", available: true },
          { name: "Easements", available: false },
          { name: "Zoning", available: true },
        ],
      },
      {
        name: "Financial",
        percentage: 75,
        items: [
          { name: "Tax History", available: true },
          { name: "Assessment", available: true },
          { name: "HOA Fees", available: false },
          { name: "Insurance Est.", available: true },
        ],
      },
      {
        name: "Environmental",
        percentage: 50,
        items: [
          { name: "Flood Zone", available: true },
          { name: "Fire Risk", available: false },
          { name: "Soil Report", available: false },
          { name: "Environmental Hazards", available: false },
        ],
      },
    ],
    alerts: [
      {
        type: "danger",
        title: "Title Insurance Pending",
        description:
          "Title insurance documentation is being processed. Verify status before making an offer.",
        icon: "ph:shield-warning-fill",
      },
      {
        type: "warning",
        title: "Limited Environmental Data",
        description:
          "Only 50% of environmental data is available. Consider requesting additional assessments.",
        icon: "ph:leaf-fill",
      },
      {
        type: "info",
        title: "New Construction",
        description:
          "Property was recently built. Some historical data may not be available.",
        icon: "ph:buildings-fill",
      },
    ],
  },
  {
    slug: "royal-orchid-villas",
    confidenceScore: 95,
    lastUpdated: "Today",
    dataSources: 18,
    titleStatus: "clear",
    marketTrend: 8.5,
    dataCategories: [
      {
        name: "Property Details",
        percentage: 100,
        items: [
          { name: "Address", available: true },
          { name: "Square Footage", available: true },
          { name: "Bedrooms", available: true },
          { name: "Bathrooms", available: true },
          { name: "Year Built", available: true },
          { name: "Lot Size", available: true },
        ],
      },
      {
        name: "Legal & Title",
        percentage: 95,
        items: [
          { name: "Deed", available: true },
          { name: "Title Insurance", available: true },
          { name: "Liens", available: true },
          { name: "Easements", available: true },
          { name: "Zoning", available: true },
        ],
      },
      {
        name: "Financial",
        percentage: 90,
        items: [
          { name: "Tax History", available: true },
          { name: "Assessment", available: true },
          { name: "HOA Fees", available: true },
          { name: "Insurance Est.", available: true },
        ],
      },
      {
        name: "Environmental",
        percentage: 85,
        items: [
          { name: "Flood Zone", available: true },
          { name: "Fire Risk", available: true },
          { name: "Soil Report", available: true },
          { name: "Environmental Hazards", available: false },
        ],
      },
    ],
    alerts: [
      {
        type: "info",
        title: "Premium Location",
        description:
          "Property is located in one of the top-rated school districts in the area.",
        icon: "ph:graduation-cap-fill",
      },
    ],
  },
  {
    slug: "grand-cista-villas",
    confidenceScore: 65,
    lastUpdated: "5 days ago",
    dataSources: 7,
    titleStatus: "issue",
    marketTrend: -1.2,
    dataCategories: [
      {
        name: "Property Details",
        percentage: 70,
        items: [
          { name: "Address", available: true },
          { name: "Square Footage", available: true },
          { name: "Bedrooms", available: true },
          { name: "Bathrooms", available: false },
          { name: "Year Built", available: false },
          { name: "Lot Size", available: false },
        ],
      },
      {
        name: "Legal & Title",
        percentage: 55,
        items: [
          { name: "Deed", available: true },
          { name: "Title Insurance", available: false },
          { name: "Liens", available: false },
          { name: "Easements", available: false },
          { name: "Zoning", available: true },
        ],
      },
      {
        name: "Financial",
        percentage: 60,
        items: [
          { name: "Tax History", available: true },
          { name: "Assessment", available: false },
          { name: "HOA Fees", available: false },
          { name: "Insurance Est.", available: true },
        ],
      },
      {
        name: "Environmental",
        percentage: 40,
        items: [
          { name: "Flood Zone", available: true },
          { name: "Fire Risk", available: false },
          { name: "Soil Report", available: false },
          { name: "Environmental Hazards", available: false },
        ],
      },
    ],
    alerts: [
      {
        type: "danger",
        title: "Potential Lien Issue",
        description:
          "Unable to verify lien status. Request a full title search before proceeding.",
        icon: "ph:warning-octagon-fill",
      },
      {
        type: "danger",
        title: "Missing Title Insurance",
        description:
          "Title insurance documentation is not available. This is required for closing.",
        icon: "ph:file-x-fill",
      },
      {
        type: "warning",
        title: "Market Decline",
        description:
          "Property value in this area has decreased by 1.2% over the past quarter.",
        icon: "ph:trend-down-fill",
      },
    ],
  },
  {
    slug: "imperial-pearn-villas",
    confidenceScore: 82,
    lastUpdated: "1 day ago",
    dataSources: 11,
    titleStatus: "clear",
    marketTrend: 3.7,
    dataCategories: [
      {
        name: "Property Details",
        percentage: 90,
        items: [
          { name: "Address", available: true },
          { name: "Square Footage", available: true },
          { name: "Bedrooms", available: true },
          { name: "Bathrooms", available: true },
          { name: "Year Built", available: true },
          { name: "Lot Size", available: false },
        ],
      },
      {
        name: "Legal & Title",
        percentage: 80,
        items: [
          { name: "Deed", available: true },
          { name: "Title Insurance", available: true },
          { name: "Liens", available: true },
          { name: "Easements", available: false },
          { name: "Zoning", available: true },
        ],
      },
      {
        name: "Financial",
        percentage: 70,
        items: [
          { name: "Tax History", available: true },
          { name: "Assessment", available: true },
          { name: "HOA Fees", available: false },
          { name: "Insurance Est.", available: false },
        ],
      },
      {
        name: "Environmental",
        percentage: 75,
        items: [
          { name: "Flood Zone", available: true },
          { name: "Fire Risk", available: true },
          { name: "Soil Report", available: false },
          { name: "Environmental Hazards", available: true },
        ],
      },
    ],
    alerts: [
      {
        type: "warning",
        title: "HOA Information Missing",
        description:
          "HOA fees and regulations are not documented. Contact the seller for details.",
        icon: "ph:users-fill",
      },
      {
        type: "info",
        title: "Recently Renovated",
        description:
          "Property underwent major renovations in 2024. Updated permits on file.",
        icon: "ph:hammer-fill",
      },
    ],
  },
  {
    slug: "opulent-heven-villas",
    confidenceScore: 88,
    lastUpdated: "Today",
    dataSources: 14,
    titleStatus: "clear",
    marketTrend: 5.4,
    dataCategories: [
      {
        name: "Property Details",
        percentage: 95,
        items: [
          { name: "Address", available: true },
          { name: "Square Footage", available: true },
          { name: "Bedrooms", available: true },
          { name: "Bathrooms", available: true },
          { name: "Year Built", available: true },
          { name: "Lot Size", available: false },
        ],
      },
      {
        name: "Legal & Title",
        percentage: 85,
        items: [
          { name: "Deed", available: true },
          { name: "Title Insurance", available: true },
          { name: "Liens", available: true },
          { name: "Easements", available: true },
          { name: "Zoning", available: false },
        ],
      },
      {
        name: "Financial",
        percentage: 80,
        items: [
          { name: "Tax History", available: true },
          { name: "Assessment", available: true },
          { name: "HOA Fees", available: true },
          { name: "Insurance Est.", available: false },
        ],
      },
      {
        name: "Environmental",
        percentage: 70,
        items: [
          { name: "Flood Zone", available: true },
          { name: "Fire Risk", available: true },
          { name: "Soil Report", available: false },
          { name: "Environmental Hazards", available: false },
        ],
      },
    ],
    alerts: [
      {
        type: "info",
        title: "Waterfront Property",
        description:
          "Property has direct beach access. Verify coastal regulations and insurance requirements.",
        icon: "ph:waves-fill",
      },
    ],
  },
  {
    slug: "elite-crest-villas",
    confidenceScore: 91,
    lastUpdated: "Today",
    dataSources: 16,
    titleStatus: "clear",
    marketTrend: 7.2,
    dataCategories: [
      {
        name: "Property Details",
        percentage: 100,
        items: [
          { name: "Address", available: true },
          { name: "Square Footage", available: true },
          { name: "Bedrooms", available: true },
          { name: "Bathrooms", available: true },
          { name: "Year Built", available: true },
          { name: "Lot Size", available: true },
        ],
      },
      {
        name: "Legal & Title",
        percentage: 90,
        items: [
          { name: "Deed", available: true },
          { name: "Title Insurance", available: true },
          { name: "Liens", available: true },
          { name: "Easements", available: true },
          { name: "Zoning", available: false },
        ],
      },
      {
        name: "Financial",
        percentage: 85,
        items: [
          { name: "Tax History", available: true },
          { name: "Assessment", available: true },
          { name: "HOA Fees", available: true },
          { name: "Insurance Est.", available: false },
        ],
      },
      {
        name: "Environmental",
        percentage: 75,
        items: [
          { name: "Flood Zone", available: true },
          { name: "Fire Risk", available: true },
          { name: "Soil Report", available: false },
          { name: "Environmental Hazards", available: true },
        ],
      },
    ],
    alerts: [
      {
        type: "info",
        title: "Gated Community",
        description:
          "Property is located in a gated community with 24/7 security.",
        icon: "ph:shield-check-fill",
      },
      {
        type: "info",
        title: "Strong Appreciation",
        description:
          "Properties in this area have appreciated 7.2% over the past year.",
        icon: "ph:chart-line-up-fill",
      },
    ],
  },
  {
    slug: "majestic-bay-villas",
    confidenceScore: 84,
    lastUpdated: "2 days ago",
    dataSources: 13,
    titleStatus: "clear",
    marketTrend: 4.8,
    dataCategories: [
      {
        name: "Property Details",
        percentage: 90,
        items: [
          { name: "Address", available: true },
          { name: "Square Footage", available: true },
          { name: "Bedrooms", available: true },
          { name: "Bathrooms", available: true },
          { name: "Year Built", available: true },
          { name: "Lot Size", available: false },
        ],
      },
      {
        name: "Legal & Title",
        percentage: 85,
        items: [
          { name: "Deed", available: true },
          { name: "Title Insurance", available: true },
          { name: "Liens", available: true },
          { name: "Easements", available: false },
          { name: "Zoning", available: true },
        ],
      },
      {
        name: "Financial",
        percentage: 75,
        items: [
          { name: "Tax History", available: true },
          { name: "Assessment", available: true },
          { name: "HOA Fees", available: false },
          { name: "Insurance Est.", available: true },
        ],
      },
      {
        name: "Environmental",
        percentage: 65,
        items: [
          { name: "Flood Zone", available: true },
          { name: "Fire Risk", available: true },
          { name: "Soil Report", available: false },
          { name: "Environmental Hazards", available: false },
        ],
      },
    ],
    alerts: [
      {
        type: "warning",
        title: "Coastal Erosion Zone",
        description:
          "Property is in an area with moderate coastal erosion risk. Review long-term impact assessments.",
        icon: "ph:waves-fill",
      },
      {
        type: "info",
        title: "Tourist Area",
        description:
          "High rental income potential due to proximity to popular tourist attractions.",
        icon: "ph:airplane-takeoff-fill",
      },
    ],
  },
];

// Helper function to get intelligence data by slug
export const getPropertyIntelligence = (slug: string): PropertyIntelligence | undefined => {
  return propertyIntelligenceData.find((item) => item.slug === slug);
};

// Default intelligence data for properties without specific data
export const defaultPropertyIntelligence: Omit<PropertyIntelligence, "slug"> = {
  confidenceScore: 50,
  lastUpdated: "Unknown",
  dataSources: 0,
  titleStatus: "pending",
  marketTrend: 0,
  dataCategories: [
    {
      name: "Property Details",
      percentage: 50,
      items: [
        { name: "Address", available: true },
        { name: "Square Footage", available: false },
        { name: "Bedrooms", available: false },
        { name: "Bathrooms", available: false },
        { name: "Year Built", available: false },
        { name: "Lot Size", available: false },
      ],
    },
    {
      name: "Legal & Title",
      percentage: 0,
      items: [
        { name: "Deed", available: false },
        { name: "Title Insurance", available: false },
        { name: "Liens", available: false },
        { name: "Easements", available: false },
        { name: "Zoning", available: false },
      ],
    },
    {
      name: "Financial",
      percentage: 0,
      items: [
        { name: "Tax History", available: false },
        { name: "Assessment", available: false },
        { name: "HOA Fees", available: false },
        { name: "Insurance Est.", available: false },
      ],
    },
    {
      name: "Environmental",
      percentage: 0,
      items: [
        { name: "Flood Zone", available: false },
        { name: "Fire Risk", available: false },
        { name: "Soil Report", available: false },
        { name: "Environmental Hazards", available: false },
      ],
    },
  ],
  alerts: [
    {
      type: "warning",
      title: "Limited Data Available",
      description:
        "Intelligence data for this property is limited. Some information may not be available.",
      icon: "ph:info-fill",
    },
  ],
};
