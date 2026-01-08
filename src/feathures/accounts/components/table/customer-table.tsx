import { columns } from "./customerColumn"
import { DataTable } from "@/components/table/data-table"
import { customerData } from "@/dummydata/CustomerTable"


const ContactTable = () => {
    return (
        <div className="">
            <DataTable columns={columns} data={customerData} />
        </div>
    )
}

export default ContactTable 