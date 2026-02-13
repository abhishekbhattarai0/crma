import ActionRow from "@/components/table/action-row";
import RowCell from "@/components/table/row-cell";
import type { PostalProps } from "@/dummydata/postalData";
import { type ColumnDef, } from "@tanstack/react-table"
import RowWithImage from "../row/row-with-image";


export const postalColumn: ColumnDef<PostalProps>[] = [
  {
    accessorKey: 'action',
    header: () => <div className="">Action</div>,
    cell: () => <ActionRow />,
  },
  {
    accessorKey: "referenceNo",
    header: () => <div className="">Reference No</div>,
    cell: ({ row }) => <RowCell row={row} columnId='referenceNo' />,
  },
  {
    accessorKey: "date",
    header: () => <div className="">Date</div>,
    cell: ({ row }) => <RowCell row={row} columnId='date' />
  },
  {
    accessorKey: "fromDate",
    header: () => <div className="">From Date</div>,
    cell: ({ row }) => <RowCell row={row} columnId='fromDate' />,
  },
  {
    accessorKey: "address",
    header: () => <div className="">Address</div>,
    cell: ({ row }) => <RowCell row={row} columnId='address' />,
  },
  {
    accessorKey: "note",
    header: () => <div className="">Note</div>,
    cell: ({ row }) => <RowCell row={row} columnId='note' />,
  },
  {
    accessorKey: "toTitle",
    header: () => <div className="">To Title</div>,
    cell: ({ row }) => <RowCell row={row} columnId='toTitle' />,
  },
  {
    accessorKey: "docs",
    header: () => <div className="">Docs</div>,
    cell: ({ row }) => <RowWithImage row={row} columnId='docs' />,
  },


]
