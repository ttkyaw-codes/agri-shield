import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {Funnel} from "lucide-react"
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

export function MenuBar() {
  return (
    <Sheet>
      <SheetTrigger render={
         <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-md bg-white text-gray-800 text-sm font-medium hover:bg-gray-50 transition-colors">
          <Funnel className="w-4 h-4 text-gray-700" />
          <span>Filter</span>
        </button>
      } />
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Filter Data </SheetTitle>
          <SheetDescription>
            ဓာတ်မြေဩဇာအလိုက် ဒေတာကို စစ်ထုတ်ရန် အောက်ပါအချက်အလက်များကို ဖြည့်သွင်းပါ။
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="space-y-8">
            <label>Created at</label>
            <DateRangePicker/>
          </div>
          <div className="space-y-8">
            <label>Price</label>
            <PriceRangeFilter/>
          </div>
           <div className="space-y-8">
            <label>Chemical Type</label>
            <ChemicalTypeFilter/>
          </div>
           <div className="space-y-8 w-full flex justify-end gap-2">
            <button type="submit" className={"bg-green-500 text-white py-2 px-1.5 rounded-xs"}>Save changes</button>
            <SheetClose render={<Button className={"py-4.5 bg-gray-50 border-gray-200 rounded-xs text-gray-600 hover:bg-gray-100"}>Close</Button>} />
          </div>
          
          
        </div>
      </SheetContent>
    </Sheet>
  )
}
