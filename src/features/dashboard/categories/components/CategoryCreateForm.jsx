"use client"

import React from "react"
import ButtonSpinner from "@/components/ButtonSpinner"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useStoreCategory } from "../hooks/useCategory"
import { toast } from "sonner"

const CategoryCreateForm = () => {
  const {
    register,
    handleSubmit,
    isSubmitting,
    errors,
    reset,
    router,
    onSubmit,
  } = useStoreCategory()

  return (
    <form
      method="post"
      onSubmit={handleSubmit(onSubmit)}
      className="w-full space-y-6 dark:border-stone-800 dark:bg-stone-900 lg:w-2/3 xl:w-1/2"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

        {/* Product Name */}
        <div className="space-y-2">
          <Label htmlFor="product_name" className="font-bold text-stone-700 dark:text-stone-300">
            ထုတ်ကုန်အမည်
          </Label>
          <Input
            id="product_name"
            placeholder="ထုတ်ကုန်အမည် ထည့်ပါ..."
            className="input-royal"
            {...register("product_name", {
              required: "ထုတ်ကုန်အမည် ထည့်သွင်းရန် လိုအပ်ပါသည်။",
              minLength: {
                value: 3,
                message: "ထုတ်ကုန်အမည်သည် အနည်းဆုံး စာလုံး ၃ လုံး ရှိရပါမည်။",
              },
            })}
          />
          {errors.product_name && (
            <span className="mt-1 text-xs text-red-500">
              {errors.product_name.message}
            </span>
          )}
        </div>

        {/* Brand Name  ← NEW */}
        <div className="space-y-2">
          <Label htmlFor="brand_name" className="font-bold text-stone-700 dark:text-stone-300">
            ကုန်အမှတ်တံဆိပ်
          </Label>
          <Input
            id="brand_name"
            placeholder="ကုန်အမှတ်တံဆိပ် ထည့်ပါ..."
            className="input-royal"
            {...register("brand_name", {
              required: "ကုန်အမှတ်တံဆိပ် ထည့်သွင်းရန် လိုအပ်ပါသည်။",
              minLength: {
                value: 2,
                message: "ကုန်အမှတ်တံဆိပ်သည် အနည်းဆုံး စာလုံး ၂ လုံး ရှိရပါမည်။",
              },
            })}
          />
          {errors.brand_name && (
            <span className="mt-1 text-xs text-red-500">
              {errors.brand_name.message}
            </span>
          )}
        </div>

        {/* Chemical Name */}
        <div className="space-y-2">
          <Label htmlFor="chemical_name" className="font-bold text-stone-700 dark:text-stone-300">
            ဓာတုအမည်
          </Label>
          <Input
            id="chemical_name"
            placeholder="ဓာတုအမည် ထည့်ပါ..."
            className="input-royal"
            {...register("chemical_name", {
              required: "ဓာတုအမည် ထည့်သွင်းရန် လိုအပ်ပါသည်။",
              minLength: {
                value: 3,
                message: "ဓာတုအမည်သည် အနည်းဆုံး စာလုံး ၃ လုံး ရှိရပါမည်။",
              },
            })}
          />
          {errors.chemical_name && (
            <span className="mt-1 text-xs text-red-500">
              {errors.chemical_name.message}
            </span>
          )}
        </div>

        {/* Price */}
        <div className="space-y-2">
          <Label htmlFor="prices" className="font-bold text-stone-700 dark:text-stone-300">
            ဈေးနှုန်း
          </Label>
          <Input
            id="prices"
            type="number"
            step="0.01"
            placeholder="ထုတ်ကုန်ဈေးနှုန်း ထည့်ပါ..."
            className="input-royal"
            {...register("prices", {
              required: "ဈေးနှုန်း ထည့်သွင်းရန် လိုအပ်ပါသည်။",
              min: {
                value: 0,
                message: "ဈေးနှုန်းသည် သုညထက် နည်း၍ မရပါ။",
              },
            })}
          />
          {errors.prices && (
            <span className="mt-1 text-xs text-red-500">
              {errors.prices.message}
            </span>
          )}
        </div>

        {/* Image */}
        <div className="space-y-2">
          <Label htmlFor="image" className="font-bold text-stone-700 dark:text-stone-300">
            ထုတ်ကုန်ပုံ
          </Label>
          <Input
            id="image"
            type="file"
            accept="image/*"
            className="input-royal cursor-pointer"
            {...register("image", {
              required: "ထုတ်ကုန်ပုံ ထည့်သွင်းရန် လိုအပ်ပါသည်။",
            })}
          />
          {errors.image && (
            <span className="mt-1 text-xs text-red-500">
              {errors.image.message}
            </span>
          )}
        </div>

        {/* Product Used Time */}
        <div className="space-y-2">
          <Label htmlFor="product_used_time" className="font-bold text-stone-700 dark:text-stone-300">
            အသုံးပြုရမည့်အချိန်
          </Label>
          <textarea
            id="product_used_time"
            rows={3}
            placeholder="အသုံးပြုရမည့်အချိန်ကို ထည့်ပါ..."
            className="w-full rounded-md border border-stone-300 bg-transparent p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 dark:border-stone-700 dark:text-white"
            {...register("product_used_time")}
          />
          {errors.product_used_time && (
            <span className="mt-1 text-xs text-red-500">
              {errors.product_used_time.message}
            </span>
          )}
        </div>

        {/* Product Used Limit */}
        <div className="space-y-2">
          <Label htmlFor="product_used_limit" className="font-bold text-stone-700 dark:text-stone-300">
            အသုံးပြုနိုင်သော ပမာဏ
          </Label>
          <textarea
            id="product_used_limit"
            rows={3}
            placeholder="အသုံးပြုနိုင်သော ပမာဏကို ထည့်ပါ..."
            className="w-full rounded-md border border-stone-300 bg-transparent p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 dark:border-stone-700 dark:text-white"
            {...register("product_used_limit", {
              required: "အသုံးပြုနိုင်သော ပမာဏ ထည့်သွင်းရန် လိုအပ်ပါသည်။",
              minLength: {
                value: 3,
                message: "အသုံးပြုနိုင်သော ပမာဏသည် အနည်းဆုံး စာလုံး ၃ လုံး ရှိရပါမည်။",
              },
            })}
          />
          {errors.product_used_limit && (
            <span className="mt-1 text-xs text-red-500">
              {errors.product_used_limit.message}
            </span>
          )}
        </div>

        {/* Description */}
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="description" className="font-bold text-stone-700 dark:text-stone-300">
            ထုတ်ကုန်ဖော်ပြချက်
          </Label>
          <textarea
            id="description"
            rows={4}
            placeholder="ထုတ်ကုန်အကြောင်းအရာကို ထည့်ပါ..."
            className="w-full rounded-md border border-stone-300 bg-transparent p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 dark:border-stone-700 dark:text-white"
            {...register("description", {
              required: "ထုတ်ကုန်ဖော်ပြချက် ထည့်သွင်းရန် လိုအပ်ပါသည်။",
              minLength: {
                value: 3,
                message: "ထုတ်ကုန်ဖော်ပြချက်သည် အနည်းဆုံး စာလုံး ၃ လုံး ရှိရပါမည်။",
              },
            })}
          />
          {errors.description && (
            <span className="mt-1 text-xs text-red-500">
              {errors.description.message}
            </span>
          )}
        </div>

        {/* Advantage */}
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="advatage" className="font-bold text-stone-700 dark:text-stone-300">
            ထုတ်ကုန်၏ အားသာချက်
          </Label>
          <textarea
            id="advatage"
            rows={3}
            placeholder="ထုတ်ကုန်၏ အားသာချက်များကို ထည့်ပါ..."
            className="w-full rounded-md border border-stone-300 bg-transparent p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 dark:border-stone-700 dark:text-white"
            {...register("advatage", {
              required: "ထုတ်ကုန်၏ အားသာချက် ထည့်သွင်းရန် လိုအပ်ပါသည်။",
              minLength: {
                value: 3,
                message: "ထုတ်ကုန်၏ အားသာချက်သည် အနည်းဆုံး စာလုံး ၃ လုံး ရှိရပါမည်။",
              },
            })}
          />
          {errors.advatage && (
            <span className="mt-1 text-xs text-red-500">
              {errors.advatage.message}
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
              {...register("back_to_fertilizers")}
              id="back-to-fertilizers"
              type="checkbox"
              className="h-4 w-4 rounded border-stone-300 bg-stone-100 text-green-600 focus:ring-green-500"
            />
            <label htmlFor="back-to-fertilizers" className="ml-2 text-sm font-medium text-stone-900 dark:text-stone-200">
              go to fertilizers page
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
              className="border border-stone-200 bg-white px-5 py-2.5 text-sm font-medium text-stone-900 hover:bg-green-400 hover:text-white focus:z-10 focus:ring-4"
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

export default CategoryCreateForm