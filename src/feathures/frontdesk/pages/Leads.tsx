
import { DataTable } from "@/components/table/data-table"
import { customerData } from "@/dummydata/CustomerTable"
import { columns } from "../components/table/customerColumn"


const Leads = () => {
    return (
        <div className="">
            <DataTable columns={columns} data={customerData} />
        </div>
    )
}

export default Leads 
