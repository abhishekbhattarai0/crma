import { DataTable } from "@/components/table/data-table2"
import { branchColumn } from "@/feathures/frontdesk/components/table/column/branch-column"
import { useParams } from "react-router-dom"
import { useGetOrganizationBranchsByOrgIdQuery } from "../../api/api"
import useModal from "@/hooks/useModal"
import CustomModal from "@/components/common/custom-modal"
import CreateBranchForm from "../../components/form/create-organization-branch"


const OrganizationBranch = () => {
    const {organizationId} = useParams()
    // const {data, isLoading} = useGetOrganizationBranchsByOrgIdQuery(organizationId as string)
    const { setOpen} = useModal()
    // console.log('organization id', data)
    // if(isLoading) return (
    // <div className="flex items-center justify-center h-screen">
    //     <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
    // </div>
    // )
    const handleCreateBranch = () => {
       setOpen(
        <CustomModal
            title="Create Branch"
            className="max-w-[900px]!"
        >
            <CreateBranchForm organizationId={organizationId as string} />
        </CustomModal>
       ) 
    }
    return (
        <div>
            <DataTable 
             columns={branchColumn} 
            //  data={data?.data || []} 
            useQuery={useGetOrganizationBranchsByOrgIdQuery}
             onAdd={handleCreateBranch} />
        </div>
    )
}

export default OrganizationBranch