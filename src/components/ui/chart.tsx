// src/components/ui/chart.tsx
import * as React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { cn } from "@/lib/utils";

// Data type for each point
export interface ChartData {
  name: string;
  value: number;
}

// Props for the main chart
interface ChartProps {
  data: ChartData[];
  className?: string;
}

// Payload type for tooltip
interface ChartTooltipPayload {
  name?: string | number;
  value?: string | number;
}

// Props for custom tooltip
interface CustomTooltipProps {
  active?: boolean;
  payload?: ChartTooltipPayload[];
  className?: string;
  indicator?: "dot" | "line";
  hideLabel?: boolean;
}

// ⚡ Final Tooltip Implementation
export function ChartTooltipContent({
  active,
  payload,
  className,
  indicator = "dot",
  hideLabel = false,
}: CustomTooltipProps) {
  if (!active || !payload || payload.length === 0) return null;

  return (
    <div className={cn("bg-white p-2 rounded shadow", className)}>
      {payload.map((entry, index) => (
        <div key={index}>
          {indicator === "dot" && <span>• </span>}
          {!hideLabel && entry.name}: {entry.value}
        </div>
      ))}
    </div>
  );
}

// ⚡ Main Chart Component
export function Chart({ data, className }: ChartProps) {
  return (
    <div className={cn("w-full h-64", className)}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<ChartTooltipContent />} />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#4f46e5"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

