import RowCell from "@/components/table/row-cell";
import RowCellWithDate from "@/components/table/row-with-date";

import type { LoginHistoryProps } from "@/dummydata/loginHistory";
import type { ColumnDef } from "@tanstack/react-table";
import SessionRevokeRow from "../row/session-revoke-row";



export const activeSessionColumn: ColumnDef<LoginHistoryProps>[] = [
    {
        accessorKey: "username",
        header: "Username",
        cell: ({ row }) => <RowCell row={row} columnId="username" />,
        meta: {
            label: "Username"
        }
    },
    {
        accessorKey: "ipAddress",
        header: "IP Address",
        cell: ({ row }) => <RowCell row={row} columnId="ipAddress" />,
        meta: {
            label: "IP Address"
        }
    },
    {
        accessorKey: "createdAt",
        header: "Created At",
        cell: ({ row }) => <RowCellWithDate row={row} columnId="createdAt" />,
        meta: {
            label: "Created At"
        }
    },
    {
        accessorKey: "expiresAt",
        header: "Expires At",
        cell: ({ row }) => <RowCellWithDate row={row} columnId="expiresAt" />,
        meta: {
            label: "Expires At"
        }
    },
    {
        accessorKey: "revoked",
        header: "Revoked",
        cell: ({ row }) => {
            const revoked = row.original.revoked;
            const id = row.original.id;
            console.log('first login history id', id)
            return (
                <span className={`px-2 py-1 rounded ${revoked ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"}`}>
                    {revoked ? "Yes" : "No"}
                </span>
            );
        },
        meta: {
            label: "Revoked"
        }
    },
    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => <SessionRevokeRow row={row} />
    },
]