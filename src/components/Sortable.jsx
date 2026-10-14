"use client"

import { ChevronDown, ChevronUp } from "lucide-react"

const Sortable = ({
  children,
  handleSort,
  sort_by,
  currentSortBy,
  currentSortDirection,
  align = "left",
}) => {
  const handleSortAsc = (e) => {
    e.stopPropagation()

    handleSort({
      sort_by,
      sort_direction: "asc",
    })
  }

  const handleSortDesc = (e) => {
    e.stopPropagation()

    handleSort({
      sort_by,
      sort_direction: "desc",
    })
  }

  const isAsc =
    currentSortBy === sort_by && currentSortDirection === "asc"

  const isDesc =
    currentSortBy === sort_by && currentSortDirection === "desc"

  return (
    <div
      className={`flex items-center gap-1 ${
        align === "right" ? "justify-end" : "justify-start"
      }`}
    >
      <div className="flex flex-col">
        <button
          type="button"
          onClick={handleSortAsc}
          className={`flex h-3.5 w-4 items-center justify-center rounded
            hover:bg-stone-200 ${
              isAsc ? "text-green-600" : "text-stone-400"
            }`}
        >
          <ChevronUp className="size-3.5" />
        </button>

        <button
          type="button"
          onClick={handleSortDesc}
          className={`flex h-3.5 w-4 items-center justify-center rounded
            hover:bg-stone-200 ${
              isDesc ? "text-green-600" : "text-stone-400"
            }`}
        >
          <ChevronDown className="size-3.5" />
        </button>
      </div>

      <span className="whitespace-nowrap font-medium">
        {children}
      </span>
    </div>
  )
}

export default Sortable