import { Avatar, AvatarImage } from "@/components/ui/avatar"
import type { CustomerProp } from "@/dummydata/CustomerTable"
import { type ColumnDef, type Row } from "@tanstack/react-table"

type RowCellProps<TData> = {
    row: Row<TData>;
    name: keyof TData;
};



export const RowCell = <TData,>({ row, name }: RowCellProps<TData>) => {
    return (
        <div>
            <div className="font-normal text-foreground/80">
                {row.getValue(name as string)}
            </div>
        </div>
    );
};


export const RowCellWithTags = <TData,>({ row, name }: RowCellProps<TData>) => {

    return (
        <div >
            <div className=" font-normal text-foreground/80 flex gap-2">
                {row.getValue(name as string)}
                {/* {row.getValue(name ).map((item: string) => <div className="bg-blue-500 text-white px-2 py-0.5 rounded-md">{item}</div>)} */}
            </div>
        </div>
    )
}


// eslint-disable-next-line react-refresh/only-export-components
export const columns: ColumnDef<CustomerProp>[] = [
    {
        accessorKey: "name",
        header: () => <div className="">Name</div>,
        cell: ({ row }) => <RowCell row={row} name='name' />,
    },
    {
        accessorKey: "avatar",
        header: () => <div className="">Avatar</div>,
        cell: ({ row }) => {
            const avatarUrl = row.getValue('avatar');
            return (
                <Avatar className="size-8">
                    <AvatarImage src={avatarUrl as string} />
                </Avatar>
            )
        }
    },
    {
        accessorKey: "email",
        header: () => <div className="">Email</div>,
        cell: ({ row }) => <RowCell row={row} name='email' />,
    },
    {
        accessorKey: "phone",
        header: () => <div className="">Phone</div>,
        cell: ({ row }) => <RowCell row={row} name='phone' />,
    },
    {
        accessorKey: "leadScore",
        header: () => <div className="">LeadScore</div>,
        cell: ({ row }) => <RowCell row={row} name='leadScore' />,
    },
    {
        accessorKey: "company",
        header: () => <div className="">Company</div>,
        cell: ({ row }) => <RowCell row={row} name='company' />,
    },
    {
        accessorKey: "tags",
        header: () => <div className="">Tags</div>,
        cell: ({ row }) => <RowCellWithTags row={row} name='tags' />,
    },


]