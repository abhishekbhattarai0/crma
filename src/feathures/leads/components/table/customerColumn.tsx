import RowCell from "@/components/table/row-cell";
import RowCellWithTags from "@/components/table/row-with-tags";
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import type { CustomerProp } from "@/dummydata/CustomerTable"
import { type ColumnDef } from "@tanstack/react-table"






export const customerColumns: ColumnDef<CustomerProp>[] = [
    {
        accessorKey: "name",
        header: () => <div className="">Name</div>,
        cell: ({ row }) => <RowCell row={row} columnId='name' />,
        meta: {
            label: "Name"
        }
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
        },
        meta: {
            label: "Avatar"
        }

    },
    {
        accessorKey: "email",
        header: () => <div className="">Email</div>,
        cell: ({ row }) => <RowCell row={row} columnId='email' />,
        meta: {
            label: "Email"
        }
    },
    {
        accessorKey: "phone",
        header: () => <div className="">Phone</div>,
        cell: ({ row }) => <RowCell row={row} columnId='phone' />,
        meta: {
            label: "Phone"
        }
    },
    {
        accessorKey: "leadScore",
        header: () => <div className="">LeadScore</div>,
        cell: ({ row }) => <RowCell row={row} columnId='leadScore' />,
        meta: {
            label: "Lead Score"
        }
    },
    {
        accessorKey: "company",
        header: () => <div className="">Company</div>,
        cell: ({ row }) => <RowCell row={row} columnId='company' />,
        meta: {
            label: "Company"
        }
    },
    {
        accessorKey: "tags",
        header: () => <div className="">Tags</div>,
        cell: ({ row }) => <RowCellWithTags row={row} columnId='tags' />,
        meta: {
            label: "Tags"
        }
    },


]
