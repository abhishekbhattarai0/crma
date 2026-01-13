
import { type ColumnDef, type Row } from "@tanstack/react-table";
// user.schema.ts
export type UserSchema = {
  personalDetails: {
    firstName: string;
    lastName: string;
    gender: "Male" | "Female" | "Other";
    profilePhoto: string;
    dob: string;
    maritalStatus: string;
  };
  contactInformation: {
    officialEmail: string;
    personalEmail: string;
    phone: string;
    emergencyContactPhone: string;
    currentAddress: string;
    permanentAddress: string;
  };
  companyInformation: {
    department: string;
    team: string;
    designation: string;
    jobTitle: string;
    shift: string;
  };
  systemAccess: {
    username: string;
    role: "ADMIN" | "DEVELOPER" | "HR" | "MANAGER";
    permissionGroup: string;
    status: "ACTIVE" | "INACTIVE" | "SUSPENDED";
  };
};


type RowCellProps<TData> = {
  row: Row<TData>;
  columnId: string;
};

export const RowCell = <TData,>({ row, columnId }: RowCellProps<TData>) => {
  return (
    <div className="font-normal text-foreground/80">
      {row.getValue(columnId)}
    </div>
  );
};

export const StatusCell = <TData,>({ row, columnId }: RowCellProps<TData>) => {
  const status = row.getValue(columnId) as string;

  const statusStyles: Record<string, string> = {
    ACTIVE: "bg-green-100 text-green-700",
    INACTIVE: "bg-gray-100 text-gray-700",
    SUSPENDED: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`px-2 py-0.5 rounded-md text-xs font-medium ${statusStyles[status]
        }`}
    >
      {status}
    </span>
  );
};

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import type { UserDataProps } from "@/dummydata/user";

type AvatarCellProps<TData> = {
  row: Row<TData>;
  columnId: string;
};

export const AvatarCell = <TData,>({
  row,
  columnId,
}: AvatarCellProps<TData>) => {
  return (
    <Avatar className="size-8">
      <AvatarImage src={row.getValue(columnId)} />
    </Avatar>
  );
};



// eslint-disable-next-line react-refresh/only-export-components
export const userColumns: ColumnDef<UserDataProps>[] = [
  // Avatar
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
