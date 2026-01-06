import {
    type ColumnDef,
    type ColumnFiltersState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    type PaginationState,
    type SortingState,
    useReactTable,
} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useState } from "react"
import { cn } from "@/utils/cn"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { CgAdd } from "react-icons/cg"

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

export function DataTable<TData, TValue>({
    columns,
    data,
}: DataTableProps<TData, TValue>) {

    const [sorting, setSorting] = useState<SortingState>([])
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
    const [pagination, setPagination] = useState<PaginationState>({
        pageIndex: 0,
        pageSize: 10,
    })

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        // getPaginationRowModel: getPaginationRowModel(),
        onPaginationChange: setPagination,
        state: {
            sorting,
            columnFilters,
            pagination
        }
    })

    return (
        <div className="w-full overflow-auto">
            <div className=" ">
                <div className="mb-4 sm:w-1/2 w-full ">
                    <Input
                        placeholder="Filter emails..."
                        value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
                        onChange={(event) =>
                            table.getColumn("email")?.setFilterValue(event.target.value)
                        }
                        className="w-full text-gray-800 text-sm rounded-sm"
                    />
                </div>
                <div className="overflow-hidden rounded-md border">
                    <Table>
                        <TableHeader>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => {
                                        return (
                                            <TableHead className='border-r' key={header.id}>
                                                {header.isPlaceholder
                                                    ? null
                                                    : flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    )}
                                            </TableHead>
                                        )
                                    })}
                                </TableRow>
                            ))}
                        </TableHeader>
                        <TableBody>
                            {table.getRowModel().rows?.length ? (
                                table.getRowModel().rows.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        data-state={row.getIsSelected() && "selected"}
                                    >
                                        {row.getVisibleCells().map((cell) => (
                                            <TableCell key={cell.id}

                                                className=" px-2 py-0.5 border-r"
                                            >
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={columns.length} className="h-24 text-center">
                                        No results.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
                <div className="mt-2 flex justify-between items-center  ">
                    <div>
                        <Button
                            variant={'outline'}
                            size={'sm'}
                            className="text-foreground/50  text-xs h-6"
                        >
                            <span>Add</span>
                            <CgAdd />
                        </Button>
                    </div>
                    <div className="flex gap-2">

                        <Button
                            variant={'outline'}
                            size={'sm'}
                            // className="text-foreground/50  text-xs h-6 rounded-sm"
                            className={cn(
                                " text-blue-600  text-xs h-6 rounded-sm",
                                !table.getCanPreviousPage() ? 'text-gray-400 cursor-not-allowed hover:bg-gray-700 ' : 'text-primary'
                            )}
                            onClick={() => table.previousPage()}
                            disabled={!table.getCanPreviousPage()}
                        >
                            <span>Previous</span>
                        </Button>

                        <div
                            className="flex gap-1"
                        >
                            {[10, 20, 30, 40, 50].map((pageSize) => (
                                <Button key={pageSize} value={pageSize} className="text-xs h-6  text-blue-600 border-primary" variant={'outline'} size={'icon-sm'}>
                                    {pageSize}
                                </Button>
                            ))}
                        </div>

                        <Button
                            variant={'outline'}
                            size={'sm'}
                            className={cn(
                                " text-blue-600  text-xs h-6 rounded-sm",
                                !table.getCanNextPage() ? 'text-gray-400 cursor-not-allowed hover:bg-gray-700 ' : 'text-primary'
                            )}
                            onClick={() => table.nextPage()}
                            disabled={!table.getCanNextPage()}
                        >
                            <span>Next</span>
                        </Button>
                    </div>

                </div>


            </div>
        </div>
    )
}


{/* <div className="flex w-full  px-2 mt-4 ">
    <Button
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
        className={cn(
            "p-2 rounded-sm   text-white bg-blue-500 hover:text-gray-50",
            !table.getCanPreviousPage() ? 'bg-gray-700 cursor-not-allowed hover:bg-gray-700 text-gray-50' : ''
        )}

    >
        Previous

    </Button>

    <span className="flex items-center gap-1">
        <div>Page</div>
        <strong>
            {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount().toLocaleString()}
        </strong>
    </span>
    <span className="flex items-center gap-1">
        | Go to page:
        <input
            type="number"
            min="1"
            max={table.getPageCount()}
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0
                table.setPageIndex(page)
            }}
            className="border p-1 rounded w-16"
        />
    </span>

    <select
        value={table.getState().pagination.pageSize}
        onChange={(e) => {
            table.setPageSize(Number(e.target.value))
        }}
    >
        {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
                Show {pageSize}
            </option>
        ))}
    </select>

    <Button
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
        className={cn(
            "p-2 rounded-sm   text-white bg-blue-500 hover:text-gray-50",
            !table.getCanNextPage() ? 'bg-gray-700 cursor-not-allowed hover:bg-gray-700' : ''
        )}
    >
        Next
    </Button>

</div> */}
