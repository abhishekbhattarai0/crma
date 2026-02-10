import { DataTable } from "@/components/table/data-table"
// import { accessControlData } from "@/dummydata/accessControlData"
import { accessControlColumns } from "../components/table/access-control-column"
import useModal from "@/hooks/useModal"
import CustomModal from "@/components/common/custom-modal"
import CreateAccessControlForm from "../components/form/create-access-control-form"
import { useGetAllAccessControlQuery } from "../userStore/userApi"
import { useEffect } from "react"


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

    useEffect(() => {
        console.log(data);
    }, [data])
    return (
        <div className="">
            {isLoading ? <p>Loading...</p> : <p>{data.message}</p>}
            <DataTable columns={accessControlColumns} data={isLoading ? [] : data.data} searchKey="roleName" onAdd={addAccessControl} />
        </div>
    )
}

export default AccessControl 