"use client"
import React, { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DateRangePicker() {
  const [date, setDate] = useState({
    from: new Date(2023, 5, 13),
    to: new Date(2023, 6, 14),
  });

  return (
    <div className="w-full mt-3">
      <Popover>
        {/* Base UI uses render={() => <button />} instead of asChild */}
        <PopoverTrigger
          render={(props) => (
            <button
              {...props}
              type="button"
              className={cn(
                "flex items-center w-full justify-start text-left font-normal h-12 px-4     hover:bg-gray-50 text-base shadow-sm cursor-pointer focus:outline-none",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-3 h-5 w-5 text-gray-700 shrink-0" />
              <span className="text-gray-700 font-medium truncate">
                {date?.from ? (
                  date.to ? (
                    <>
                      {format(date.from, "LLL dd, yyyy")} -{" "}
                      {format(date.to, "LLL dd, yyyy")}
                    </>
                  ) : (
                    format(date.from, "LLL dd, yyyy")
                  )
                ) : (
                  <span>Select start to end date</span>
                )}
              </span>
            </button>
          )}
        />
        <PopoverContent align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
            showOutsideDays={true}
            className="p-2"
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}