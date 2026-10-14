"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'

const CategoryPagination = ({
  selectedCount = 0,
  totalCount = 100,
  pageIndex = 1,
  pageCount = 10,
  pageSize = 10,
  onPageChange,
  onPageSizeChange,
}) => {
  return (
    <div className="flex w-full items-center justify-between border-t border-slate-200 px-4 py-3 dark:border-stone-800">
      {/* Left: Selected Row Count */}
      <div className="text-sm text-slate-500 dark:text-stone-400">
        {selectedCount} of {totalCount} row(s) selected.
      </div>

      {/* Right: Pagination Controls */}
      <div className="flex items-center gap-6 lg:gap-8">
        {/* Rows per page selector */}
        <div className="flex items-center gap-2">
          <p className="text-sm font-medium text-slate-700 dark:text-stone-300">
            Rows per page
          </p>
          <select
            value={pageSize}
            onChange={(e) => onPageSizeChange?.(Number(e.target.value))}
            className="h-9 w-[70px] rounded-md border border-slate-200 bg-white px-2 py-1 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-100"
          >
            {[10, 20, 30, 40, 50].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        {/* Page status text */}
        <div className="flex items-center text-sm font-medium text-slate-900 dark:text-stone-100">
          Page {pageIndex} of {pageCount}
        </div>

        {/* Navigation buttons */}
        <div className="flex items-center gap-1">
          {/* First Page */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => onPageChange?.(1)}
            disabled={pageIndex <= 1}
            className="h-8 w-8 border-slate-200 bg-white p-0 hover:bg-slate-100 disabled:opacity-40 dark:border-stone-800 dark:bg-stone-900 dark:hover:bg-stone-800"
          >
            <ChevronsLeft className="h-4 w-4" />
          </Button>

          {/* Previous Page */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => onPageChange?.(pageIndex - 1)}
            disabled={pageIndex <= 1}
            className="h-8 w-8 border-slate-200 bg-white p-0 hover:bg-slate-100 disabled:opacity-40 dark:border-stone-800 dark:bg-stone-900 dark:hover:bg-stone-800"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {/* Next Page */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => onPageChange?.(pageIndex + 1)}
            disabled={pageIndex >= pageCount}
            className="h-8 w-8 border-slate-200 bg-white p-0 hover:bg-slate-100 disabled:opacity-40 dark:border-stone-800 dark:bg-stone-900 dark:hover:bg-stone-800"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Last Page */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => onPageChange?.(pageCount)}
            disabled={pageIndex >= pageCount}
            className="h-8 w-8 border-slate-200 bg-white p-0 hover:bg-slate-100 disabled:opacity-40 dark:border-stone-800 dark:bg-stone-900 dark:hover:bg-stone-800"
          >
            <ChevronsRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CategoryPagination