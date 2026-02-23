import { useState, useMemo } from "react";
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  type PaginationState,
  // type SortingState,
} from "@tanstack/react-table";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "../ui/button";
import { CgAdd } from "react-icons/cg";
import { Loader2 } from "lucide-react";
import { useLocation } from "react-router-dom";
import Pagination from "./table-pagination2";
// import TableSearch from "./table-search";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  useQuery: any; // The RTK Query hook
  onAdd?: () => void;
  searchKey?: string;
}

export function DataTable<TData, TValue>({
  columns,
  useQuery,
  onAdd,
  // searchKey,
}: DataTableProps<TData, TValue>) {
  // 1. Local states for Server-side Sync
  // const [sorting, setSorting] = useState<SortingState>([]);

  const [globalFilter, setGlobalFilter] = useState("");
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  // 2. Extract sorting string (e.g., "roleName.desc")
  // const sortString = useMemo(() => 
  //   sorting.map((s) => `${s.id}.${s.desc ? "desc" : "asc"}`).join(","), 
  // [sorting]);

  // 3. Call the hook directly inside the table
  // const { data, isLoading, isFetching } = useQuery({
  //   page: pageIndex,
  //   pageSize,
  //   // sort: sortString,
  //   // search: globalFilter,
  // });

  const state = useLocation().state



  const { data, isLoading, isFetching } = useQuery({
    userId: state?.userId,
    page: pageIndex + 1,      // TanStack is 0-indexed, your API is 1-indexed (page 1)
    limit: pageSize,          // Mapped to "limit"
    order: "desc",             // Mapped to "order"
    // [searchKey || 'search']: globalFilter, // Dynamically uses 'ip' (or searchKey) as the key
  });



  const pagination = useMemo(() => ({ pageIndex, pageSize }), [pageIndex, pageSize]);
  // const pagination = { pageIndex, pageSize};

  const table = useReactTable({
    data: data?.data ?? [],
    columns,
    rowCount: data?.meta?.totalCount,
    pageCount: data?.meta?.totalCount ? Math.ceil((data?.meta?.totalCount ?? 0) / pageSize) : 1,
    state: {
      // sorting, 
      pagination,
      globalFilter
    },
    // onSortingChange: setSorting,
    onPaginationChange: setPagination,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true, // Tells table we handle pagination on server
    manualSorting: true,    // Tells table we handle sorting on server
    manualFiltering: true,  // Tells table we handle search on server
  });


  if (isLoading) {
    return <Loader2 className="animate-spin" />;
  }

  return (
    <div className="w-full overflow-auto relative">
      {/* Visual indicator when fetching new data */}
      {isFetching && !isLoading && (
        <div className="absolute inset-0  z-10 flex items-center justify-center">
          <Loader2 className="animate-spin text-primary" />
        </div>
      )}

      <div className="mb-4 flex justify-between gap-4">
        {/* {searchKey && (
          <TableSearch 
            value={globalFilter} 
            onChange={setGlobalFilter} 
            placeholder={searchKey} 
          />
        )} */}
        <div className="flex gap-2">
          {/* Column toggle and Add button logic stays same */}
          {onAdd && <Button variant="outline" onClick={onAdd}><CgAdd /> Add</Button>}
        </div>
      </div>

      <div className="rounded-md border overflow-hidden">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className="cursor-pointer select-none"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    <div className="flex items-center gap-2">
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      {{ asc: " 🔼", desc: " 🔽" }[header.column.getIsSorted() as string] ?? null}
                    </div>
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow><TableCell colSpan={columns.length} className="h-24 text-center"><Loader2 className="mx-auto animate-spin" /></TableCell></TableRow>
            ) : table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="px-1 py-2 border-r">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow><TableCell colSpan={columns.length} className="h-24 text-center">No results.</TableCell></TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <Pagination pageIndex={pageIndex} pageSize={pageSize} table={table} />
    </div>
  );
}
// import {
//   type ColumnDef,
//   type ColumnFiltersState,
//   flexRender,
//   getCoreRowModel,
//   getFilteredRowModel,
//   getPaginationRowModel,
//   getSortedRowModel,
//   type PaginationState,
//   type SortingState,
//   useReactTable,
// } from "@tanstack/react-table"

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table"
// import { useState } from "react"
// import Pagination from "./table-pagination"
// import TableSearch from "./table-search"
// import { Button } from "../ui/button"
// import { CgAdd } from "react-icons/cg"
// import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "../ui/dropdown-menu"
// import { ChevronDown, Loader2 } from "lucide-react"

