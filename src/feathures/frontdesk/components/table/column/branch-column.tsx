import type { ColumnDef } from "@tanstack/react-table";


type BranchProps = {
    id: string,
    institutionId: string,

    branchName: string,
    branchHead: string,

    contactNumber: string,
    email: string,

    address: string,
    province: string,
    city: string,
    zipCode: string,

    status: string,

    createdAt: string,
    updatedAt: string
}
export const branchColumn: ColumnDef<BranchProps>[] = [
    {
        accessorKey: "branchName",
        header: "Branch Name",
        cell: ({ row }) => {
            return (
                <div className=" font-normal text-foreground/80">
                    {row.getValue("branchName")}
                </div>
            )
        }
    },
    {
        accessorKey: "branchHead",
        header: "Branch Head",
        cell: ({ row }) => {
            return (
                <div className=" font-normal text-foreground/80">
                    {row.getValue("branchHead")}
                </div>
            )
        }
    },
    {
        accessorKey: "contactNumber",
        header: "Contact Number",
        cell: ({ row }) => {
            return (
                <div className=" font-normal text-foreground/80">
                    {row.getValue("contactNumber")}
                </div>
            )
        }
    },
    {
        accessorKey: "email",
        header: "Email",
        cell: ({ row }) => {
            return (
                <div className=" font-normal text-foreground/80">
                    {row.getValue("email")}
                </div>
            )
        }
    },
    {
        accessorKey: "address",
        header: "Address",
        cell: ({ row }) => {
            return (
                <div className=" font-normal text-foreground/80">
                    {row.getValue("address")}
                </div>
            )
        }
    },
    {
        accessorKey: "province",
        header: "Province",
        cell: ({ row }) => {
            return (
                <div className=" font-normal text-foreground/80">
                    {row.getValue("province")}
                </div>
            )
        }
    },
    {
        accessorKey: "city",
        header: "City",
        cell: ({ row }) => {
            return (
                <div className=" font-normal text-foreground/80">
                    {row.getValue("city")}
                </div>
            )
        }
    },
    {
        accessorKey: "zipCode",
        header: "Zip Code",
        cell: ({ row }) => {
            return (
                <div className=" font-normal text-foreground/80">
                    {row.getValue("zipCode")}
                </div>
            )
        }
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            return (
                <div className=" font-normal text-foreground/80">
                    {row.getValue("status")}
                </div>
            )
        }
    },

]