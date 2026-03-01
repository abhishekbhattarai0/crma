import CustomModal from "@/components/common/custom-modal";
import { Button } from "@/components/ui/button"
import type { userDataProps } from "@/dummydata/user";
import useModal from "@/hooks/useModal";
import { useNavigate } from "react-router-dom"
import type { Row } from "@tanstack/react-table";
import { Eye, Pencil } from "lucide-react"
import EditUserForm from "../../form/update-user-form"

type RowCellProps<TData> = {
    row: Row<TData>;
    //   columnId: string;
    //   onClick?: () => void
};

const UserActionRow = <TData extends userDataProps,>({ row }: RowCellProps<TData>) => {

    const navigate = useNavigate()
    const { setOpen } = useModal()

    const onUserView = (userId: string) => {
        console.log('view user')
        console.log(userId)
        navigate(`/user-management/user-details/${userId}`)
    }

    const onUserEdit = (userId: string) => {
        setOpen(
            <CustomModal title="Edit User" >
                <EditUserForm userId={userId} key={userId} />
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
                onClick={() => onUserView(row.original?.id)}
            >
                <Eye />
            </Button>

            <Button
                size={'icon-sm'}
                variant={'outline'}
                className="rounded-full"
                onClick={() => onUserEdit(row.original?.id)}
            >
                <Pencil />
            </Button>
        </div>
    )
}

export default UserActionRow