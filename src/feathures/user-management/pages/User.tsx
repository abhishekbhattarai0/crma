import { DataTable } from "@/components/table/data-table"
// import { userData } from "@/dummydata/user"
import { userColumns } from "@/feathures/user-management/components/table/user-column"
import useModal from "@/hooks/useModal"
import CustomModal from "@/components/common/custom-modal"
import UserForm from "../components/form/create-user-form"
import { useGetAllUsersQuery } from "../userStore/userApi"

const User = () => {
  const { setOpen } = useModal()
  const { data, isLoading } = useGetAllUsersQuery({})
  console.log("data", data)

  const onAdd = () => {
    setOpen(
      <CustomModal title="Postal Dispatch Form">
        <UserForm />
      </CustomModal>
    )
  }

  return (
    <div>
      <DataTable columns={userColumns} data={isLoading ? [] : data?.data} onAdd={onAdd} searchKey="firstName" isLoading={isLoading} />
    </div>
  )
}


export default User 
