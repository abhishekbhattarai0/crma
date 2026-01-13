import { DataTable } from "@/components/table/data-table"
import { customerData } from "@/dummydata/CustomerTable"
import { customerColumns } from "./customerColumn.tsx"


const ContactTable = () => {
    return (
        <div className="">
            <DataTable columns={customerColumns} data={customerData} />
        </div>
    )
}

export default ContactTable 