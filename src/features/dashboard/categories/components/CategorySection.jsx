"use client"

import { useEffect, useState } from "react"
import CategoryList from "./CategoryList"
import Pagnition from "@/components/Pagination"
import ActionBar from "@/components/ActionBar"
import { useStoreCategory } from "../hooks/useCategory"

const EMPTY_FILTERS = {
  date_from: null,
  date_to: null,
  price_min: null,
  price_max: null,
  chemical_name: null,
}

const CategorySection = () => {
  const {
    // data
    sortedFertilizers,
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
  } = useStoreCategory()

  // Local draft — only applied to URL on "Save changes"
  const [draft, setDraft] = useState(filters ?? EMPTY_FILTERS)
  useEffect(() => setDraft(filters ?? EMPTY_FILTERS), [filters])

  return (
    <div className="space-y-10">
      <h1 className="text-4xl font-extrabold tracking-tight text-royal-gold-900">
        ဓာတ်မြေဩဇာ
      </h1>

      <ActionBar
        routing="fertilizers/create"
        searchRef={searchRef}
        onSearchChange={onSearchChange}
        clearSearchInput={clearSearchInput}
        filterValue={draft}
        onFilterChange={setDraft}
        onFilterApply={() => applyFilters(draft)}
        onFilterReset={() => {
          setDraft(EMPTY_FILTERS)
          resetFilters()
        }}
      />

      <CategoryList
        fertilizers={sortedFertilizers}
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

export default CategorySection