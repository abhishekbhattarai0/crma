import CustomModal from "@/components/common/custom-modal";
import { Button } from "@/components/ui/button"
import useModal from "@/hooks/useModal";
import { useNavigate } from "react-router-dom"
import type { Row } from "@tanstack/react-table";
import { Eye, Pencil } from "lucide-react"
// import type { accessControlProps } from "@/dummydata/accessControlData";
import UpdateAccessControlForm from "../form/update-access-control-form";
import type { accessControlType } from "./access-control-column";

type RowCellProps<TData> = {
    row: Row<TData>;
    //   columnId: string;
    //   onClick?: () => void
};

const AccessControlActionRow = <TData extends accessControlType,>({ row }: RowCellProps<TData>) => {

    const navigate = useNavigate()
    const { setOpen } = useModal()

    // const onAccessControlView = (roleName: string, roleId: string) => {
    //     console.log('view user')
    //     console.log(roleName, roleId)
    //     navigate(`/user-management/access-control/role-details/${roleName}`, { state: { roleId: roleId } })
    // }

    const onAccessControlView = (role: string) => {
        console.log('view user')
        console.log(role)
        navigate(`/user-management/access-control/${role}`, { state: { role: role } })
    }

    const onAccessControlEdit = (role: string) => {
        setOpen(
            <CustomModal title="Edit Access Control" >
                <UpdateAccessControlForm role={role} key={role} />
            </CustomModal>
        )
    }
    return (
        <div
            className="flex gap-2"

        >
            <Button
                size={'icon-sm'}
                variant={'outline'}
                className="rounded-full"
                // onClick={() => onAccessControlView(row.original?.roleName, row.original?.id)}
                onClick={() => onAccessControlView(row.original?.role)}
            >
                <Eye />
            </Button>

            <Button
                size={'icon-sm'}
                variant={'outline'}
                className="rounded-full"
                // onClick={() => onAccessControlEdit(row.original?.id)}
                onClick={() => onAccessControlEdit(row.original?.role)}
            >
                <Pencil />
            </Button>
        </div>
    )
}

export default AccessControlActionRow