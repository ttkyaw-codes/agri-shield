import React from 'react'
import CategoryList from './CategoryList'
import CategoryPagination from './CategoryPagnation'
import Pagnition from '@/components/Pagination'
import ActionBar from '@/components/ActionBar'
import { MenuBar } from '@/components/MenuBar'
const CategorySection = () => {
 
  return (
   <>
     <div className="space-y-10">
  <h1 className="text-4xl font-extrabold tracking-tight text-royal-gold-900">ဓာတ်မြေဩဇာ</h1>
  <ActionBar routing={"fertilizers/create"}/>
  <CategoryList/>
  <Pagnition/>
</div>

   </>
  )
}

export default CategorySection