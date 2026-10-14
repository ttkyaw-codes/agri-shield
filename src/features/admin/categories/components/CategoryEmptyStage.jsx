import { TableCell, TableRow } from '@/components/ui/table'
import Link from 'next/link'
import React from 'react'

const CategoryEmptyStage = () => {
  return (
<TableRow className=" dark:bg-stone-900">
  <TableCell
    colSpan={6} 
    className="h-32 text-center"
  >
    <div className="flex flex-col items-center justify-center gap-2">
      <p className="
       font-medium">
        ဓာတ်မြေဩဇာများ မရှိသေးပါ။
      </p>
      <Link
        href="/fertilizers/create" 
        className="text-royal-gold-700 hover:text-royal-gold-600 dark:text-green-500  text-sm underline underline-offset-4 transition-colors"
      >
        ဓာတ်မြေဩဇာ အသစ်ဖန်တီးရန်
      </Link>
    </div>
  </TableCell>
</TableRow>
  )
}

export default CategoryEmptyStage