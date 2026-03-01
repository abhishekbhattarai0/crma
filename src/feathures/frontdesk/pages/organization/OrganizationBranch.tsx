import { DataTable } from "@/components/table/data-table"
import { branchColumn } from "@/feathures/frontdesk/components/table/column/branch-column"
import { useParams } from "react-router-dom"
import { useGetOrganizationBranchByOrgIdQuery } from "../../api/api"


const OrganizationBranch = () => {
    const {organizationId} = useParams()
    const {data, isLoading} = useGetOrganizationBranchByOrgIdQuery(organizationId!)
    // console.log('organization id', data)
    if(isLoading) return (
    <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
    </div>
    )
    return (
        <div>
            <DataTable columns={branchColumn} data={data?.data || []} />
        </div>
    )
}

export default OrganizationBranch