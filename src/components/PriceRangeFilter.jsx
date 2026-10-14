"use client";

import React, { useState } from "react";
import { RotateCcw } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const MIN_LIMIT = 0;
const MAX_LIMIT = 1000000; // 1,000,000 MMK
const STEP = 5000;

const PRESETS = [
  { label: "Under 50k Ks", range: [0, 50000] },
  { label: "50k - 200k Ks", range: [50000, 200000] },
  { label: "200k - 500k Ks", range: [200000, 500000] },
  { label: "500k+ Ks", range: [500000, 1000000] },
];

export function PriceRangeFilter({ value, onChange }) {
  const [internalRange, setInternalRange] = useState([0, 50000]);

  // Use parent state if provided, otherwise fallback to local state
  const range = value || internalRange;

  const handleRangeChange = (newRange) => {
    setInternalRange(newRange);
    if (onChange) onChange(newRange);
  };

  const handleReset = () => {
    handleRangeChange([MIN_LIMIT, MAX_LIMIT]);
  };

  return (
    <div className="w-full max-w-sm p-5 bg-white    font-sans space-y-5">
      {/* Header */}
      {/* <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-gray-900">Price Range</h3>
        <button
          type="button"
          onClick={handleReset}
          className="flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
        >
          <RotateCcw size={13} />
          Reset
        </button>
      </div> */}

      {/* Preset Chips (Clicking slides the slider automatically) */}
      <div className= " grid grid-cols-2 gap-2">
        {PRESETS.map((preset, idx) => {
          const isActive =
            range[0] === preset.range[0] && range[1] === preset.range[1];

          return (
            <button
              key={idx}
              type="button"
              onClick={() => handleRangeChange(preset.range)}
              className={`px-3 py-2 text-xs font-medium rounded-sm border transition-all cursor-pointer ${
                isActive
                  ? "bg-green-500 text-white border-green-500 shadow-xs"
                  : "bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100"
              }`}
            >
              {preset.label}
            </button>
          );
        })}
      </div>

      {/* Range Slider */}
      <div className="px-1 pt-2">
        <Slider
          value={range}
          onValueChange={handleRangeChange}
          min={MIN_LIMIT}
          max={MAX_LIMIT}
          step={STEP}
        />
      </div>
    </div>
  );
}