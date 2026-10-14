import React from 'react'
import CategoryCreateForm from './CategoryCreateForm'

const CategoryCreateSection = () => {
  return (
 <div>
  <div className="space-y-5">
    <h1 className="text-4xl font-extrabold tracking-tight text-royal-gold-900">ဓာတ်မြေဩဇာ အသစ်ဖန်တီးမည်</h1>
    <p className="text-lg text-stone-500">ဓာတ်မြေဩဇာ စာရင်းများကို ဤနေရာတွင် စနစ်တကျ စီမံခန့်ခွဲပြီး လွယ်ကူစွာ စုစည်းနိုင်ပါသည်။</p>
  </div>
  <section className="md:py-4">
    <div className="mx-auto   px-1 2xl:px-0">
      <CategoryCreateForm/>
    </div>
  </section></div>
  )
}

export default CategoryCreateSection