"use client";

import * as React from "react";
import { Slider as SliderPrimitive } from "@base-ui/react/slider";
import { cn } from "@/lib/utils";

function Slider({ className, value, onValueChange, min = 0, max = 1000000, step = 5000, ...props }) {
  return (
    <SliderPrimitive.Root
      value={value}
      onValueChange={onValueChange}
      min={min}
      max={max}
      step={step}
      className={cn("relative flex w-full touch-none select-none items-center py-4", className)}
      {...props}
    >
      <SliderPrimitive.Control className="relative flex w-full items-center">
        {/* Track */}
        <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-gray-100">
          <SliderPrimitive.Indicator className="absolute h-full bg-green-500" />
        </SliderPrimitive.Track>

        {/* Min Thumb */}
        <SliderPrimitive.Thumb
          index={0}
          className="block h-5 w-5 rounded-full border-2 border-green-500 bg-white shadow-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 cursor-grab active:cursor-grabbing"
        />

        {/* Max Thumb */}
        <SliderPrimitive.Thumb
          index={1}
          className="block h-5 w-5 rounded-full border-2 border-green-500 bg-white shadow-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 cursor-grab active:cursor-grabbing"
        />
      </SliderPrimitive.Control>
    </SliderPrimitive.Root>
  );
}

export { Slider };