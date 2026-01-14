"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { DataCategory, Alert } from "@/types/propertyIntelligence";

interface PropertyIntelligenceProps {
  address: string;
  confidenceScore: number;
  dataCategories: DataCategory[];
  alerts: Alert[];
  lastUpdated: string;
  dataSources: number;
  titleStatus: "clear" | "pending" | "issue";
  marketTrend: number;
}

const PropertyIntelligence: React.FC<PropertyIntelligenceProps> = ({
  address,
  confidenceScore,
  dataCategories,
  alerts,
  lastUpdated,
  dataSources,
  titleStatus,
  marketTrend,
}) => {
  // Determine confidence level color
  const getConfidenceColor = (score: number) => {
    if (score >= 80) return "text-emerald-500";
    if (score >= 60) return "text-amber-500";
    return "text-red-500";
  };

  const getConfidenceLabel = (score: number) => {
    if (score >= 80) return "High Confidence";
    if (score >= 60) return "Medium Confidence";
    return "Low Confidence";
  };

  const getProgressColor = (percentage: number) => {
    if (percentage >= 80) return "bg-emerald-500";
    if (percentage >= 60) return "bg-amber-500";
    return "bg-red-500";
  };

  const getAlertStyles = (type: Alert["type"]) => {
    switch (type) {
      case "danger":
        return {
          bg: "bg-red-50 dark:bg-red-950/30",
          border: "border-red-200 dark:border-red-800",
          icon: "text-red-500",
          title: "text-red-700 dark:text-red-400",
        };
      case "warning":
        return {
          bg: "bg-amber-50 dark:bg-amber-950/30",
          border: "border-amber-200 dark:border-amber-800",
          icon: "text-amber-500",
          title: "text-amber-700 dark:text-amber-400",
        };
      case "info":
        return {
          bg: "bg-blue-50 dark:bg-blue-950/30",
          border: "border-blue-200 dark:border-blue-800",
          icon: "text-blue-500",
          title: "text-blue-700 dark:text-blue-400",
        };
    }
  };

  const getTitleStatusDisplay = (status: "clear" | "pending" | "issue") => {
    switch (status) {
      case "clear":
        return { text: "Clear", color: "text-emerald-500" };
      case "pending":
        return { text: "Pending", color: "text-amber-500" };
      case "issue":
        return { text: "Issue", color: "text-red-500" };
    }
  };

  const getMarketTrendDisplay = (trend: number) => {
    if (trend > 0) {
      return { text: `+${trend}%`, color: "text-emerald-500", icon: "ph:trend-up-fill" };
    } else if (trend < 0) {
      return { text: `${trend}%`, color: "text-red-500", icon: "ph:trend-down-fill" };
    }
    return { text: "0%", color: "text-slate-500", icon: "ph:minus-fill" };
  };

  const overallCompleteness = Math.round(
    dataCategories.reduce((acc, cat) => acc + cat.percentage, 0) /
      dataCategories.length
  );

  const titleStatusDisplay = getTitleStatusDisplay(titleStatus);
  const marketTrendDisplay = getMarketTrendDisplay(marketTrend);

  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-700">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-primary/10 rounded-2xl">
          <Icon
            icon="ph:chart-bar-bold"
            width={28}
            height={28}
            className="text-primary"
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-dark dark:text-white">
            Property Intelligence Dashboard
          </h3>
          <p className="text-sm text-dark/50 dark:text-white/50">
            Data completeness & risk assessment
          </p>
        </div>
      </div>

      {/* Address & Confidence Score */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 mb-6 border border-slate-200 dark:border-slate-600">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Icon
              icon="ph:map-pin-fill"
              width={24}
              height={24}
              className="text-primary mt-0.5"
            />
            <div>
              <p className="text-xs uppercase tracking-wider text-dark/40 dark:text-white/40 font-medium mb-1">
                Verified Address
              </p>
              <p className="text-lg font-semibold text-dark dark:text-white">
                {address}
              </p>
            </div>
          </div>

          {/* Confidence Score Circle */}
          <div className="flex items-center gap-4">
            <div className="relative w-20 h-20">
              <svg className="w-20 h-20 -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                  className="text-slate-200 dark:text-slate-600"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="url(#confidenceGradient)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={`${confidenceScore * 2.51} 251`}
                />
                <defs>
                  <linearGradient
                    id="confidenceGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop
                      offset="0%"
                      stopColor={
                        confidenceScore >= 80
                          ? "#10b981"
                          : confidenceScore >= 60
                          ? "#f59e0b"
                          : "#ef4444"
                      }
                    />
                    <stop
                      offset="100%"
                      stopColor={
                        confidenceScore >= 80
                          ? "#34d399"
                          : confidenceScore >= 60
                          ? "#fbbf24"
                          : "#f87171"
                      }
                    />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className={`text-xl font-bold ${getConfidenceColor(
                    confidenceScore
                  )}`}
                >
                  {confidenceScore}
                </span>
              </div>
            </div>
            <div>
              <p className="text-sm text-dark/50 dark:text-white/50">
                Confidence Score
              </p>
              <p
                className={`font-semibold ${getConfidenceColor(
                  confidenceScore
                )}`}
              >
                {getConfidenceLabel(confidenceScore)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Data Completeness Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-semibold text-dark dark:text-white flex items-center gap-2">
            <Icon icon="ph:database-fill" width={20} height={20} />
            Data Completeness
          </h4>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-dark dark:text-white">
              {overallCompleteness}%
            </span>
            <span className="text-sm text-dark/50 dark:text-white/50">
              overall
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {dataCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-600"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-medium text-dark dark:text-white">
                  {category.name}
                </span>
                <span
                  className={`text-sm font-semibold ${
                    category.percentage >= 80
                      ? "text-emerald-500"
                      : category.percentage >= 60
                      ? "text-amber-500"
                      : "text-red-500"
                  }`}
                >
                  {category.percentage}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="h-2 bg-slate-200 dark:bg-slate-600 rounded-full overflow-hidden mb-3">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${getProgressColor(
                    category.percentage
                  )}`}
                  style={{ width: `${category.percentage}%` }}
                />
              </div>

              {/* Data Items */}
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full ${
                      item.available
                        ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400"
                        : "bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400"
                    }`}
                  >
                    <Icon
                      icon={item.available ? "ph:check-bold" : "ph:x-bold"}
                      width={12}
                      height={12}
                    />
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Smart Alerts Section */}
      {alerts.length > 0 && (
        <div>
          <h4 className="font-semibold text-dark dark:text-white flex items-center gap-2 mb-4">
            <Icon icon="ph:warning-fill" width={20} height={20} />
            Smart Alerts
            <span className="ml-2 px-2 py-0.5 text-xs font-medium bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full">
              {alerts.length}
            </span>
          </h4>

          <div className="space-y-3">
            {alerts.map((alert, index) => {
              const styles = getAlertStyles(alert.type);
              return (
                <div
                  key={index}
                  className={`${styles.bg} ${styles.border} border rounded-xl p-4 flex items-start gap-3`}
                >
                  <div className={`${styles.icon} mt-0.5`}>
                    <Icon icon={alert.icon} width={24} height={24} />
                  </div>
                  <div className="flex-1">
                    <p className={`font-semibold ${styles.title}`}>
                      {alert.title}
                    </p>
                    <p className="text-sm text-dark/60 dark:text-white/60 mt-0.5">
                      {alert.description}
                    </p>
                  </div>
                  <button className="p-1 hover:bg-white/50 dark:hover:bg-slate-700 rounded-lg transition-colors">
                    <Icon
                      icon="ph:arrow-right"
                      width={20}
                      height={20}
                      className="text-dark/40 dark:text-white/40"
                    />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Quick Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6 pt-6 border-t border-slate-200 dark:border-slate-600">
        <div className="text-center">
          <Icon
            icon="ph:calendar-check-fill"
            width={24}
            height={24}
            className="mx-auto text-primary mb-1"
          />
          <p className="text-xs text-dark/50 dark:text-white/50">Last Updated</p>
          <p className="text-sm font-semibold text-dark dark:text-white">
            {lastUpdated}
          </p>
        </div>
        <div className="text-center">
          <Icon
            icon="ph:files-fill"
            width={24}
            height={24}
            className="mx-auto text-primary mb-1"
          />
          <p className="text-xs text-dark/50 dark:text-white/50">Data Sources</p>
          <p className="text-sm font-semibold text-dark dark:text-white">
            {dataSources} verified
          </p>
        </div>
        <div className="text-center">
          <Icon
            icon="ph:shield-check-fill"
            width={24}
            height={24}
            className="mx-auto text-primary mb-1"
          />
          <p className="text-xs text-dark/50 dark:text-white/50">Title Status</p>
          <p className={`text-sm font-semibold ${titleStatusDisplay.color}`}>
            {titleStatusDisplay.text}
          </p>
        </div>
        <div className="text-center">
          <Icon
            icon={marketTrendDisplay.icon}
            width={24}
            height={24}
            className="mx-auto text-primary mb-1"
          />
          <p className="text-xs text-dark/50 dark:text-white/50">Market Trend</p>
          <p className={`text-sm font-semibold ${marketTrendDisplay.color}`}>
            {marketTrendDisplay.text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyIntelligence;
