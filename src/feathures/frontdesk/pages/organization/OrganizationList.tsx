import { DataTable } from "@/components/table/data-table2"
import { organizationColumn } from "@/feathures/frontdesk/components/table/column/organization-column"
import { useGetOrganizationQuery } from "../../api/api";
import useModal from '@/hooks/useModal'
import CustomModal from "@/components/common/custom-modal";
import CreateOrganizationForm from "../../components/form/create-organization-form";

const OrganizationBranch = () => {
    const {setOpen} = useModal()
    const handleAdd = () => {
        setOpen(
            <CustomModal title="Create Organization" className="!max-w-full ">
                <CreateOrganizationForm />
            </CustomModal>
        )
    }
    return (
        <div>
            <DataTable columns={organizationColumn} useQuery={useGetOrganizationQuery} onAdd={handleAdd} />
        </div>
    )
}

export default OrganizationBranch