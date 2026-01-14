export type AlertType = "warning" | "danger" | "info";

export interface DataItem {
  name: string;
  available: boolean;
}

export interface DataCategory {
  name: string;
  percentage: number;
  items: DataItem[];
}

export interface Alert {
  type: AlertType;
  title: string;
  description: string;
  icon: string;
}

export interface PropertyIntelligence {
  slug: string;
  confidenceScore: number;
  dataCategories: DataCategory[];
  alerts: Alert[];
  lastUpdated: string;
  dataSources: number;
  titleStatus: "clear" | "pending" | "issue";
  marketTrend: number;
}
