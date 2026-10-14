import React from 'react'
import { ChartBarInteractive } from './ChartBarInteractive'
import { ChartPieDonutText } from './ChartPieDonutText'
import { ChartLineInteractive } from './ChartLineInteractive'

const DashboardChart = () => {
  return (
  <div>
    <ChartLineInteractive />

    <div className="p-12 grid grid-cols-5 w-full gap-4 text-center text-stone-400">
      <div className="col-span-3">
        <ChartBarInteractive />
      </div>

      <div className="col-span-2">
        <ChartPieDonutText />
      </div>
    </div>
  </div>
  )
}

export default DashboardChart