import type { ColumnDef } from "@tanstack/react-table";
import OrganizationActionRow from "../row/organization-action-row";


export type OrganizationProp = {
  id: string;
  institutionName: string;
  founderName: string;
  affiliation: string;
  institutionShortCode: string;
  panNumber: string;
  primaryEmail: string;
  alternateEmail: string;
  contactNumber: string;
  officeNo: string;
  address: string;
  province: string;
  city: string;
  zipCode: string;
  institutionType: string;
  packageType: string;
  hasBranch: boolean;
  branchCount: number;
  logo: string;
  tagline: string;
  createdAt: string;
  updatedAt: string;
}
export const organizationColumn: ColumnDef<OrganizationProp>[] = [
    {
        accessorKey: "action",
        header: "Action",
        cell: ({ row }) => {
            return (
                <OrganizationActionRow row={row} />
            )
        }
    },
    {
        accessorKey: "institutionName",
        header: "Institution Name",
        cell: ({ row }) => {
            return (
                <div className=" font-normal text-foreground/80">
                    {row.getValue("institutionName")}
                </div>
            )
        }
    },
    {
        accessorKey: "founderName",
        header: "Founder Name",
        cell: ({ row }) => {
            return (
                <div className=" font-normal text-foreground/80">
                    {row.getValue("founderName")}
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
        accessorKey: "primaryEmail",
        header: "Primary Email",
        cell: ({ row }) => {
            return (
                <div className=" font-normal text-foreground/80">
                    {row.getValue("primaryEmail")}
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
        accessorKey:'createdAt',
        header:'Created At',
        cell:({row})=>{
            return(
                <div className=" font-normal text-foreground/80">
                    {row.getValue("createdAt")}
                </div>
            )
        }
    },
    // {
    //     accessorKey: "status",
    //     header: "Status",
    //     cell: ({ row }) => {
    //         return (
    //             <div className=" font-normal text-foreground/80">
    //                 {row.getValue("status")}
    //             </div>
    //         )
    //     }
    // },

]