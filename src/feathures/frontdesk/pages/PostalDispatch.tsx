import { DataTable } from "@/components/table/data-table"
import { postal } from "@/dummydata/postalData"
import useModal from "@/hooks/useModal"
import CustomModal from "@/components/common/custom-modal"
import DispatchForm from "../components/form/postal-dispatch-form"
import { postalColumn } from "../components/table/postal-column"

const Postaldispatch = () => {
  const { setOpen } = useModal()

  const onAdd = () => {
    setOpen(
      <CustomModal title="Postal Dispatch Form" subheading="">
        <DispatchForm />
      </CustomModal>
    )
  }
  return (
    <div>
      <DataTable columns={postalColumn} data={postal} onAdd={onAdd} />
    </div>
  )
}

export default Postaldispatch
