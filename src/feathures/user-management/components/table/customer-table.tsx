import { DataTable } from "@/components/table/data-table"
import { customerData } from "@/dummydata/CustomerTable"
import { userColumns } from "./userColumn"


const ContactTable = () => {
  return (
    <div className="">
      <DataTable columns={userColumns} data={customerData} />
    </div>
  )
}

export default ContactTable 
