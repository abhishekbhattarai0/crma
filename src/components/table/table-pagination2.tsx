// import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Table } from "@tanstack/react-table";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
  // totalCount: number;
  // Add these explicit props to trigger re-renders
  pageIndex: number;
  pageSize: number;
}

const Pagination = <TData,>({ table, pageIndex, pageSize }: DataTablePaginationProps<TData>) => {
  //   const { pageIndex, pageSize } = table.getState().pagination;

  // Calculate numbers based on state
  // If totalCount is 0, start should be 0. Otherwise (index * size) + 1
  // const startEntry = totalCount === 0 ? 0 : pageIndex * pageSize + 1;

  // End entry should not exceed the totalCount
  // const endEntry = Math.min((pageIndex + 1) * pageSize, totalCount);


  function getPagination(currentPage:number, totalPages:number, siblings = 1) {
    const items: (number | string)[] = [];

    for (let i = 1; i <= totalPages; i++) {
      // Logic to decide which pages to show
      // const isFirstPage = i === 1;
      // const isLastPage = i === totalPages;
      const isWithinRange = i >= currentPage - siblings && i <= currentPage + siblings;

      if (
        // isFirstPage ||
        // isLastPage ||
        isWithinRange
      ) {
        items.push(i);
      } else if (
        (i === currentPage - siblings - 1 && i > 1) ||
        (i === currentPage + siblings + 1 && i < totalPages)
      ) {
        // Add ellipsis if we are exactly one step outside the range
        items.push("...");
      }
    }

    // Remove consecutive duplicates of "..." just in case
    return items.filter((item, index) => item !== "..." || items[index - 1] !== "...");
  }



  return (
    <div className="mt-4 sm:flex space-y-3 sm:space-y-0 justify-between items-center px-2">
      <div className="text-xs text-muted-foreground flex items-center gap-4">
        {/* Showing <strong>{startEntry}</strong> to{" "}
        <strong>{endEntry}</strong> of <strong>{totalCount}</strong> entries */}

         <div>
          Page {pageIndex + 1} of {table.getPageCount() || 1}
          </div> 

          <div className="flex items-center gap-2">
            <span className="text-xs">Page Size :</span>
           <Select onValueChange={(value)=>table.setPageSize(Number(value))}>
            <SelectTrigger size="sm">
              <SelectValue  defaultValue={pageSize} placeholder={pageSize}/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="30">30</SelectItem>
              <SelectItem value="40">40</SelectItem>
            </SelectContent>
           </Select> 
          </div>
      </div>

      <div className="flex gap-2">
        {/* <Button
          variant="outline"
          size="extra-sm"
          onClick={() => table.setPageIndex(0)}
          disabled={pageIndex === 0}
        >
          <ChevronsLeft />
        </Button> */}

        <Button
          variant="outline"
          size="extra-sm"
          onClick={() => table.previousPage()}
          disabled={pageIndex === 0}
        >
          <ChevronLeft />
        </Button>

        
        <div className="flex items-center gap-2">
          {getPagination(pageIndex + 1, table.getPageCount() || 1).map((page, idx) =>
            page === "..." ? (
              <span
                key={`ellipsis-${idx}`}
                className="px-2 text-muted-foreground select-none"
              >
                &#8230;
              </span>
            ) : (
              <div
                key={page}
                // variant={pageIndex === page - 1 ? "default" : "outline"} // Highlight active page
                // size="extra-sm"
                onClick={() => table.setPageIndex(Number(page) - 1)}
                className={cn("px-2 py-0.5 text-xs cursor-pointer border", pageIndex === Number(page) - 1 ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground")}
              >
                {page}
              </div>
            )
          )}
        </div>

        <Button
          variant="outline"
          size="extra-sm"
          onClick={() => table.nextPage()}
          disabled={(pageIndex + 1) === table.getPageCount()}
        >
          <ChevronRight />
        </Button>
        {/* <Button
          variant="outline"
          size="extra-sm"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={(pageIndex + 1) === table.getPageCount()}
        >
          <ChevronsRight />
        </Button> */}
      </div>
    </div>
  );
};

export default Pagination;