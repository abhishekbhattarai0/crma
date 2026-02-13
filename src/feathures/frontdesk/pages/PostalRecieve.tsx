import { DataTable } from "@/components/table/data-table"
import { postal } from "@/dummydata/postalData"
import useModal from "@/hooks/useModal"
import CustomModal from "@/components/common/custom-modal"
import { postalColumn } from "../components/table/column/postal-column"
import PostalRecieveForm from "../components/form/postal-recieve-form"

const PostalRecieve = () => {
    const { setOpen } = useModal()

    const onAdd = () => {
        setOpen(
            <CustomModal title="Postal Recieve Form" subheading="">
                <PostalRecieveForm />
            </CustomModal>
        )
    }
    return (
        <div>
            <DataTable columns={postalColumn} data={postal} onAdd={onAdd} />
        </div>
    )
}

export default PostalRecieve
