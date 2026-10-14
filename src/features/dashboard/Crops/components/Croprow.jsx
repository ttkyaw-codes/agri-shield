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

const CropRow = ({ crop }) => {
  const router = useRouter();

  const handleRowClick = () => {
    router.push(`/crops/${crop.id}`);
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    router.push(`/crops/${crop.id}/edit`);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    // Delete action handler
  };

  return (
    <TableRow
      onClick={handleRowClick}
      className="group cursor-pointer transition-colors hover:bg-green-50"
    >
      <TableCell className="py-4 font-medium">
        {crop.id}
      </TableCell>

      <TableCell className="py-4 font-medium">
        {crop.name || "-"}
      </TableCell>
      <TableCell className="py-4">
        {formatMyanmarDate(crop.created_at)}
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

export default CropRow;