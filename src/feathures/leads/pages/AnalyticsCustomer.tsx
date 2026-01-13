
import { DataTable } from "@/components/table/data-table"
import { customerData } from "@/dummydata/CustomerTable"
import { customerColumns } from "@/feathures/leads/components/table/customerColumn"


const AnalyticsCustomer = () => {
    return (
        <div className="">
            <DataTable columns={customerColumns} data={customerData} />
        </div>
    )
}

export default AnalyticsCustomer 