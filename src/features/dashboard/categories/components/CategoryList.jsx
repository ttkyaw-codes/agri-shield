"use client"

import { Input } from "@/components/ui/input"
import {
  Table, TableBody, TableHead, TableHeader, TableRow,
} from "@/components/ui/table"
import CategoryRow from "./Categoryrow"
import CategoryEmptyStage from "./CategoryEmptyStage"
import Sortable from "@/components/Sortable"
import CategoryListSkeleton from "./CategorySkeleton"

const CategoryList = ({
  fertilizers,
  isLoading,
  error,
  sortBy,
  sortDirection,
  handleSort,
  searchRef,
  onSearchChange,
  clearSearchInput,
}) => {
  if (isLoading) return <CategoryListSkeleton />

  if (error) {
    return (
      <div className="py-8 text-center text-destructive">
        Failed to load fertilizers. Please try again.
      </div>
    )
  }

  return (
      <Table className="w-full">
        <TableHeader className="text-lg md:text-xl">
          <TableRow>
            <TableHead className="w-[100px]">
              <Sortable
                sort_by="id"
                currentSortBy={sortBy}
                currentSortDirection={sortDirection}
                handleSort={handleSort}
              >
                အမှတ်စဉ်
              </Sortable>
            </TableHead>

            <TableHead>
              <Sortable
                sort_by="brand_name"
                currentSortBy={sortBy}
                currentSortDirection={sortDirection}
                handleSort={handleSort}
              >
                အမှတ်တံဆိပ်
              </Sortable>
            </TableHead>

            <TableHead>
              <Sortable
                sort_by="product_name"
                currentSortBy={sortBy}
                currentSortDirection={sortDirection}
                handleSort={handleSort}
              >
                အမည်
              </Sortable>
            </TableHead>

            <TableHead>
              <Sortable
                sort_by="prices"
                currentSortBy={sortBy}
                currentSortDirection={sortDirection}
                handleSort={handleSort}
              >
                ဈေးနှုန်း
              </Sortable>
            </TableHead>

            <TableHead>
              <Sortable
                sort_by="chemical_name"
                currentSortBy={sortBy}
                currentSortDirection={sortDirection}
                handleSort={handleSort}
              >
                အမျိုးအစား
              </Sortable>
            </TableHead>

            <TableHead>
              <Sortable
                sort_by="created_at"
                currentSortBy={sortBy}
                currentSortDirection={sortDirection}
                handleSort={handleSort}
              >
                စာရင်းသွင်းသည့်ရက်စွဲ
              </Sortable>
            </TableHead>

            <TableHead className="text-left">လုပ်ဆောင်ချက်</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="text-sm md:text-base">
          {fertilizers.length === 0 ? (
            <CategoryEmptyStage />
          ) : (
            fertilizers.map((fertilizer) => (
              <CategoryRow key={fertilizer.id} invoice={fertilizer} />
            ))
          )}
        </TableBody>
      </Table>
  )
}

export default CategoryList