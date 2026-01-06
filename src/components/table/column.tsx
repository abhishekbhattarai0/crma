// import { type ColumnDef } from "@tanstack/react-table"



// export const RowCell = ({ row, name }: { row: any, name: string }) => {
//   return (
//     <div >
//       <div className=" font-normal text-gray-600">{row.getValue(String(name))}</div>
//     </div>
//   )
// }

// export const RowCellWithTags = ({ row, name }: { row: any, name: string }) => {
//   console.log(row.getValue(name))
//   return (
//     <div >
//       <div className=" font-normal text-gray-600 flex gap-2">
//         {row.getValue(String(name)).map((item: string) => <div className="bg-blue-500 text-white px-2 py-0.5 rounded-md">{item}</div>)}
//       </div>
//     </div>
//   )
// }


// export const columns: ColumnDef<Contact>[] = [
//   {
//     accessorKey: "name",
//     header: () => <div className="">Name</div>,
//     cell: ({ row }) => <RowCell row={row} name='name' />,
//   },
//   {
//     accessorKey: "avatar",
//     header: () => <div className="">Avatar</div>,
//     cell: ({ row }) => {
//       const avatarUrl = row.getValue('avatar');
//       return <IconComponent className="size-9" img={avatarUrl as string} />
//     }
//   },
//   {
//     accessorKey: "email",
//     header: () => <div className="">Email</div>,
//     cell: ({ row }) => <RowCell row={row} name='email' />,
//   },
//   {
//     accessorKey: "phone",
//     header: () => <div className="">Phone</div>,
//     cell: ({ row }) => <RowCell row={row} name='phone' />,
//   },
//   {
//     accessorKey: "leadScore",
//     header: () => <div className="">LeadScore</div>,
//     cell: ({ row }) => <RowCell row={row} name='leadScore' />,
//   },
//   {
//     accessorKey: "company",
//     header: () => <div className="">Company</div>,
//     cell: ({ row }) => <RowCell row={row} name='company' />,
//   },
//   {
//     accessorKey: "tags",
//     header: () => <div className="">Tags</div>,
//     cell: ({ row }) => <RowCellWithTags row={row} name='tags' />,
//   },


// ]