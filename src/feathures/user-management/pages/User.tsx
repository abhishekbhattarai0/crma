import { DataTable } from "@/components/table/data-table"
import { userData } from "@/dummydata/user"
import { userColumns } from "../components/table/userColumn"
import useModal from "@/hooks/useModal"
import CustomModal from "@/components/common/custom-modal"
import UserForm from "../components/form/user-form"

const User = () => {
  const { setOpen } = useModal()

  const onAdd = () => {
    setOpen(
      <CustomModal title="Postal Dispatch Form">
        <UserForm />
      </CustomModal>
    )}

    return (
      <div>
        <DataTable columns={userColumns} data={userData} onAdd={onAdd} />
      </div>
    )
  }


  export default User 
