"use client";

import { Button } from "@/components/ui/button";
import {
  TableCell,
  TableRow,
} from "@/components/ui/table";
import {
  Pencil,
  Trash,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { formatMyanmarDate } from "@/lib/utils";

const CategoryRow = ({ invoice }) => {
  const router = useRouter();

  const handleRowClick = () => {
    router.push(`/fertilizers/${invoice.id}`);
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    router.push(`/fertilizers/${invoice.id}/edit`);
  };

  const handleDelete = (e) => {
    e.stopPropagation();

  };

  return (
    <TableRow
      onClick={handleRowClick}
      className="group cursor-pointer transition-colors hover:bg-green-50"
    >
      <TableCell className="py-4 font-medium">
        {invoice.id}
      </TableCell>

      <TableCell className="py-4 font-medium">
        {invoice.brand_name}
      </TableCell>

      <TableCell className="py-4 font-medium">
        {invoice.product_name}
      </TableCell>

      <TableCell className="py-4">
        {invoice.prices?.toLocaleString()} ကျပ်
      </TableCell>

      <TableCell className="py-4">
        {invoice.chemical_name || "-"}
      </TableCell>

      <TableCell className="py-4">
        {formatMyanmarDate(invoice.createdAt)}
      </TableCell>

      <TableCell className="py-3">
        <div
          className="flex items-center gap-2"
          onClick={(e) => e.stopPropagation()}
        >
          <Button
            variant="secondary"
            size="icon"
            onClick={handleEdit}
            className="h-9 w-9 bg-gray-100 text-slate-700 hover:bg-amber-500 hover:text-white"
          >
            <Pencil className="size-4" />
          </Button>

          <Button
            variant="secondary"
            size="icon"
            onClick={handleDelete}
            className="h-9 w-9 bg-gray-100 text-slate-700 hover:bg-red-500 hover:text-white"
          >
            <Trash className="size-4" />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default CategoryRow;