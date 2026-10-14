"use client";

import React from "react";

const InfoItem = ({ label, value }) => {
  return (
    <div className="space-y-1">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="font-medium text-foreground">
        {value || "—"}
      </p>
    </div>
  );
};

const DetailSection = ({ title, subtitle, children }) => {
  return (
    <div className="border-t py-6">
      <div className="mb-3">
        <h2 className="text-lg font-semibold text-foreground">
          {title}
        </h2>

        <p className="text-sm text-muted-foreground">
          {subtitle}
        </p>
      </div>

      <p className="whitespace-pre-line text-sm leading-7 text-muted-foreground">
        {children || "No information available."}
      </p>
    </div>
  );
};

const CropDetailSection = ({ crop }) => {
  if (!crop) {
    return (
      <section className="p-6">
        <div className="rounded-lg border bg-background p-10 text-center">
          <p className="font-medium">
            သီးနှံအချက်အလက် ရှာမတွေ့ပါ။
          </p>

          <p className="mt-1 text-sm text-muted-foreground">
            Crop information not found.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="p-6">
      <div className="mx-auto max-w-6xl">

        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold tracking-tight">
            Crop Details
          </h1>

          <p className="mt-1 text-sm text-muted-foreground">
            သီးနှံအချက်အလက်များကို ကြည့်ရှုနိုင်ပါသည်။
          </p>
        </div>

        {/* Main Crop Profile */}
        <div className="overflow-hidden rounded-xl border bg-background">

          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr]">

            {/* Image */}
            <div className="border-b bg-muted/30 lg:border-b-0 lg:border-r">
              <div className="flex h-[280px] items-center justify-center lg:h-full">

                {crop.image ? (
                  <img
                    src={crop.image}
                    alt={crop.name || "Crop"}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-center">
                    <div className="mb-3 text-5xl opacity-40">
                      🌱
                    </div>

                    <p className="text-sm text-muted-foreground">
                      No crop image available
                    </p>
                  </div>
                )}

              </div>
            </div>

            {/* Crop Information */}
            <div className="p-7">

              <div className="mb-7">
                <p className="text-sm font-medium text-green-600">
                  မျိုးကွဲ (Variety)
                </p>

                <h2 className="mt-1 text-3xl font-bold tracking-tight">
                  {crop.name || "Unnamed Crop"}
                </h2>

                <p className="mt-1 text-sm text-muted-foreground">
                  {crop.variety || "General variety"}
                </p>
              </div>

              {/* Information Grid */}
              <div className="grid grid-cols-1 gap-x-10 gap-y-6 border-t pt-6 sm:grid-cols-2">

                <InfoItem
                  label="သီးနှံအမည် (Crop Name)"
                  value={crop.name}
                />

                <InfoItem
                  label="မျိုးကွဲ (Variety)"
                  value={crop.variety}
                />

                <InfoItem
                  label="မြေအမျိုးအစား (Soil Type)"
                  value={crop.soil_type}
                />

                <InfoItem
                  label="ရာသီဥတု (Climate)"
                  value={crop.climate}
                />

              </div>
            </div>
          </div>

          {/* Detailed Information */}
          <div className="px-7">

            <DetailSection
              title="စိုက်ပျိုးသည့်နည်းလမ်း"
              subtitle="Planting Method"
            >
              {crop.planting_method}
            </DetailSection>

            <DetailSection
              title="ရိတ်သိမ်းဆွတ်ခူးခြင်း"
              subtitle="Harvesting"
            >
              {crop.harvesting}
            </DetailSection>

            <DetailSection
              title="ပင်စည် / အပင်ပုံစံ"
              subtitle="Plant Shape"
            >
              {crop.plant_shape}
            </DetailSection>

          </div>

        </div>
      </div>
    </section>
  );
};

export default CropDetailSection;