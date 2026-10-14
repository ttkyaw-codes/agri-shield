"use client";

import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const CropDetailSkeleton = () => {
  return (
    <section className="grid grid-cols-1 gap-8 p-6 lg:grid-cols-2">
      {/* Crop Image Skeleton */}
      <div className="flex min-h-[400px] items-center justify-center rounded-xl border bg-muted/30 p-8">
        <Skeleton className="h-[350px] w-full rounded-lg" />
      </div>

      {/* Crop Details Skeleton */}
      <div className="space-y-6">
        {/* Name & Variety */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-9 w-64" />
        </div>

        {/* Soil & Climate Badge Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-xl bg-green-50/50 p-4 dark:bg-green-950/10 border">
          <div className="space-y-2">
            <Skeleton className="h-3 w-36" />
            <Skeleton className="h-5 w-24" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-3 w-32" />
            <Skeleton className="h-5 w-24" />
          </div>
        </div>

        {/* Summary Specifications Grid */}
        <div className="grid grid-cols-1 gap-4 rounded-xl border p-4 sm:grid-cols-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="space-y-2">
              <Skeleton className="h-3 w-28" />
              <Skeleton className="h-5 w-32" />
            </div>
          ))}
        </div>

        {/* Planting Method */}
        <div className="space-y-2">
          <Skeleton className="h-6 w-56" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>

        {/* Harvesting */}
        <div className="space-y-2">
          <Skeleton className="h-6 w-52" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/5" />
        </div>

        {/* Plant Shape */}
        <div className="space-y-2">
          <Skeleton className="h-6 w-48" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </div>
    </section>
  );
};

export default CropDetailSkeleton;