import { DataTable } from "@/components/table/data-table"
// import { userData } from "@/dummydata/user"
import { userColumns } from "@/feathures/user-management/components/table/user-column"
import useModal from "@/hooks/useModal"
import CustomModal from "@/components/common/custom-modal"
import UserForm from "../components/form/create-user-form"
import { useGetAllUsersQuery } from "../userStore/userApi"
import { Loader } from "lucide-react"

const User = () => {
  const { setOpen } = useModal()
  const { data, isLoading } = useGetAllUsersQuery({})
  console.log("data", data)

  const onAdd = () => {
    setOpen(
      <CustomModal title="Create User">
        <UserForm />
      </CustomModal>
    )
  }

  if (isLoading) {
    return <Loader className="animate-spin mx-auto" />
  }

  return (
    <div>
      <DataTable columns={userColumns} data={data?.data} onAdd={onAdd} searchKey="email" isLoading={isLoading} />
    </div>
  )
}


export default User 
