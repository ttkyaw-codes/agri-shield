"use client"

import React from "react"
import ButtonSpinner from "@/components/ButtonSpinner"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useCrop } from "../hooks/useCrop" // Switched to useCrop hook
import { toast } from "sonner"

const CropCreateForm = () => {
  const {
    register,
    handleSubmit,
    isSubmitting,
    errors,
    reset,
    router,
    onSubmit,
  } = useCrop()

  return (
    <form
      method="post"
      onSubmit={handleSubmit(onSubmit)}
      className="w-full space-y-6 dark:border-stone-800 dark:bg-stone-900 lg:w-2/3 xl:w-1/2"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="name" className="font-bold text-stone-700 dark:text-stone-300">
            သီးနှံအမည်
          </Label>
          <Input
            id="name"
            placeholder="သီးနှံအမည် ထည့်ပါ..."
            className="input-royal"
            {...register("name", {
              required: "သီးနှံအမည် ထည့်သွင်းရန် လိုအပ်ပါသည်။",
              minLength: {
                value: 2,
                message: "သီးနှံအမည်သည် အနည်းဆုံး စာလုံး ၂ လုံး ရှိရပါမည်။",
              },
            })}
          />
          {errors.name && (
            <span className="mt-1 text-xs text-red-500">
              {errors.name.message}
            </span>
          )}
        </div>

        {/* Variety */}
        <div className="space-y-2">
          <Label htmlFor="variety" className="font-bold text-stone-700 dark:text-stone-300">
            မျိုးကွဲ (Variety)
          </Label>
          <Input
            id="variety"
            placeholder="မျိုးကွဲ ထည့်ပါ..."
            className="input-royal"
            {...register("variety", {
              required: "မျိုးကွဲ ထည့်သွင်းရန် လိုအပ်ပါသည်။",
              minLength: {
                value: 2,
                message: "မျိုးကွဲသည် အနည်းဆုံး စာလုံး ၂ လုံး ရှိရပါမည်။",
              },
            })}
          />
          {errors.variety && (
            <span className="mt-1 text-xs text-red-500">
              {errors.variety.message}
            </span>
          )}
        </div>

        {/* Soil Type */}
        <div className="space-y-2">
          <Label htmlFor="soil_type" className="font-bold text-stone-700 dark:text-stone-300">
            မြေအမျိုးအစား
          </Label>
          <Input
            id="soil_type"
            placeholder="မြေအမျိုးအစား ထည့်ပါ..."
            className="input-royal"
            {...register("soil_type", {
              required: "မြေအမျိုးအစား ထည့်သွင်းရန် လိုအပ်ပါသည်။",
              minLength: {
                value: 3,
                message: "မြေအမျိုးအစားသည် အနည်းဆုံး စာလုံး ၃ လုံး ရှိရပါမည်။",
              },
            })}
          />
          {errors.soil_type && (
            <span className="mt-1 text-xs text-red-500">
              {errors.soil_type.message}
            </span>
          )}
        </div>

        {/* Climate */}
        <div className="space-y-2">
          <Label htmlFor="climate" className="font-bold text-stone-700 dark:text-stone-300">
            ရာသီဥတု အခြေအနေ
          </Label>
          <Input
            id="climate"
            placeholder="ရာသီဥတု အခြေအနေ ထည့်ပါ..."
            className="input-royal"
            {...register("climate", {
              required: "ရာသီဥတု အခြေအနေ ထည့်သွင်းရန် လိုအပ်ပါသည်။",
              minLength: {
                value: 3,
                message: "ရာသီဥတု အခြေအနေသည် အနည်းဆုံး စာလုံး ၃ လုံး ရှိရပါမည်။",
              },
            })}
          />
          {errors.climate && (
            <span className="mt-1 text-xs text-red-500">
              {errors.climate.message}
            </span>
          )}
        </div>


        {/* Planting Method */}
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="planting_method" className="font-bold text-stone-700 dark:text-stone-300">
            စိုက်ပျိုးသည့်နည်းလမ်း
          </Label>
          <textarea
            id="planting_method"
            rows={3}
            placeholder="စိုက်ပျိုးသည့်နည်းလမ်းကို ထည့်ပါ..."
            className="w-full rounded-md border border-stone-300 bg-transparent p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 dark:border-stone-700 dark:text-white"
            {...register("planting_method", {
              required: "စိုက်ပျိုးသည့်နည်းလမ်း ထည့်သွင်းရန် လိုအပ်ပါသည်။",
              minLength: {
                value: 3,
                message: "စိုက်ပျိုးသည့်နည်းလမ်းသည် အနည်းဆုံး စာလုံး ၃ လုံး ရှိရပါမည်။",
              },
            })}
          />
          {errors.planting_method && (
            <span className="mt-1 text-xs text-red-500">
              {errors.planting_method.message}
            </span>
          )}
        </div>

        {/* Harvesting */}
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="harvesting" className="font-bold text-stone-700 dark:text-stone-300">
            ရိတ်သိမ်းဆွတ်ခူးခြင်း (Harvesting)
          </Label>
          <textarea
            id="harvesting"
            rows={3}
            placeholder="ရိတ်သိမ်းဆွတ်ခူးခြင်း အကြောင်းအရာကို ထည့်ပါ..."
            className="w-full rounded-md border border-stone-300 bg-transparent p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 dark:border-stone-700 dark:text-white"
            {...register("harvesting", {
              required: "ရိတ်သိမ်းဆွတ်ခူးခြင်း အချက်အလက် ထည့်သွင်းရန် လိုအပ်ပါသည်။",
              minLength: {
                value: 3,
                message: "ရိတ်သိမ်းဆွတ်ခူးခြင်း အချက်အလက်သည် အနည်းဆုံး စာလုံး ၃ လုံး ရှိရပါမည်။",
              },
            })}
          />
          {errors.harvesting && (
            <span className="mt-1 text-xs text-red-500">
              {errors.harvesting.message}
            </span>
          )}
        </div>

        {/* Plant Shape */}
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="plant_shape" className="font-bold text-stone-700 dark:text-stone-300">
            ပင်စည်/အပင်ပုံစံ (Plant Shape)
          </Label>
          <textarea
            id="plant_shape"
            rows={3}
            placeholder="ပင်စည်/အပင်ပုံစံ အကြောင်းအရာကို ထည့်ပါ..."
            className="w-full rounded-md border border-stone-300 bg-transparent p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 dark:border-stone-700 dark:text-white"
            {...register("plant_shape", {
              required: "ပင်စည်/အပင်ပုံစံ ထည့်သွင်းရန် လိုအပ်ပါသည်။",
              minLength: {
                value: 3,
                message: "ပင်စည်/အပင်ပုံစံသည် အနည်းဆုံး စာလုံး ၃ လုံး ရှိရပါမည်။",
              },
            })}
          />
          {errors.plant_shape && (
            <span className="mt-1 text-xs text-red-500">
              {errors.plant_shape.message}
            </span>
          )}
        </div>

        {/* Confirmation */}
        <div className="mt-2 md:col-span-2">
          <div className="mb-4 flex items-center">
            <input
              {...register("all_correct", {
                required: "အချက်အလက်များ မှန်ကန်ကြောင်း အတည်ပြုရန် လိုအပ်ပါသည်။",
              })}
              id="all-correct"
              type="checkbox"
              className="h-4 w-4 rounded border-stone-300 bg-stone-100 text-green-600 focus:ring-green-500"
            />
            <label htmlFor="all-correct" className="ml-2 text-sm font-medium text-stone-900 dark:text-stone-200">
              ထည့်သွင်းထားသော အချက်အလက်များအားလုံး မှန်ကန်ကြောင်း အတည်ပြုပါသည်
            </label>
          </div>

          {errors.all_correct && (
            <span className="mb-4 block text-xs text-red-500">
              {errors.all_correct.message}
            </span>
          )}

          <div className="mb-4 flex items-center">
            <input
              {...register("back_to_crops")}
              id="back-to-crops"
              type="checkbox"
              className="h-4 w-4 rounded border-stone-300 bg-stone-100 text-green-600 focus:ring-green-500"
            />
            <label htmlFor="back-to-crops" className="ml-2 text-sm font-medium text-stone-900 dark:text-stone-200">
              go to crops page
            </label>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={reset}
              className="border border-stone-200 bg-white px-5 py-2.5 text-sm font-medium text-stone-900 hover:bg-stone-100 focus:z-10 focus:ring-4"
            >
              ပယ်ဖျက်မည်
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="border border-stone-200 bg-white px-5 py-2.5 text-sm font-medium text-stone-900 hover:bg-green-400 hover:text-white focus:z-10 focus:ring-4 flex items-center gap-2"
            >
              <span>သိမ်းဆည်းမည်</span>
              {isSubmitting && <ButtonSpinner />}
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default CropCreateForm