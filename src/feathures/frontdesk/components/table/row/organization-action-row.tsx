import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import type { Row } from "@tanstack/react-table";
import { Eye, } from "lucide-react"
import type { OrganizationProp } from "../column/organization-column";
// import type { accessControlProps } from "@/dummydata/accessControlData";

type RowCellProps<TData> = {
    row: Row<TData>;
    //   columnId: string;
    //   onClick?: () => void
};

const OrganizationActionRow = <TData extends OrganizationProp,>({ row }: RowCellProps<TData>) => {

    const navigate = useNavigate()

    // const onAccessControlView = (roleName: string, roleId: string) => {
    //     console.log('view user')
    //     console.log(roleName, roleId)
    //     navigate(`/user-management/access-control/role-details/${roleName}`, { state: { roleId: roleId } })
    // }

    const onOrganizationView = (organizationId: string) => {
        console.log('view user')
        console.log(organizationId)
        navigate(`/frontdesk/organization/${organizationId}`, { state: { organizationId: organizationId } })
    }

  

 
    return (
        <div
            className="flex gap-2"
        >
            <Button
                size={'icon-sm'}
                variant={'outline'}
                className="rounded-full"
                onClick={() => onOrganizationView(row.original?.id)}
            >
                <Eye />
            </Button>
        </div>
    )
}

export default OrganizationActionRow