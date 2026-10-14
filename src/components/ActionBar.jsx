"use client"

import React from "react"
import { Search, FileInput, Plus } from "lucide-react"
import Link from "next/link"
import { MenuBar } from "./MenuBar"

export default function ActionBar({
  routing,
  // search (optional — pass from parent if you want the search here)
  searchRef,
  onSearchChange,
  clearSearchInput,
  // filters
  filterValue,
  onFilterChange,
  onFilterApply,
  onFilterReset,
}) {
  return (
    <div className="flex items-center justify-between w-full max-w-6xl gap-4">
      {/* Search Bar */}
      <div className="relative flex-1 max-w-sm">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
          <Search className="w-4 h-4" />
        </div>
        <input
          ref={searchRef}
          type="text"
          placeholder="Search Name , NRC"
          onChange={onSearchChange}
          className="w-full pl-10 pr-4 py-2 text-sm bg-white border border-gray-200 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
        />
      </div>

      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-md bg-white text-gray-800 text-sm font-medium hover:bg-gray-50 transition-colors">
          <FileInput className="w-4 h-4 text-gray-700" />
          <span>Import</span>
        </button>

        <MenuBar
          value={filterValue}
          onChange={onFilterChange}
          onApply={onFilterApply}
          onReset={onFilterReset}
        />

        <Link
          href={routing}
          className="flex items-center gap-2 px-5 py-2 bg-primary hover:bg-green-600 text-white text-sm font-medium rounded-md shadow-sm transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Create</span>
        </Link>
      </div>
    </div>
  )
}