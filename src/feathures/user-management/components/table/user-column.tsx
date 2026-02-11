import { AvatarCell } from "@/components/table/avatar-cell";

import { type ColumnDef } from "@tanstack/react-table";
import RowCell from "@/components/table/row-cell";
import StatusCell from "./status-cell";
import { ArrowDownUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { userDataProps } from "@/dummydata/user";
import UserActionRow from "./user-action-row";




export const userColumns: ColumnDef<userDataProps>[] = [
  // Avatar
  {

    header: 'Action',
    accessorKey: 'action',
    cell: ({ row }) => <UserActionRow row={row} />,
  },
  {
    id: "avatar",
    header: "Avatar",
    accessorFn: (row) => row.avatar,
    cell: ({ row }) => <AvatarCell row={row} columnId="avatar" />,
  },

  // Full Name
  {
    id: "fullName",
    header: ({ column }) => {
      return (
        <Button className="bg-white dark:bg-background text-foreground/85" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Full Name <ArrowDownUp />
        </Button>
      )
    },
    accessorFn: (row) =>
      `${row.firstName} ${row.lastName}`,
    cell: ({ row }) => <RowCell row={row} columnId="fullName" />,
    meta: {
      label: "Full Name"
    }
  },

  // Department
  {
    id: "department",
    header: "Department",
    accessorFn: (row) => row.department,
    cell: ({ row }) => <RowCell row={row} columnId="department" />,
  },

  // Designation
  {
    id: "designation",
    header: "Designation",
    accessorFn: (row) => row.designation,
    cell: ({ row }) => <RowCell row={row} columnId="designation" />,
  },

  // Role
  {
    id: "role",
    header: "Role",
    accessorFn: (row) => row.jobTitle,
    cell: ({ row }) => <RowCell row={row} columnId="role" />,
  },

  // Official Email
  {
    id: "email",
    header: "Email",
    accessorFn: (row) => row.officialEmail,
    cell: ({ row }) => <RowCell row={row} columnId="email" />,
  },

  // Phone
  {
    id: "phone",
    header: "Phone",
    accessorFn: (row) => row.phone,
    cell: ({ row }) => <RowCell row={row} columnId="phone" />,
  },

  // Status
  {
    id: "status",
    header: "Status",
    accessorFn: (row) => row.isActive,
    cell: ({ row }) => <StatusCell row={row} columnId="status" />,
  },
];