import React from 'react'
import CropCreateForm from './CropCreateForm'

const CropCreateSection = () => {
  return (
    <div>
      <div className="space-y-5">
        <h1 className="text-4xl font-extrabold tracking-tight text-royal-gold-900">သီးနှံအသစ် ဖန်တီးမည်</h1>
        <p className="text-lg text-stone-500">သီးနှံအချက်အလက်များကို ဤနေရာတွင် စနစ်တကျ စီမံခန့်ခွဲပြီး လွယ်ကူစွာ စုစည်းနိုင်ပါသည်။</p>
      </div>
      <section className="md:py-4">
        <div className="mx-auto px-1 2xl:px-0">
          <CropCreateForm />
        </div>
      </section>
    </div>
  )
}

export default CropCreateSection