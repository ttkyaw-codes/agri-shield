"use client"

import { Button } from "@/components/ui/button"
import { Funnel } from "lucide-react"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { DateRangePicker } from "./DateRangePicker"
import { PriceRangeFilter } from "./PriceRangeFilter"
import { ChemicalTypeFilter } from "./ChemicalTypeFilter"

const EMPTY = {
  date_from: null,
  date_to: null,
  price_min: null,
  price_max: null,
  chemical_name: null,
}

export function MenuBar({
  value = EMPTY,
  onChange = () => {},
  onApply = () => {},
  onReset = () => {},
}) {
  const safeValue = value ?? EMPTY
  const set = (patch) => onChange({ ...safeValue, ...patch })

  return (
    <Sheet>
      <SheetTrigger
        render={
          <button className="flex items-center gap-2 rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-50">
            <Funnel className="h-4 w-4 text-gray-700" />
            <span>Filter</span>
          </button>
        }
      />
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Filter Data</SheetTitle>
          <SheetDescription>
            ဓာတ်မြေဩဇာအလိုက် ဒေတာကို စစ်ထုတ်ရန် အောက်ပါအချက်အလက်များကို
            ဖြည့်သွင်းပါ။
          </SheetDescription>
        </SheetHeader>

        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="space-y-3">
            <label className="text-sm font-semibold">Created at</label>
            <DateRangePicker
              value={{ from: safeValue.date_from, to: safeValue.date_to }}
              onChange={({ from, to }) =>
                set({ date_from: from, date_to: to })
              }
            />
          </div>

          <div className="space-y-3">
            <label className="text-sm font-semibold">Price</label>
            <PriceRangeFilter
              min={safeValue.price_min}
              max={safeValue.price_max}
              onChange={(min, max) =>
                set({ price_min: min, price_max: max })
              }
            />
          </div>

          <div className="space-y-3">
            <label className="text-sm font-semibold">Chemical Type</label>
            <ChemicalTypeFilter
              value={safeValue.chemical_name}
              onChange={(v) => set({ chemical_name: v })}
            />
          </div>

          <SheetFooter className="flex w-full justify-end gap-2">
            <Button
              variant="ghost"
              type="button"
              onClick={onReset}
              className="border border-gray-200 text-gray-600 hover:bg-gray-100"
            >
              Reset
            </Button>
            <SheetClose
              render={
                <Button
                  type="button"
                  onClick={onApply}
                  className="bg-green-500 text-white hover:bg-green-600"
                >
                  Save changes
                </Button>
              }
            />
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  )
}