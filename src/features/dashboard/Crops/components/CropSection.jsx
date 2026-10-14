"use client"

import { useEffect, useState } from "react"
import CropList from "./CropList"
import Pagnition from "@/components/Pagination"
import ActionBar from "@/components/ActionBar"
import { useCrop } from "../hooks/useCrop"
import Link from "next/link"

const EMPTY_FILTERS = {
  date_from: null,
  date_to: null,
  soil_type: null,
  climate: null,
  variety: null,
}


const CropSection = () => {
  const {
    // data
    sortedCrops,
    isLoading,
    error,
    data,

    // sorting
    sortBy,
    sortDirection,
    handleSort,

    // search
    searchRef,
    onSearchChange,
    clearSearchInput,

    // pagination
    links,
    meta,
    handlePaginate,
    handleLimit,

    // filters
    filters = EMPTY_FILTERS,
    applyFilters = () => {},
    resetFilters = () => {},
  } = useCrop()

  // Local draft — only applied to URL on "Save changes"

  return (
    <div className="space-y-10">
      <h1 className="text-4xl font-extrabold tracking-tight text-royal-gold-900">
        သီးနှံများ
      </h1>
        <Link  href={"crops/create"}
      className="w-30 flex items-end gap-2 px-5 py-2 bg-primary hover:bg-green-600 text-white text-sm font-medium rounded-md shadow-sm transition-colors">create</Link>
      <CropList
        crops={sortedCrops}
        isLoading={isLoading}
        error={error}
        sortBy={sortBy}
        sortDirection={sortDirection}
        handleSort={handleSort}
      />

      <Pagnition
        links={links}
        meta={meta}
        handlePaginate={handlePaginate}
        handleLimit={handleLimit}
      />
    </div>
  )
}

export default CropSection