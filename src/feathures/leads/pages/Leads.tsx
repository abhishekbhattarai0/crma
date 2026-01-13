
import { DataTable } from "@/components/table/data-table"
import { customerData } from "@/dummydata/CustomerTable"
import { customerColumns } from "../components/table/customerColumn"


const Leads = () => {
    return (
        <div className="">
            <DataTable columns={customerColumns} data={customerData} />
        </div>
    )
}

export default Leads 
