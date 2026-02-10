import RowCell from "@/components/table/row-cell";
// import type { accessControlProps } from "@/dummydata/accessControlData";
import type { ColumnDef } from "@tanstack/react-table";
import AccessControlActionRow from "./access-control-action-row";

export type accessControlType = {
    permission: string[],
    role: string,
}
export const accessControlColumns: ColumnDef<accessControlType>[] = [
    {
        accessorKey: "permission",
        header: "Permission",
        cell: ({ row }) => <AccessControlActionRow row={row} />
    },
    {
        accessorKey: "role",
        header: "Role Name",
        cell: ({ row }) => <RowCell row={row} columnId="role" />,
    },
    // {
    //     accessorKey: "description",
    //     header: "Description",
    //     cell: ({ row }) => <RowCell row={row} columnId="description" />,
    // },
    // {
    //     accessorKey: "totalUsers",
    //     header: "Total Users",
    //     cell: ({ row }) => <RowCell row={row} columnId="totalUsers" />,
    // },
]