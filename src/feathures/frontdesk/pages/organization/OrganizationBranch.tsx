import { DataTable } from "@/components/table/data-table"
import { branchColumn } from "@/feathures/frontdesk/components/table/column/branch-column"
import { useParams } from "react-router-dom"
import { useGetOrganizationBranchsByOrgIdQuery } from "../../api/api"
import useModal from "@/hooks/useModal"
import CustomModal from "@/components/common/custom-modal"
import CreateBranchForm from "./OrganizationBranchDetails"


const OrganizationBranch = () => {
    const {organizationId} = useParams()
    const {data, isLoading} = useGetOrganizationBranchsByOrgIdQuery(organizationId!)
    const { setOpen} = useModal()
    if(isLoading) return (
    <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
    </div>
    )
    const handleCreateBranch = () => {
       setOpen(
        <CustomModal
            title="Create Branch"
            className="max-w-[900px]!"
        >
            <CreateBranchForm />
        </CustomModal>
       ) 
    }
    return (
        <div>
            <DataTable columns={branchColumn} data={data?.data || []} onAdd={handleCreateBranch} />
        </div>
    )
}

export default OrganizationBranch