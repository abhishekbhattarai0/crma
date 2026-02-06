import { DataTable } from "@/components/table/data-table"
import { userColumns } from "./user-column"
import { userData } from "@/dummydata/user"


const ContactTable = () => {
  return (
    <div className="">
      <DataTable columns={userColumns} data={userData} />
    </div>
  )
}

export default ContactTable 
