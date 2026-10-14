import React from 'react'

const DashboardStatics = () => {
  return (
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {/* Revenue Card */}
    <div className="bg-royal-gold-500 hover:bg-royal-gold-400 duration-200 p-6 rounded-2xl shadow-lg shadow-royal-gold-200/50 text-royal-gold-950">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium opacity-80 uppercase tracking-wider">Revenue</p>
          <h3 className="text-3xl font-bold mt-1">3,000,000 MMK</h3>
        </div>
        <div className="p-2 bg-white/30 rounded-lg">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
        </div>
      </div>
      <p className="mt-4 text-sm font-semibold text-royal-gold-900">
        <span className="bg-white/40 text-green-500 px-2 py-0.5 rounded">↑ 12%</span> vs last month
      </p>
    </div>
    {/* Orders Card */}
    {/* Royal Gold Themed Card */}
    <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm hover:shadow-md hover:border-royal-gold-200 transition-all group">
      <div className="flex items-center justify-between mb-4">
        {/* Icon Container using your Gold 50 and 500 */}
        <div className="p-2 bg-royal-gold-50 text-royal-gold-600 rounded-lg group-hover:bg-royal-gold-500 group-hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </div>
        {/* Optional Badge using Gold 100/700 */}
        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-royal-gold-100 text-royal-gold-700 rounded-full">
          Live
        </span>
      </div>
      <h3 className="text-sm font-medium text-stone-500 uppercase tracking-tight">Active Orders</h3>
      <p className="text-3xl font-bold text-stone-900 mt-1">156</p>
      {/* Subtle decorative footer line */}
      <div className="mt-4 h-1 w-full bg-stone-100 rounded-full overflow-hidden">
        <div className="h-full bg-royal-gold-400 w-2/3" />
      </div>
    </div>
    {/* Products Card */}
    {/* Royal Gold Total Products Card */}
    <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm hover:shadow-md hover:border-royal-gold-300 transition-all duration-300 group">
      <div className="flex items-center justify-between mb-4">
        {/* Icon Container: Using Gold 50 background and Gold 600 for the icon */}
        <div className="p-2 bg-royal-gold-50 text-royal-gold-600 rounded-lg group-hover:bg-royal-gold-100 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        </div>
        {/* Optional: Trending badge using Gold 500 */}
        <div className="flex items-center text-xs font-bold text-royal-gold-700 bg-royal-gold-50 px-2 py-1 rounded-md">
          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" />
          </svg>
          New
        </div>
      </div>
      <h3 className="text-sm font-medium text-stone-500">Total Products</h3>
      <div className="flex items-baseline space-x-2">
        <p className="text-2xl font-bold text-stone-900 mt-1">1,240</p>
        <span className="text-xs text-stone-400 font-normal">items</span>
      </div>
    </div>
    {/* Customers Card */}
    {/* Royal Gold New Customers Card */}
    <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm hover:shadow-md hover:border-royal-gold-300 transition-all duration-300 group">
      <div className="flex items-center justify-between mb-4">
        {/* Icon Container: Royal Gold 50 bg with Gold 600 icon */}
        <div className="p-2 bg-royal-gold-50 text-royal-gold-600 rounded-lg group-hover:bg-royal-gold-500 group-hover:text-white transition-all duration-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        {/* Trend Indicator */}
        <div className="flex items-center text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          14%
        </div>
      </div>
      <h3 className="text-sm font-medium text-stone-500 uppercase tracking-tight">New Customers</h3>
      <div className="flex items-end justify-between">
        <p className="text-3xl font-bold text-stone-900 mt-1">48</p>
        <p className="text-xs text-stone-400 mb-1">this week</p>
      </div>
    </div>
  </div>
  )
}

export default DashboardStatics