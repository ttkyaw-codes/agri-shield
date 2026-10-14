import React from 'react'
import DashboardStatics from './DashboardStatics'
import DashboardChart from './DashboardChart'

const DashboardSection = () => {
  return (
 <div className="max-w-7xl mx-auto space-y-8">
  <div className="space-y-1">
    <h1 className="text-4xl font-extrabold tracking-tight text-stone-900">Welcome back,</h1>
    <p className="text-lg text-stone-500"></p>
  </div>
   <DashboardChart/>
  {/* Stats Grid */}
  {/* <DashboardStatics/> */}
  {/* Recent Activity Placeholder */}
 
</div>

  )
}

export default DashboardSection