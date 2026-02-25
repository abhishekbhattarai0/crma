// import { DataTable } from "@/components/table/data-table"
// import { userData } from "@/dummydata/user"
import useModal from "@/hooks/useModal"
import CustomModal from "@/components/common/custom-modal"
import UserForm from "../../components/form/create-user-form"
import { useGetAllUsersQuery } from "../../userStore/userApi"
import { Loader } from "lucide-react"
import { userColumns } from "../../components/table/column/user-column"
import HeaderWithRefetch from "@/components/header/header-with-refetch";
import { DataTable } from "@/components/table/data-table2"

const User = () => {
  const { setOpen } = useModal()
  const { data, isLoading, refetch, isFetching } = useGetAllUsersQuery({})

  const onAdd = () => {
    setOpen(
      <CustomModal title="Create User" className="!max-w-[calc(100vw-8vw)]">
        <UserForm />
      </CustomModal>
    )
  }

  if (isLoading) {
    return <Loader className="animate-spin mx-auto" />
  }

  return (
    <div>
      <HeaderWithRefetch refetch={refetch} isFetching={isFetching} />
      <div className="mt-4">
        {/* <DataTable columns={userColumns} data={data?.data || []} onAdd={onAdd} searchKey="email" isLoading={isLoading} /> */}
        <DataTable 
          columns={userColumns} 
          useQuery={useGetAllUsersQuery} 
          onAdd={onAdd} 
          searchKey="officialEmail"
          searchFields={[
            { label: 'Official Email', value: 'officialEmail' },
            { label: 'First Name', value: 'firstName' },
            { label: 'Designation', value: 'designation' },
          ]}
        /> 
      </div>
    </div>
  )
}


export default User 
