import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import type { Table } from "@tanstack/react-table"

interface DataTablePaginationProps<TData> {
  table: Table<TData>
}


const Pagination = <TData,>({
  table,
}: DataTablePaginationProps<TData>) => {
  const ranges = [
    { start: 0, end: 10 },
    { start: 10, end: 20 },
    { start: 20, end: 30 },
    { start: 30, end: 40 },
  ]
  return (
    <div className="mt-2 flex justify-between items-center  ">
      <div>
        {/* <Button
          variant={'outline'}
          size={'sm'}
          className="text-foreground/50  text-xs h-6"
        >
          <span>Add</span>
          <CgAdd />
        </Button> */}
      </div>


      <div className="flex gap-2">

        <Button
          variant={'outline'}
          size={'sm'}
          className={cn(
            " text-foreground/90  text-xs h-6 rounded-sm",
            !table.getCanPreviousPage() ? 'text-gray-800 border-gray-300  cursor-not-allowed hover:bg-gray-700 ' : 'text-primary'
          )}
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <span className="text-foreground/90">Previous</span>
        </Button>

        <div
          className="flex gap-1"
        >

          {ranges.map(({ start, end }) => (
            <Button
              key={`${start}-${end}`}
              onClick={() => {
                table.setPageIndex(start / (end - start))
                table.setPageSize(end - start)
              }}
              className="text-xs h-6"
              variant="outline"
              size={'icon-sm'}
            >
              {end}
            </Button>
          ))}
        </div>

        <Button
          variant={'outline'}
          size={'sm'}
          className={cn(
            " text-foreground/90  text-xs h-6 rounded-sm",
            !table.getCanNextPage() ? 'text-gray-800 border-gray-300  cursor-not-allowed  ' : 'text-primary'
          )}
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <span className="text-foreground/90">Next</span>
        </Button>
      </div>

    </div>
  )
}

export default Pagination
