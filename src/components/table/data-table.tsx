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
                        className="w-full text-foreground border-kd active:outline-none text-sm rounded-sm"
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
                            {[10, 20, 30, 40, 50].map((pageSize) => (
                                <Button key={pageSize} value={pageSize} className="text-xs h-6  text-foreground/90 border-foreground/30 rounded-sm " variant={'outline'} size={'icon-sm'}>
                                    {pageSize}
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


            </div>
        </div>
    )
}
