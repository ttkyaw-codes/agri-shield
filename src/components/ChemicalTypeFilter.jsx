"use client";

import React, { useState } from "react";
const CHEMICAL_TYPES = [
  { id: "all", label: "All Types" },
  { id: "UDP", label: "UDP" },
  { id: "Urea", label: "Urea" },
  { id: "NPK", label: "NPK" },
  { id: "Composot", label: "Compost" },
];

export function ChemicalTypeFilter({ value = "all", onChange }) {
  const [selectedType, setSelectedType] = useState(value);

  const handleSelect = (id) => {
    setSelectedType(id);
    if (onChange) onChange(id);
  };

  const handleReset = () => {
    handleSelect("all");
  };

  return (
    <div className="w-full max-w-sm p-5  font-sans space-y-4">
      {/* Header */}
      {/* Filter Chips */}
      <div className="grid grid-cols-3 gap-2">
        {CHEMICAL_TYPES.map((type) => {
          const isActive = selectedType === type.id;

          return (
            <button
              key={type.id}
              type="button"
              onClick={() => handleSelect(type.id)}
              className={`px-3 py-2 text-xs font-medium rounded-sm  transition-all cursor-pointer ${
                isActive
                  ? "bg-green-500 text-white border-green-400 shadow-xs"
                  : "bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100"
              }`}
            >
              {type.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}