// interface DataTableProps<TData, TValue> {
//   columns: ColumnDef<TData, TValue>[]
//   data: TData[],
//   onAdd?: () => void,
//   searchKey?: string,
//   isLoading?: boolean
// }

// export function DataTable<TData, TValue>({
//   columns,
//   data,
//   onAdd,
//   searchKey,
//   isLoading
// }: DataTableProps<TData, TValue>) {

//   const [sorting, setSorting] = useState<SortingState>([])
//   const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
//   const [pagination, setPagination] = useState<PaginationState>({
//     pageIndex: 0,
//     pageSize: 10,
//   })




//   const table = useReactTable({
//     data,
//     columns,
//     getCoreRowModel: getCoreRowModel(),
//     onSortingChange: setSorting,
//     getSortedRowModel: getSortedRowModel(),
//     onColumnFiltersChange: setColumnFilters,
//     getFilteredRowModel: getFilteredRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     onPaginationChange: setPagination,
//     state: {
//       sorting,
//       columnFilters,
//       pagination
//     }
//   })

//   return (
//     <div className="w-full overflow-auto">
//       <div className=" ">
//         <div className="mb-4  w-full flex justify-between sm:gap-0 gap-4 ">
//           {searchKey && <TableSearch table={table} className="sm:w-1/2 w-full" searchKey={searchKey} />}
//           {!searchKey && <div className="w-full "></div>}
//           <div className="flex gap-2">
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button variant="outline" className="ml-auto">
//                   Columns <ChevronDown />
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="end">
//                 {table
//                   .getAllColumns()
//                   .filter((column) => column.getCanHide())
//                   .map((column) => {
//                     return (
//                       <DropdownMenuCheckboxItem
//                         key={column.id}
//                         className="capitalize"
//                         checked={column.getIsVisible()}
//                         onCheckedChange={(value) =>
//                           column.toggleVisibility(!!value)
//                         }
//                       >
//                         {/* {column.columnDef.header as string } */}
//                         {column.columnDef.meta?.label ?? column.id}
//                       </DropdownMenuCheckboxItem>
//                     )
//                   })}
//               </DropdownMenuContent>
//             </DropdownMenu>
//             {onAdd && <Button
//               variant={'outline'}
//               onClick={onAdd}
//               className="shadow-none"
//             >
//               <CgAdd />
//               Add
//             </Button>}
//           </div>
//         </div>
//         <div className="overflow-hidden rounded-md border">
//           <Table>
//             <TableHeader>
//               {table.getHeaderGroups().map((headerGroup) => (
//                 <TableRow key={headerGroup.id}>
//                   {headerGroup.headers.map((header) => {
//                     return (
//                       <TableHead className='border-r' key={header.id}>
//                         {header.isPlaceholder
//                           ? null
//                           : flexRender(
//                             header.column.columnDef.header,
//                             header.getContext()
//                           )}
//                       </TableHead>
//                     )
//                   })}
//                 </TableRow>
//               ))}
//             </TableHeader>
//             <TableBody>
//               {table.getRowModel().rows?.length ? (
//                 table.getRowModel().rows.map((row) => (
//                   <TableRow
//                     key={row.id}
//                     data-state={row.getIsSelected() && "selected"}
//                   >
//                     {row.getVisibleCells().map((cell) => (
//                       <TableCell key={cell.id}

//                         className=" px-1 py-2 border-r"
//                       >
//                         {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                       </TableCell>
//                     ))}
//                   </TableRow>
//                 ))
//               ) : (
//                 <TableRow>
//                   <TableCell colSpan={columns.length} className="h-24 text-center">
//                     {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : "No results."}
//                   </TableCell>
//                 </TableRow>
//               )}
//             </TableBody>
//           </Table>
//         </div>
//         <Pagination table={table} />
//       </div>
//     </div>
//   )
// }
