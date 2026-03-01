import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import type { Row } from "@tanstack/react-table";
import { Eye, } from "lucide-react"
import type { BranchProps } from "../column/branch-column";

type RowCellProps<TData> = {
    row: Row<TData>;
};

const OrganizationBranchActionRow = <TData extends BranchProps,>({ row }: RowCellProps<TData>) => {

    const navigate = useNavigate()

 

    const onOrganizationView = (organizationId: string, branchId: string) => {
        console.log('view user')
        console.log(organizationId)
        navigate(`/frontdesk/organization/${organizationId}/branches/${branchId}`)
    }

  

 
    return (
        <div
            className="flex gap-2"
        >
            <Button
                size={'icon-sm'}
                variant={'outline'}
                className="rounded-full"
                onClick={() => onOrganizationView(row.original?.organizationId,row.original?.id)}
            >
                <Eye />
            </Button>
        </div>
    )
}

export default OrganizationBranchActionRow 