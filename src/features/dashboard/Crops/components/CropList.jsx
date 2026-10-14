"use client"

import { Input } from "@/components/ui/input"
import {
  Table, TableBody, TableHead, TableHeader, TableRow,
} from "@/components/ui/table"
import CropRow from "./Croprow"
import CropEmptyStage from "@/features/dashboard/Crops/components/CropEmptyStage"
import Sortable from "@/components/Sortable"
import CropListSkeleton from "@/features/dashboard/Crops/components/CropSkeleton"

const CropList = ({
  crops,
  isLoading,
  error,
}) => {
  if (isLoading) return <CropListSkeleton />

  if (error) {
    return (
      <div className="py-8 text-center text-destructive">
        သီးနှံစာရင်းများကို ရယူ၍မရပါ။ ကျေးဇူးပြု၍ ထပ်မံကြိုးစားပါ။
      </div>
    )
  }

  return (
    <Table className="w-full">
      <TableHeader className="text-lg md:text-xl">
        <TableRow>
          <TableHead className="w-[100px]">
              အမှတ်စဉ်
           
          </TableHead>

          <TableHead>
           
              သီးနှံအမည်
            
          </TableHead>
          <TableHead>
           
              စာရင်းသွင်းသည့်ရက်စွဲ
           
          </TableHead>

          <TableHead className="text-left">လုပ်ဆောင်ချက်</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody className="text-sm md:text-base">
        {crops.length === 0 ? (
          <CropEmptyStage />
        ) : (
          crops.map((crop) => (
            <CropRow key={crop.id} crop={crop} />
          ))
        )}
      </TableBody>
    </Table>
  )
}

export default CropList