"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";

interface RiskZone {
  id: string;
  type: "flood" | "crime" | "environmental" | "school";
  level: "low" | "medium" | "high";
  x: number;
  y: number;
  width: number;
  height: number;
  label?: string;
}

interface RiskHeatmapProps {
  propertyName: string;
  location: string;
  aggregateRiskScore: number;
}

const RiskHeatmap: React.FC<RiskHeatmapProps> = ({
  propertyName,
  location,
  aggregateRiskScore,
}) => {
  const [zoom, setZoom] = useState(1);
  const [activeRisks, setActiveRisks] = useState({
    flood: true,
    crime: true,
    environmental: true,
    school: true,
  });
  const [hoveredZone, setHoveredZone] = useState<RiskZone | null>(null);

  // Dummy risk zone data
  const riskZones: RiskZone[] = [
    // Flood zones
    { id: "flood-1", type: "flood", level: "high", x: 10, y: 60, width: 25, height: 35, label: "FEMA Flood Zone A" },
    { id: "flood-2", type: "flood", level: "medium", x: 30, y: 70, width: 20, height: 25, label: "Flood Zone X" },
    { id: "flood-3", type: "flood", level: "low", x: 5, y: 40, width: 15, height: 20, label: "Minimal Flood Risk" },
    
    // Crime zones
    { id: "crime-1", type: "crime", level: "medium", x: 60, y: 20, width: 30, height: 25, label: "Moderate Crime Area" },
    { id: "crime-2", type: "crime", level: "low", x: 35, y: 10, width: 25, height: 20, label: "Low Crime Area" },
    { id: "crime-3", type: "crime", level: "high", x: 75, y: 55, width: 20, height: 30, label: "High Crime Area" },
    
    // Environmental hazards
    { id: "env-1", type: "environmental", level: "medium", x: 70, y: 5, width: 25, height: 20, label: "Industrial Zone" },
    { id: "env-2", type: "environmental", level: "low", x: 15, y: 5, width: 20, height: 15, label: "Air Quality: Good" },
    { id: "env-3", type: "environmental", level: "high", x: 85, y: 75, width: 12, height: 20, label: "Contamination Site" },
    
    // School districts
    { id: "school-1", type: "school", level: "low", x: 25, y: 25, width: 35, height: 30, label: "District A (Rating: 9/10)" },
    { id: "school-2", type: "school", level: "medium", x: 55, y: 45, width: 25, height: 25, label: "District B (Rating: 6/10)" },
    { id: "school-3", type: "school", level: "high", x: 5, y: 75, width: 20, height: 20, label: "District C (Rating: 3/10)" },
  ];

  const riskColors = {
    flood: {
      low: "rgba(59, 130, 246, 0.2)",
      medium: "rgba(59, 130, 246, 0.4)",
      high: "rgba(59, 130, 246, 0.6)",
      border: "rgb(59, 130, 246)",
    },
    crime: {
      low: "rgba(234, 179, 8, 0.2)",
      medium: "rgba(234, 179, 8, 0.4)",
      high: "rgba(234, 179, 8, 0.6)",
      border: "rgb(234, 179, 8)",
    },
    environmental: {
      low: "rgba(168, 85, 247, 0.2)",
      medium: "rgba(168, 85, 247, 0.4)",
      high: "rgba(168, 85, 247, 0.6)",
      border: "rgb(168, 85, 247)",
    },
    school: {
      low: "rgba(34, 197, 94, 0.2)",
      medium: "rgba(34, 197, 94, 0.4)",
      high: "rgba(34, 197, 94, 0.6)",
      border: "rgb(34, 197, 94)",
    },
  };

  const riskLabels = {
    flood: { label: "Flood Zones", icon: "ph:drop-fill", color: "text-blue-500" },
    crime: { label: "Crime Levels", icon: "ph:shield-warning-fill", color: "text-yellow-500" },
    environmental: { label: "Environmental", icon: "ph:leaf-fill", color: "text-purple-500" },
    school: { label: "School Districts", icon: "ph:graduation-cap-fill", color: "text-green-500" },
  };

  const toggleRisk = (risk: keyof typeof activeRisks) => {
    setActiveRisks((prev) => ({ ...prev, [risk]: !prev[risk] }));
  };

  const getAggregateColor = (score: number) => {
    if (score >= 70) return "bg-emerald-500";
    if (score >= 40) return "bg-amber-500";
    return "bg-red-500";
  };

  const getAggregateLabel = (score: number) => {
    if (score >= 70) return "Low Risk";
    if (score >= 40) return "Moderate Risk";
    return "High Risk";
  };

  // Property position (center of map)
  const propertyX = 45;
  const propertyY = 45;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-700 overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-slate-200 dark:border-slate-700">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-2xl">
              <Icon icon="ph:map-trifold-fill" width={28} height={28} className="text-red-500" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-dark dark:text-white">
                Risk Heatmap
              </h3>
              <p className="text-sm text-dark/50 dark:text-white/50">
                Interactive neighborhood risk visualization
              </p>
            </div>
          </div>

          {/* Aggregate Score */}
          <div className="flex items-center gap-3 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full">
            <div className={`w-3 h-3 rounded-full ${getAggregateColor(aggregateRiskScore)}`} />
            <span className="text-sm font-medium text-dark dark:text-white">
              Risk Score: <span className="font-bold">{aggregateRiskScore}/100</span>
            </span>
            <span className={`text-xs px-2 py-0.5 rounded-full ${
              aggregateRiskScore >= 70 
                ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                : aggregateRiskScore >= 40
                ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
            }`}>
              {getAggregateLabel(aggregateRiskScore)}
            </span>
          </div>
        </div>
      </div>

      {/* Risk Layer Toggles */}
      <div className="p-4 bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm font-medium text-dark/60 dark:text-white/60 mr-2">
            Toggle Layers:
          </span>
          {(Object.keys(activeRisks) as Array<keyof typeof activeRisks>).map((risk) => (
            <button
              key={risk}
              onClick={() => toggleRisk(risk)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeRisks[risk]
                  ? "bg-white dark:bg-slate-700 shadow-sm border border-slate-200 dark:border-slate-600"
                  : "bg-transparent text-dark/40 dark:text-white/40"
              }`}
            >
              <Icon
                icon={riskLabels[risk].icon}
                width={16}
                height={16}
                className={activeRisks[risk] ? riskLabels[risk].color : ""}
              />
              <span className={activeRisks[risk] ? "text-dark dark:text-white" : ""}>
                {riskLabels[risk].label}
              </span>
              {activeRisks[risk] && (
                <Icon icon="ph:check-bold" width={14} height={14} className="text-primary" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Map Container */}
      <div className="relative">
        {/* Zoom Controls */}
        <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
          <button
            onClick={() => setZoom((z) => Math.min(z + 0.25, 2))}
            className="w-10 h-10 bg-white dark:bg-slate-800 rounded-lg shadow-lg flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-600"
          >
            <Icon icon="ph:plus-bold" width={20} height={20} className="text-dark dark:text-white" />
          </button>
          <button
            onClick={() => setZoom((z) => Math.max(z - 0.25, 0.5))}
            className="w-10 h-10 bg-white dark:bg-slate-800 rounded-lg shadow-lg flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-600"
          >
            <Icon icon="ph:minus-bold" width={20} height={20} className="text-dark dark:text-white" />
          </button>
          <div className="w-10 h-10 bg-white dark:bg-slate-800 rounded-lg shadow-lg flex items-center justify-center border border-slate-200 dark:border-slate-600">
            <span className="text-xs font-bold text-dark dark:text-white">{Math.round(zoom * 100)}%</span>
          </div>
        </div>

        {/* Zoom Level Indicator */}
        <div className="absolute top-4 left-4 z-20 px-3 py-1.5 bg-white dark:bg-slate-800 rounded-full shadow-lg text-xs font-medium text-dark dark:text-white border border-slate-200 dark:border-slate-600">
          {zoom <= 0.75 ? "City View" : zoom <= 1.25 ? "Neighborhood View" : "Block View"}
        </div>

        {/* Map */}
        <div 
          className="relative h-[400px] md:h-[500px] bg-slate-100 dark:bg-slate-800 overflow-hidden"
          style={{ cursor: "grab" }}
        >
          <div
            className="absolute inset-0 transition-transform duration-300"
            style={{ 
              transform: `scale(${zoom})`,
              transformOrigin: `${propertyX}% ${propertyY}%`
            }}
          >
            {/* Grid Pattern (Street Grid) */}
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-slate-300 dark:text-slate-600"
                  />
                </pattern>
                <pattern id="streets" width="80" height="80" patternUnits="userSpaceOnUse">
                  <rect width="80" height="4" fill="currentColor" className="text-slate-200 dark:text-slate-700" />
                  <rect width="4" height="80" fill="currentColor" className="text-slate-200 dark:text-slate-700" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              <rect width="100%" height="100%" fill="url(#streets)" />
            </svg>

            {/* Risk Zones */}
            {riskZones
              .filter((zone) => activeRisks[zone.type])
              .map((zone) => (
                <div
                  key={zone.id}
                  className="absolute transition-opacity duration-300 cursor-pointer"
                  style={{
                    left: `${zone.x}%`,
                    top: `${zone.y}%`,
                    width: `${zone.width}%`,
                    height: `${zone.height}%`,
                    backgroundColor: riskColors[zone.type][zone.level],
                    border: `2px solid ${riskColors[zone.type].border}`,
                    borderRadius: "8px",
                    opacity: hoveredZone?.id === zone.id ? 1 : 0.7,
                  }}
                  onMouseEnter={() => setHoveredZone(zone)}
                  onMouseLeave={() => setHoveredZone(null)}
                />
              ))}

            {/* Property Marker */}
            <div
              className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${propertyX}%`, top: `${propertyY}%` }}
            >
              {/* Pulse Animation */}
              <div className="absolute inset-0 w-16 h-16 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                <div className="absolute inset-0 bg-primary/30 rounded-full animate-ping" />
              </div>
              
              {/* Marker */}
              <div className="relative">
                <div className={`w-12 h-12 ${getAggregateColor(aggregateRiskScore)} rounded-full flex items-center justify-center shadow-lg border-4 border-white dark:border-slate-900`}>
                  <Icon icon="ph:house-fill" width={24} height={24} className="text-white" />
                </div>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[10px] border-l-transparent border-r-transparent border-t-white dark:border-t-slate-900" />
              </div>

              {/* Property Label */}
              <div className="absolute top-14 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white dark:bg-slate-800 px-3 py-1.5 rounded-lg shadow-lg border border-slate-200 dark:border-slate-600">
                <p className="text-xs font-semibold text-dark dark:text-white text-center">
                  {propertyName}
                </p>
                <p className="text-[10px] text-dark/50 dark:text-white/50 text-center">
                  {location}
                </p>
              </div>
            </div>

            {/* Landmarks */}
            <div className="absolute left-[20%] top-[30%] transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-md">
                <Icon icon="ph:graduation-cap-fill" width={16} height={16} className="text-white" />
              </div>
            </div>
            <div className="absolute left-[75%] top-[25%] transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
                <Icon icon="ph:hospital-fill" width={16} height={16} className="text-white" />
              </div>
            </div>
            <div className="absolute left-[65%] top-[70%] transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center shadow-md">
                <Icon icon="ph:storefront-fill" width={16} height={16} className="text-white" />
              </div>
            </div>
          </div>

          {/* Hovered Zone Info */}
          {hoveredZone && (
            <div className="absolute bottom-4 left-4 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-4 border border-slate-200 dark:border-slate-600 z-20 max-w-xs">
              <div className="flex items-center gap-2 mb-2">
                <Icon
                  icon={riskLabels[hoveredZone.type].icon}
                  width={20}
                  height={20}
                  className={riskLabels[hoveredZone.type].color}
                />
                <span className="font-semibold text-dark dark:text-white">
                  {riskLabels[hoveredZone.type].label}
                </span>
              </div>
              <p className="text-sm text-dark/70 dark:text-white/70">{hoveredZone.label}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs text-dark/50 dark:text-white/50">Risk Level:</span>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                  hoveredZone.level === "low"
                    ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                    : hoveredZone.level === "medium"
                    ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                    : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                }`}>
                  {hoveredZone.level.charAt(0).toUpperCase() + hoveredZone.level.slice(1)}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Legend */}
      <div className="p-4 bg-slate-50 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
        <div className="flex flex-wrap items-center gap-6">
          <span className="text-xs font-medium text-dark/60 dark:text-white/60">Risk Levels:</span>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-emerald-500/30 border border-emerald-500" />
            <span className="text-xs text-dark dark:text-white">Low</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-amber-500/40 border border-amber-500" />
            <span className="text-xs text-dark dark:text-white">Medium</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-red-500/50 border border-red-500" />
            <span className="text-xs text-dark dark:text-white">High</span>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <div className="flex items-center gap-1">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <Icon icon="ph:graduation-cap-fill" width={12} height={12} className="text-white" />
              </div>
              <span className="text-xs text-dark/60 dark:text-white/60">School</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <Icon icon="ph:hospital-fill" width={12} height={12} className="text-white" />
              </div>
              <span className="text-xs text-dark/60 dark:text-white/60">Hospital</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center">
                <Icon icon="ph:storefront-fill" width={12} height={12} className="text-white" />
              </div>
              <span className="text-xs text-dark/60 dark:text-white/60">Shopping</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskHeatmap;
