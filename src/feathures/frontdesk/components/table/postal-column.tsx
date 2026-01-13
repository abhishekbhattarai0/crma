import { Button } from "@/components/ui/button";
import type { PostalProps } from "@/dummydata/postalData";
import { type ColumnDef, type Row } from "@tanstack/react-table"
import { Eye, Pencil } from "lucide-react";
import { useNavigate } from "react-router-dom";

type RowCellProps<TData> = {
  row: Row<TData>;
  name: keyof TData;
};
// {
//     referenceNo: "REF-2024-005",
//     data: "Project Completion Letter",
//     fromDate: "2024-05-30",
//     address: "Client Office, Biratnagar, Nepal",
//     note: "Formal project completion and handover letter.",
//     toTitle: "Client Representative",
//     letterNo: "LTR-PT-005",
//     docs: [
//       "https://example.com/docs/project-completion-letter.pdf"
//     ]
//   }

// type PostalDispatchProp = {
//   referenceNo: string
//   date: string
//   fromDate: string
//   address: string
//   note: string
//   toTitle: string
//   docs: string[]
// }

export const RowCell = <TData,>({ row, name }: RowCellProps<TData>) => {
  return (
    <div>
      <div className="font-normal text-foreground/80">
        {row.getValue(name as string)}
      </div>
    </div>
  );
};


export const RowWithImage = <TData,>({ row, name }: RowCellProps<TData>) => {

  const images = row.getValue(name as string) as string[]
  return (
    <div >
      <div className=" font-normal text-foreground/80 flex gap-2">
        {/* {row.getValue(name as string)} */}
        {images.map((item: string) =>
          <img src={item} />
          //  <div className="bg-blue-500 text-white px-2 py-0.5 rounded-md">
          //   {item}
          //  </div>
        )}
      </div>
    </div>
  )
}


const ActionRow = () => {

  const navigate = useNavigate()
  return (
    <div
      // className="text-sm text-primary/60 cursor-pointer py-1 flex items-center justify-center hover:bg-primary/20 rounded-full "
      className="flex gap-2"

    >
      <Button
        size={'icon-sm'}
        variant={'outline'}
        className="rounded-full"
        onClick={() => {
          console.log('clicked eye')
          navigate('/frontdesk/postal-view')
        }}
      >
        <Eye />
      </Button>

      <Button
        size={'icon-sm'}
        variant={'outline'}
        className="rounded-full"
        onClick={() => {
          console.log('pencil eye')
        }}
      >
        <Pencil />
      </Button>
    </div>
  )
}

export default ActionRow


// eslint-disable-next-line react-refresh/only-export-components
export const postalColumn: ColumnDef<PostalProps>[] = [
  {
    accessorKey: 'action',
    header: () => <div className="">Action</div>,
    cell: () => <ActionRow />,
  },
  {
    accessorKey: "referenceNo",
    header: () => <div className="">Reference No</div>,
    cell: ({ row }) => <RowCell row={row} name='referenceNo' />,
  },
  {
    accessorKey: "date",
    header: () => <div className="">Date</div>,
    cell: ({ row }) => <RowCell row={row} name='date' />
  },
  {
    accessorKey: "fromDate",
    header: () => <div className="">From Date</div>,
    cell: ({ row }) => <RowCell row={row} name='fromDate' />,
  },
  {
    accessorKey: "address",
    header: () => <div className="">Address</div>,
    cell: ({ row }) => <RowCell row={row} name='address' />,
  },
  {
    accessorKey: "note",
    header: () => <div className="">Note</div>,
    cell: ({ row }) => <RowCell row={row} name='note' />,
  },
  {
    accessorKey: "toTitle",
    header: () => <div className="">To Title</div>,
    cell: ({ row }) => <RowCell row={row} name='toTitle' />,
  },
  {
    accessorKey: "docs",
    header: () => <div className="">Docs</div>,
    cell: ({ row }) => <RowWithImage row={row} name='docs' />,
  },


]
