import { DataTable } from "@/components/table/data-table"
import { branchColumn } from "@/feathures/frontdesk/components/table/column/branch-column"

const data =[
{
  "id": "branch_003",
  "institutionId": "org_001",

  "branchName": "HSA Pokhara Branch",
  "branchHead": "Deepak Gurung",

  "contactNumber": "+977-61-452789",
  "email": "pokhara@hsa.edu.np",

  "address": "Chipledhunga-2",
  "province": "Gandaki",
  "city": "Pokhara",
  "zipCode": "33700",

  "status": "active",

  "createdAt": "2025-01-18T11:00:00Z",
  "updatedAt": "2025-02-05T10:45:00Z"
}
] 
const OrganizationBranch = () => {
    return (
        <div>
            <DataTable columns={branchColumn} data={data} />
        </div>
    )
}

export default OrganizationBranch