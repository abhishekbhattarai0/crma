import CustomModal from "@/components/common/custom-modal";
import { Button } from "@/components/ui/button"
import useModal from "@/hooks/useModal";
import { useNavigate } from "react-router-dom"
import type { Row } from "@tanstack/react-table";
import { Eye, Pencil, Trash } from "lucide-react"
// import type { accessControlProps } from "@/dummydata/accessControlData";
import UpdateAccessControlForm from "../form/update-access-control-form";
import type { accessControlType } from "./access-control-column";
import { useDeleteRoleByRoleNameMutation } from "../../userStore/userApi";
import ConfirmationDialog from "@/components/confirmation-dialog";

type RowCellProps<TData> = {
    row: Row<TData>;
    //   columnId: string;
    //   onClick?: () => void
};

const AccessControlActionRow = <TData extends accessControlType,>({ row }: RowCellProps<TData>) => {

    const navigate = useNavigate()
    const { setOpen } = useModal()
    const [deleteRoleByRoleName] = useDeleteRoleByRoleNameMutation()

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

    const handleDeleteAccessControl = (role: string) => {
        deleteRoleByRoleName(role)
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

            <ConfirmationDialog
                title="Delete Access Control"
                description="Are you sure you want to delete this access control?"
                onConfirm={() => handleDeleteAccessControl(row.original?.role)}
                onCancel={() => { }}
            >
                <Button
                    size={'icon-sm'}
                    variant={'outline'}
                    className="rounded-full hover:bg-red-500 hover:text-white text-red-500"

                >
                    <Trash />
                </Button>
            </ConfirmationDialog>
        </div>
    )
}

export default AccessControlActionRow