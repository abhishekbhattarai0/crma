import type { UserDataProps } from "@/dummydata/user";
import { AvatarCell } from "@/components/table/avatar-cell";
import ActionRow from "@/components/table/action-row";

import { type ColumnDef } from "@tanstack/react-table";
import RowCell from "@/components/table/row-cell";
import StatusCell from "./status-cell";
// user.schema.ts
// type UserSchema = {
//   personalDetails: {
//     firstName: string;
//     lastName: string;
//     gender: "Male" | "Female" | "Other";
//     profilePhoto: string;
//     dob: string;
//     maritalStatus: string;
//   };
//   contactInformation: {
//     officialEmail: string;
//     personalEmail: string;
//     phone: string;
//     emergencyContactPhone: string;
//     currentAddress: string;
//     permanentAddress: string;
//   };
//   companyInformation: {
//     department: string;
//     team: string;
//     designation: string;
//     jobTitle: string;
//     shift: string;
//   };
//   systemAccess: {
//     username: string;
//     role: "ADMIN" | "DEVELOPER" | "HR" | "MANAGER";
//     permissionGroup: string;
//     status: "ACTIVE" | "INACTIVE" | "SUSPENDED";
//   };
// };

export const userColumns: ColumnDef<UserDataProps>[] = [
  // Avatar
  {
    accessorKey: 'action',
    header: () => <div className="">Action</div>,
    cell: () => <ActionRow />,
  },
  {
    id: "avatar",
    header: "Avatar",
    accessorFn: (row) => row.personalDetails.profilePhoto,
    cell: ({ row }) => <AvatarCell row={row} columnId="avatar" />,
  },

  // Full Name
  {
    id: "fullName",
    header: "Full Name",
    accessorFn: (row) =>
      `${row.personalDetails.firstName} ${row.personalDetails.lastName}`,
    cell: ({ row }) => <RowCell row={row} columnId="fullName" />,
  },

  // Department
  {
    id: "department",
    header: "Department",
    accessorFn: (row) => row.companyInformation.department,
    cell: ({ row }) => <RowCell row={row} columnId="department" />,
  },

  // Designation
  {
    id: "designation",
    header: "Designation",
    accessorFn: (row) => row.companyInformation.designation,
    cell: ({ row }) => <RowCell row={row} columnId="designation" />,
  },

  // Role
  {
    id: "role",
    header: "Role",
    accessorFn: (row) => row.systemAccess.role,
    cell: ({ row }) => <RowCell row={row} columnId="role" />,
  },

  // Official Email
  {
    id: "email",
    header: "Email",
    accessorFn: (row) => row.contactInformation.officialEmail,
    cell: ({ row }) => <RowCell row={row} columnId="email" />,
  },

  // Phone
  {
    id: "phone",
    header: "Phone",
    accessorFn: (row) => row.contactInformation.phone,
    cell: ({ row }) => <RowCell row={row} columnId="phone" />,
  },

  // Status
  {
    id: "status",
    header: "Status",
    accessorFn: (row) => row.systemAccess.status,
    cell: ({ row }) => <StatusCell row={row} columnId="status" />,
  },
];
