"use client";

import * as React from "react";
import { Pie, PieChart, Label } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "Today's fertilizer request donut chart";

const chartData = [
  {
    fertilizer: "DAP",
    requests: 25,
    fill: "#6BC47D",
  },
  {
    fertilizer: "MOP",
    requests: 15,
    fill: "#F28A52",
  },
  {
    fertilizer: "NPK",
    requests: 10,
    fill: "#FFD65A",
  },
  {
    fertilizer: "SSP",
    requests: 10,
    fill: "#A98BEA",
  },
  {
    fertilizer: "Urea",
    requests: 40,
    fill: "#4F8FEF",
  },
];

const chartConfig = {
  requests: {
    label: "Requests",
  },
  DAP: {
    label: "DAP",
    color: "#6BC47D",
  },
  MOP: {
    label: "MOP",
    color: "#F28A52",
  },
  NPK: {
    label: "NPK",
    color: "#FFD65A",
  },
  SSP: {
    label: "SSP",
    color: "#A98BEA",
  },
  Urea: {
    label: "Urea",
    color: "#4F8FEF",
  },
};

export function ChartPieDonutText() {
  const totalRequests = React.useMemo(() => {
    return chartData.reduce(
      (total, item) => total + item.requests,
      0
    );
  }, []);

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Today's fertilizer requests</CardTitle>

        <CardDescription>
          Distribution of fertilizer requests made today.
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />

            <Pie
              data={chartData}
              dataKey="requests"
              nameKey="fertilizer"
              innerRadius={70}
              outerRadius={110}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (
                    viewBox &&
                    "cx" in viewBox &&
                    "cy" in viewBox
                  ) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalRequests.toLocaleString()}
                        </tspan>

                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Requests
                        </tspan>
                      </text>
                    );
                  }

                  return null;
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex-col gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Showing fertilizer requests for today
        </div>
      </CardFooter>
    </Card>
  );
}