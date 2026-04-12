import { useState, useMemo } from "react";
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  type PaginationState,
  type SortingState,
  getSortedRowModel,
  // type SortingState,
} from "@tanstack/react-table";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "../ui/button";
import { CgAdd } from "react-icons/cg";
import { ChevronDown, Loader2, LucideSortAsc, LucideSortDesc } from "lucide-react";
import { useLocation, useParams } from "react-router-dom";
import Pagination from "./table-pagination2";
import TableSearch from "./table-search2";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "../ui/dropdown-menu"

interface SearchFieldOption {
  label: string
  value: string
}
interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  useQuery: any; // The RTK Query hook
  onAdd?: () => void;
  searchKey?: string;
  searchFields?: SearchFieldOption[]
}

export function DataTable<TData, TValue>({
  columns,
  useQuery,
  onAdd,
  searchFields = [],
  searchKey,
}: DataTableProps<TData, TValue>) {


  // local sorting
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const [searchField, setSearchField] = useState<string>()
  const [searchTerm, setSearchTerm] = useState<string>()
  const [toggle, settoggle] = useState(false)

  const state = useLocation().state
  const params = useParams()

  const { data, isLoading, isFetching } = useQuery({
    refetchOnMountOrArgChange: true,
    userId: state?.userId,
    organizationId: params?.organizationId,
    page: pageIndex + 1,      // TanStack is 0-indexed, your API is 1-indexed (page 1)
    limit: pageSize,          // Mapped to "limit"
    order: toggle ? "asc" : "desc",             // Mapped to "order"
    searchField: searchTerm ? searchField : undefined,
    searchTerm: searchTerm || undefined
  });

  console.log(data)



  const pagination = useMemo(() => ({ pageIndex, pageSize }), [pageIndex, pageSize]);

  const table = useReactTable({
    data: data?.data ?? [],
    columns,
    rowCount: data?.meta?.totalCount,
    pageCount: data?.meta?.totalCount ? Math.ceil((data?.meta?.totalCount ?? 0) / pageSize) : 1,
    state: {
      sorting, 
      pagination,
      globalFilter
    },
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onPaginationChange: setPagination,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true, // Tells table we handle pagination on server
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
        {searchKey &&
          <TableSearch
            fields={searchFields}
            defaultField={searchFields[0]?.value}
            onSearch={({ field, term }) => {
              setSearchField(field)
              setSearchTerm(term)
              setPagination((prev) => ({
                ...prev,
                pageIndex: 0, // 🔹 reset page on search
              }))
            }}
            className="sm:w-1/2 w-full"
          />}
        {!searchKey && <div className="w-full "></div>}

        <div className="flex gap-2">

          <Button
            onClick={() => settoggle((prev) => !prev)}
            variant="outline"
            className="ml-auto"
          >

            {/* Sorting */}
            {toggle ? <LucideSortAsc /> : <LucideSortDesc />} Sort
          </Button>


          {/* Hide columns */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Columns <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {/* {column.columnDef.header as string } */}
                      {column.columnDef.meta?.label ?? column.id}
                    </DropdownMenuCheckboxItem>
                  )
                })}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* add new row */}
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
                      {{ asc: <LucideSortAsc/>, desc: <LucideSortDesc/> }[header.column.getIsSorted() as string] ?? null}
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