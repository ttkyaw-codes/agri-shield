import React from "react";

const CategoryDetailSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
      {/* Product Image */}
      <div className="flex items-center justify-center rounded-xl bg-gray-100 p-8">
        <img
          src="/fertilizer.png"
          alt="Fertilizer"
          className="max-h-100 w-auto object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="space-y-6">
        <div>
          <p className="text-sm font-medium text-green-600">
            Fertilizer
          </p>

          <h1 className="mt-2 text-3xl font-bold text-gray-900">
            Urea Fertilizer
          </h1>

          <p className="mt-2 text-gray-500">
            High-quality nitrogen fertilizer for crop growth
          </p>
        </div>

        {/* Price */}
        <div>
          <p className="text-sm text-gray-500">Price</p>
          <p className="text-2xl font-bold text-green-600">
            3,000 MMK
          </p>
        </div>

        {/* Product Information */}
        <div className="grid grid-cols-2 gap-4 rounded-xl border p-4">
          <div>
            <p className="text-sm text-gray-500">Brand</p>
            <p className="font-semibold">Awba</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Product Type</p>
            <p className="font-semibold">Urea</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Nutrient</p>
            <p className="font-semibold">46% Nitrogen</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Usage</p>
            <p className="font-semibold">Crop Growth</p>
          </div>
        </div>

        {/* Description */}
        <div>
          <h2 className="text-lg font-semibold">
            Description
          </h2>

          <p className="mt-2 leading-7 text-gray-600">
            Urea is a nitrogen-rich fertilizer commonly used to
            support vegetative growth and improve crop development.
            Apply according to the recommended dosage for the crop
            and soil condition.
          </p>
        </div>

        {/* Usage */}
        <div>
          <h2 className="text-lg font-semibold">
            Application
          </h2>

          <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600">
            <li>Apply around the crop root zone.</li>
            <li>Use the recommended dosage.</li>
            <li>Water the soil after application.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CategoryDetailSection;