import { DataTable } from "@/components/table/data-table"
import { accessControlColumns } from "../../components/table/column/access-control-column"
import useModal from "@/hooks/useModal"
import CustomModal from "@/components/common/custom-modal"
import CreateAccessControlForm from "../../components/form/create-access-control-form"
import { useGetAllAccessControlQuery } from "../../userStore/userApi"


const AccessControl = () => {
    const { setOpen } = useModal()
    const { data, isLoading } = useGetAllAccessControlQuery({});
    const addAccessControl = () => {
        setOpen(
            <CustomModal>
                <CreateAccessControlForm />
            </CustomModal>
        )

    }


    return (
        <div className="">
            <DataTable columns={accessControlColumns} data={isLoading ? [] : data.data} searchKey="roleName" onAdd={addAccessControl} />
        </div>
    )
}

export default AccessControl 