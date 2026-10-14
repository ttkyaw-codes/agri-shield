"use client";

import React from "react";

const CategoryDetailSection = ({ fertilizer }) => {
  if (!fertilizer) {
    return (
      <section className="p-6">
        <div className="rounded-xl border bg-card p-8 text-center text-muted-foreground">
          Fertilizer information not found.
        </div>
      </section>
    );
  }

  const formatPrice = (price) => {
    if (price === null || price === undefined || price === "") {
      return "—";
    }

    const number = Number(price);

    if (Number.isNaN(number)) {
      return price;
    }

    return `${number.toLocaleString()} MMK`;
  };

  return (
    <section className="grid grid-cols-1 gap-8 p-6 lg:grid-cols-2">
      {/* Product Image */}
      <div className="flex min-h-[400px] items-center justify-center rounded-xl border bg-muted/30 p-8">
        <img
          src={fertilizer.image || "/fertilizer.png"}
          alt={fertilizer.product_name || "Fertilizer"}
          className="max-h-[400px] w-auto object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="space-y-6">
        {/* Brand & Product Name */}
        <div>
          <p className="text-sm font-medium text-green-600">
            {fertilizer.brand_name || "Fertilizer"}
          </p>

          <h1 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
            {fertilizer.product_name || "Unnamed Fertilizer"}
          </h1>

          {fertilizer.chemical_name && (
            <p className="mt-2 text-gray-500">
              {fertilizer.chemical_name}
            </p>
          )}
        </div>

        {/* Price */}
        <div className="rounded-xl bg-green-50 p-4 dark:bg-green-950/30">
          <p className="text-sm text-gray-500">Price</p>

          <p className="mt-1 text-2xl font-bold text-green-600">
            {formatPrice(fertilizer.prices)}
          </p>
        </div>

        {/* Product Information */}
        <div className="grid grid-cols-1 gap-4 rounded-xl border p-4 sm:grid-cols-2">
          {/* Brand */}
          <div>
            <p className="text-sm text-gray-500">Brand</p>
            <p className="mt-1 font-semibold">
              {fertilizer.brand_name || "—"}
            </p>
          </div>

          {/* Product */}
          <div>
            <p className="text-sm text-gray-500">Product Name</p>
            <p className="mt-1 font-semibold">
              {fertilizer.product_name || "—"}
            </p>
          </div>

          {/* Chemical */}
          <div>
            <p className="text-sm text-gray-500">Chemical Composition</p>
            <p className="mt-1 font-semibold">
              {fertilizer.chemical_name || "—"}
            </p>
          </div>

          {/* Usage Time */}
          <div>
            <p className="text-sm text-gray-500">Usage Time</p>
            <p className="mt-1 font-semibold">
              {fertilizer.product_used_time || "—"}
            </p>
          </div>

          {/* Usage Limit */}
          <div>
            <p className="text-sm text-gray-500">Usage Limit</p>
            <p className="mt-1 font-semibold">
              {fertilizer.product_used_limit || "—"}
            </p>
          </div>

          {/* Price */}
          <div>
            <p className="text-sm text-gray-500">Price</p>
            <p className="mt-1 font-semibold text-green-600">
              {formatPrice(fertilizer.prices)}
            </p>
          </div>
        </div>

        {/* Description */}
        <div>
          <h2 className="text-lg font-semibold">Description</h2>

          <p className="mt-2 leading-7 text-gray-600 dark:text-gray-300">
            {fertilizer.description || "No description available."}
          </p>
        </div>

        {/* Advantage */}
        <div>
          <h2 className="text-lg font-semibold">Advantages</h2>

          <p className="mt-2 leading-7 text-gray-600 dark:text-gray-300">
            {fertilizer.advatage || "No advantages information available."}
          </p>
        </div>

        {/* Application / Usage */}
        <div>
          <h2 className="text-lg font-semibold">Application</h2>

          <div className="mt-2 rounded-xl border bg-muted/30 p-4">
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-500">Recommended Time</p>
                <p className="font-medium">
                  {fertilizer.product_used_time || "—"}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Usage Limit</p>
                <p className="font-medium">
                  {fertilizer.product_used_limit || "—"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryDetailSection;